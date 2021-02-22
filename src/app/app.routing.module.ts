import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'sample', loadChildren: () => import('./sample-page/sample-page.module').then(m => m.SamplePageModule) },
  { path: 'cube', loadChildren: () => import(`./cube/cube.module`).then(m => m.CubeModule) },
  { path: 'forms', loadChildren: () => import(`./forms-page/forms-page.module`).then(m => m.FormsPageModule) },
  { path: '', redirectTo: 'sample', pathMatch: 'full' },
  { path: '**', redirectTo: 'sample' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
