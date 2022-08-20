import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PhotoModule } from "./../photo/photo.module";
import { FilterByDescriptionpipe } from "./filter-by-description.pipe";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { PhotosComponent } from "./photos/photos.component";
import { PhotoListComponent } from "./photo-list.component";

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescriptionpipe
  ],
  imports: [CommonModule, PhotoModule]
})
export class PhotoListModule {}
