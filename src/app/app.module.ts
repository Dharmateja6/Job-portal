
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { IgxListModule,IgxRippleModule,IgxInputGroupModule,
	IgxButtonGroupModule,IgxFilterModule,IgxIconModule,IgxAvatarModule } from 'igniteui-angular';
import { AppRoutingModule , routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JobListService } from './job-list.service';
import { HttpClientModule } from '@angular/common/http';
import { VerifyService } from './verify.service';




@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    IgxListModule ,
    IgxRippleModule,
    IgxButtonGroupModule,
    IgxInputGroupModule,
    IgxFilterModule,
    IgxIconModule,
    IgxAvatarModule
  ],
  providers: [JobListService,VerifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
