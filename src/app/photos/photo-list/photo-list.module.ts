import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PhotoModule } from "./../photo/photo.module";
import { FilterByDescriptionpipe } from "./filter-by-description.pipe";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { PhotosComponent } from "./photos/photos.component";
import { PhotoListComponent } from "./photo-list.component";
import { CardModule } from "./../../shared/components/card/card.module";
import { SearchComponent } from "./search/search.component";
import { DarkenOnHoverModule } from "./../../shared/directives/darken-on-hover/darken-on-hover.module";

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescriptionpipe,
    SearchComponent
  ],
  imports: [CommonModule, PhotoModule, CardModule, DarkenOnHoverModule]
})
export class PhotoListModule {}
