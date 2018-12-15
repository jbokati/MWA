import { Component, OnInit } from "@angular/core";
import { DataService } from "./services/data.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  private userArray;
  constructor(private users: DataService) {
    this.userArray = this.users.getCachedData();
  }

  ngOnInit() {}
}
