import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { UserDataService } from './Services/user-data.service';

@NgModule({
  declarations: [AppComponent, MainPageComponent, DisplayUserComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [UserDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
