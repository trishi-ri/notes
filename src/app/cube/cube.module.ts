import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CubeRoutingModule } from './cube-routing.module';
import { CubeComponent } from './cube.component';
import { CubeSideComponent } from './cube-side/cube-side.component';
import { CubeControlsComponent } from './cube-controls/cube-controls.component';


@NgModule({
  declarations: [CubeComponent, CubeSideComponent, CubeControlsComponent],
  imports: [
    CommonModule,
    CubeRoutingModule
  ]
})
export class CubeModule { }
