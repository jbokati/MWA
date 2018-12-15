import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class UserDetailComponent implements OnInit, OnDestroy {
  private userId;
  private userData;
  private paramSubcription;

  constructor(private route: ActivatedRoute, private users: DataService) {
    this.paramSubcription = route.params.subscribe(params => {
      this.userId = params["id"];
    });
  }

  ngOnInit() {
    this.userData = this.users
      .getCachedData()
      .find(user => user.login.uuid == this.userId);
  }

  ngOnDestroy(): void {
    this.paramSubcription.unsubscribe();
  }
}
