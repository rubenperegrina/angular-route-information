import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterModule, RouterStateSnapshot, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const dataResolver: ResolveFn<string> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return 'some data';
}

const routes: Routes = [
  {
    path:'dashboard/:id',
    component: DashboardComponent,
    data:{ caption: "Dashboard viewer" },
    resolve: { resolvedData: dataResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes, withComponentInputBinding())]
})
export class AppRoutingModule { }
