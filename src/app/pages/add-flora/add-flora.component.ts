import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { PhotoService } from 'src/app/Services/photo.service';
import { Photo } from 'src/app/models/photo.model';
@Component({
  selector: 'app-add-flora',
  templateUrl: './add-flora.component.html',
  styleUrls: ['./add-flora.component.css']
})
export class AddFloraComponent implements OnInit {

  constructor(private fb: FormBuilder,private photoService:PhotoService) { }

  scientificname = new FormControl('');
  coverPhoto:Photo = {
    isCoverPhoto: true,
    path: ''
  };
  photos:Photo[] = [];

  floraForm = this.fb.group({
    banglaName:[''],
    othersName:[''],
    description:[''],
    contributer:['CONTRIBUTER_ID'],
    scientificName:this.fb.group({
      genus:['gnus'],
      specificEpithet:['']
    }),
    hierarchy:this.fb.group({
      kingdom:[''],
      family:[''],
      order:[''],
      genus:[''],
      species:[''],
    }),
    photos:this.fb.array([])
  })

  ngOnInit(): void {
  }
  uploadCoverPhoto(event:any){
    console.log(event.target.files[0]);
    
    this.photoService.upload(event.target.files[0]).subscribe(res =>{
      this.coverPhoto.path = res.url;
    });
  }
  submit(){
    
    this.floraForm.get('photos')!.reset();
    this.photos.push(this.coverPhoto);
    this.photos.forEach(el => {
      this.floraForm.get('photos')!.value.push(
        //this.fb.group(
          {
          isCoverPhoto: el.isCoverPhoto,
          path: el.path
        }
        //)
      )
    });
    console.log(this.floraForm.value);
    
  }

 async uploadPhotos(event:any) {
    let files:File[] = event.target.files;
    for await (const file of files) {
      
      console.log("loading..");
      this.photoService.upload(file).subscribe(res => {
        let photo:Photo = {
          isCoverPhoto: false,
          path: res.url
        }
        let photoFormController = new FormControl();
        this.photos.push(photo);
      });

      console.log("done::" + file.name);
    }
  }

  removeAt(event:any){
    let index = parseInt(event);
    this.photoService.remove(this.photos[index].path).subscribe(res =>{
      this.photos.splice(index,1);
    })
  }
  removeCoverPhoto(){
    this.photoService.remove(this.coverPhoto.path).subscribe(res=>console.log(res))
    this.coverPhoto.path = "";
  }
}
