import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'sample', loadChildren: () => import('./sample/sample.module').then(m => m.SampleModule) },
  { path: 'cube', loadChildren: () => import(`./cube/cube.module`).then(m => m.CubeModule) },
  { path: '', redirectTo: 'sample', pathMatch: 'full' },
  { path: '**', redirectTo: 'sample' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
