import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ModalModule } from "../../node_modules/ng2-modal";

import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { RegistrationComponent } from './registration/registration.component'
import { ScheduleComponent } from './schedule/schedule.component'
import { SpeakersComponent } from './speakers/speakers.component'
import { SponsorsComponent } from './sponsors/sponsors.component'
import { AppComponent } from './app.component';
import { rootRouterConfig } from './app.routes';
import { NavComponent } from './nav/nav.component';
import { NavService } from './nav/nav.service';
import { CfpComponent } from './cfp/cfp.component';
import { TicketComponent } from './tickets/tickets.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    ScheduleComponent,
    SpeakersComponent,
    SponsorsComponent,
    CfpComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    ModalModule,
    RouterModule.forRoot(rootRouterConfig),
    NgbModule.forRoot()
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
