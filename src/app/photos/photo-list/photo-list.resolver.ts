import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";

import { PhotoService } from "./../photo/photo.service";
import { Photo } from "../photo/photo";

@Injectable({ providedIn: "root" })
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {
  constructor(private service: PhotoService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<Photo[]>
    | Observable<Observable<Photo[]>>
    | Promise<Observable<Photo[]>> {
    const userName = route.params["userName"];
    return this.service.listFromUser(userName);
  }
}
