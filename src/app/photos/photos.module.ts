import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { PhotoComponent } from "./photo/photo.component";

@NgModule({
  declarations: [PhotoComponent],
  exports: [PhotoComponent],
  imports: [CommonModule, HttpClientModule]
})
export class PhotosModule {}
