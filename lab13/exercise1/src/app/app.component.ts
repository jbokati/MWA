import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { DataService } from "src/app/user/services/data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private service: DataService) {}
  title = "Lab14 - Services, Dependency Injection, NgModule, Routing, Guard and HttpClientModule";

  ngOnInit(): void {
    this.service
      .getOnlineData()
      .subscribe(d => (localStorage.data = JSON.stringify(d)));
  }
}
