import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CubeRoutingModule } from './cube.routing.module';
import { CubeComponent } from './cube.component';
import { CubeSideComponent } from './cube-side/cube-side.component';
import { GlowingDirective } from './glowing/glowing.directive';

@NgModule({
  declarations: [CubeComponent, CubeSideComponent, GlowingDirective],
  imports: [
    CommonModule,
    CubeRoutingModule
  ]
})
export class CubeModule { }
