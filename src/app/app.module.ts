import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackOrderComponent } from './pages/track-order/track-order.component';
import { ConversationComponent } from './pages/conversation/conversation.component';
import { EvaluateComponent } from './pages/evaluate/evaluate.component';
import { DirectComponent } from './pages/direct/direct.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ManagementComponent } from './pages/management/management.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackOrderComponent,
    ConversationComponent,
    EvaluateComponent,
    DirectComponent,
    NavBarComponent,
    LeftBarComponent,
    PageNotFoundComponent,
    ManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
