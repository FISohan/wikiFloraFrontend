import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoUploadPreviewComponent } from './photo-upload-preview.component';

describe('PhotoUploadPreviewComponent', () => {
  let component: PhotoUploadPreviewComponent;
  let fixture: ComponentFixture<PhotoUploadPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoUploadPreviewComponent]
    });
    fixture = TestBed.createComponent(PhotoUploadPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
