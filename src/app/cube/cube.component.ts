import { Component } from '@angular/core';
import { CubeModel } from './cube.model';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent {

  cube: CubeModel = new CubeModel();

  constructor() { }

}
