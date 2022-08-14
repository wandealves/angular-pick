import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { PhotoComponent } from "./photo/photo.component";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescriptionpipe } from './photo-list/filter-by-description.pipe';

@NgModule({
  declarations: [PhotoComponent, PhotoListComponent, PhotoFormComponent, PhotosComponent, FilterByDescriptionpipe],
  imports: [CommonModule, HttpClientModule]
})
export class PhotosModule {}
