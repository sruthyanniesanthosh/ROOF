import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { AdminComponent } from './admin/admin.component';
import { LoginSignupComponent } from './admin/login-signup/login-signup.component';
import { SignupComponent } from './admin/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { UserprofileComponent } from './admin/userprofile/userprofile.component';
import { AddpropertyComponent } from './properties/addproperty/addproperty.component';
import { BookingComponent } from './booking/booking.component';
import { UploadComponent } from './upload/upload.component';
import { PropertyBookedComponent } from './properties/property-booked/property-booked.component';
import { TeamComponent } from './team/team.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'properties', component: PropertiesComponent, canActivate: [AuthGaurdService]},
  {path: 'properties/new', component: AddpropertyComponent },
  {path: 'properties/booked', component: PropertyBookedComponent },
  {path: 'properties/:_id', component: PropertyDetailsComponent },
  {path: 'admin', component: AdminComponent},
  {path: 'loginsignup', component: LoginSignupComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'myprofile', component: UserprofileComponent},
  {path: 'addproperty', component: AddPropertyComponent},
  {path: 'team', component: TeamComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'booking/:_id', component: BookingComponent, canActivate: [AuthGaurdService]},
  {path: 'upload', component: UploadComponent},
  {path:'review/:_id',component: ReviewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
