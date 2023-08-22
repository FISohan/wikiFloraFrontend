import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-photo-upload-preview',
  templateUrl: './photo-upload-preview.component.html',
  styleUrls: ['./photo-upload-preview.component.css']
})
export class PhotoUploadPreviewComponent {
  @Output() remove = new EventEmitter<void>();
  @Input() photoSrc?:string;
  emit(){
    this.remove.emit();
  }
}
