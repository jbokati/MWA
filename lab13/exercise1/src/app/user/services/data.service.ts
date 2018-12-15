import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private userData;

  constructor(private http: HttpClient) {}

  getOnlineData() {
    return this.http.get("https://randomuser.me/api/?results=10");
  }

  getCachedData(): any[] {
    return JSON.parse(localStorage.data).results;
  }

  isExist(uuid):boolean{
    let user = this.getCachedData().find((user) => user.login.uuid == uuid);
    return user?true:false;
  }
}
