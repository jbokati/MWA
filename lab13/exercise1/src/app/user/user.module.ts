import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { UserComponent } from "./user.component";
import { DataService } from "./services/data.service";
import { UserDetailComponent } from "./detail/detail.component";
import { RouterModule, Routes } from "@angular/router";
import { CheckUserGuard } from "./../guards/check-user.guard";

const routes: Routes = [
  { path: '', component: UserComponent },
  {
    path: 'detail/:id',
    component: UserDetailComponent,
    canActivate: [CheckUserGuard]
  }
];

@NgModule({
  declarations: [UserComponent, UserDetailComponent],
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)],
  providers: [{ provide: DataService, useClass: DataService }],
  exports: [UserComponent, UserDetailComponent],
  bootstrap: [UserComponent]
})
export class UserModule {}
