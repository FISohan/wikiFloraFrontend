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
  coverPhoto = new FormControl('');
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
      console.log(res);
    });
  }
  submit(){
    
  }
  removeCoverPhoto(){
    console.log( );
  }
}
