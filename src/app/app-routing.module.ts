import { OrderComponent } from './pages/order/order.component';
import { VehicleComponent } from './pages/vehicle/vehicle.component';
import { TrackOrderComponent } from './pages/track-order/track-order.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversationComponent } from './pages/conversation/conversation.component';
import { DirectComponent } from './pages/direct/direct.component';
import { EvaluateComponent } from './pages/evaluate/evaluate.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ManagementComponent } from './pages/management/management.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', component: ManagementComponent, runGuardsAndResolvers: 'always' },
  { path: 'conversation', component: ConversationComponent },
  { path: 'direct', component: DirectComponent },
  { path: 'evaluate', component: EvaluateComponent },
  { path: 'track-order', component: TrackOrderComponent },
  { path: 'vehicle', component: VehicleComponent },
  { path: 'order', component:  OrderComponent },
  { path: '**', component: PageNotFoundComponent, runGuardsAndResolvers: 'always' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
