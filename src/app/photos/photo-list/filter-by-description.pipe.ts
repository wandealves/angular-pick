import { Pipe, PipeTransform } from "@angular/core";
import { Photo } from "../photo/photo";

@Pipe({ name: "filterByDescription" })
export class FilterByDescriptionpipe implements PipeTransform {
  transform(photos: Photo[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery.trim().toLowerCase();

    if (descriptionQuery) {
      return photos.filter(photo =>
        photo.description.toLowerCase().includes(descriptionQuery)
      );
    }

    return photos;
  }
}
