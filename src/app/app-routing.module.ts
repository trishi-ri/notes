import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlowingCubeComponent } from './glowing-cube/glowing-cube.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  { path: 'sample', component: SampleComponent },
  { path: 'cube', component: GlowingCubeComponent },
  { path: '', redirectTo: 'sample', pathMatch: 'full' },
  { path: '**', redirectTo: 'sample' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
