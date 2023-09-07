import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { FloraService } from 'src/app/Services/flora.service';
import { PhotoService } from 'src/app/Services/photo.service';
import { TokenService } from 'src/app/Services/token.service';
import { Photo } from 'src/app/models/photo.model';
@Component({
  selector: 'app-add-flora',
  templateUrl: './add-flora.component.html',
  styleUrls: ['./add-flora.component.css'],
})
export class AddFloraComponent implements OnInit {
  constructor(private fb: FormBuilder,
    private photoService: PhotoService,
    private floraService: FloraService,
    private route: ActivatedRoute,
    private router : Router
  ) { }

  scientificname = new FormControl('');
  coverPhoto: Photo = {
    isCoverPhoto: true,
    path: '',
  };
  photos: Photo[] = [];
  isUpdate: boolean = false;
  floraId?:string;
  floraForm = this.fb.group({
    banglaName: [''],
    othersName: [''],
    description: [''],
    contributer: ['CONTRIBUTER_ID'],
    ContributerName: ['CONTRIBUTER_NAME'],
    scientificName: this.fb.group({
      genus: [''],
      specificEpithet: [''],
    }),
    hierarchy: this.fb.group({
      kingdom: [''],
      family: [''],
      order: [''],
      genus: [''],
      species: [''],
    }),
    photos: this.fb.array([]),
    reference: ['']
  });

  @ViewChild("fileInput", { static: false })
  fileInput!: ElementRef;

  ngOnInit(): void {
    
    this.initForm()
  }
  uploadCoverPhoto(event: any) {
    console.log(event.target.files[0]);

    this.photoService.upload(event.target.files[0]).subscribe((res) => {
      this.coverPhoto.path = res.url;
    });
  }
  submit() {
    this.floraForm.get('photos')!.reset();
    this.photos.push(this.coverPhoto);
    let scientificName = this.scientificname.value?.split(' ');
    if(scientificName){
        this.floraForm.get('scientificName')?.get('genus')?.setValue(scientificName[0]);
        this.floraForm.get('scientificName')?.get('specificEpithet')?.setValue(scientificName[1]);
    }                               
    this.photos.forEach((el) => {
      if(el.path != ''){
      this.floraForm.get('photos')!.value.push({
        isCoverPhoto: el.isCoverPhoto,
        path: el.path,
      });
    }
    });
    //console.log(JSON.stringify(this.floraForm.value))
    if (this.isUpdate && this.floraId != null) {
      this.floraService.upadateFlora(JSON.stringify(this.floraForm.value),this.floraId).subscribe(d=>{
        console.log(this.floraForm.value);
        
       this.router.navigate(['/'])
      })
     }
    else {
      this.floraService.postFlora(JSON.stringify(this.floraForm.value)).subscribe(res => {
        this.floraForm.reset();
        this.scientificname.reset();
        this.photos = [];
        this.coverPhoto = {
          isCoverPhoto: true,
          path: '',
        };
        console.log(22);
        this.router.navigate(['/add-flora'])
      })
    }
  
  }

  async uploadPhotos(event: any) {
    let files: File[] = event.target.files;
    for await (const file of files) {
      this.photoService.upload(file).subscribe((res) => {
        let photo: Photo = {
          isCoverPhoto: false,
          path: res.url,
        };
        this.photos.push(photo);
      });
    }
  }

  removeAt(event: any) {
    let index = parseInt(event);
    console.log(this.photos[index].path);
    this.photoService.remove(this.photos[index].path).subscribe((res) => {
      console.log(res);
      this.photos.splice(index, 1);
    });
    this.fileInput.nativeElement.value = '';
  }
  removeCoverPhoto() {
    this.photoService
      .remove(this.coverPhoto.path);
    this.coverPhoto.path = '';
    this.fileInput.nativeElement.value = '';
  }

  initForm() {
    this.route.params.subscribe(d => {
      let id: string | undefined = d['id'];
      if (id == undefined) return;
      this.isUpdate = true;
      this.floraId = id;
      this.floraService.getFloraById(id).subscribe(d => {

        this.scientificname.setValue(d.scientificName.genus + " " + d.scientificName.specificEpithet);
        this.floraForm.setValue({
          banglaName: d.banglaName,
          contributer: d.contributer,
          ContributerName: d.contributerName,
          description: d.description,
          hierarchy: {
            family: d.hierarchy.family,
            genus: d.hierarchy.genus,
            kingdom: d.hierarchy.kingdom,
            order: d.hierarchy.order,
            species: d.hierarchy.species
          },
          othersName: d.othersName,
          reference: d.reference,
          scientificName: {
            genus: d.scientificName.genus,
            specificEpithet: d.scientificName.specificEpithet
          },
          photos: []
        })

        this.photos = d.photos;
      });

    })
  }
}
