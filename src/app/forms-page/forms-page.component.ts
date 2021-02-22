import { Component, OnInit } from '@angular/core';

const GRID_COLUMNS = 2;

@Component({
  selector: 'app-forms-page',
  templateUrl: './forms-page.component.html',
  styleUrls: ['./forms-page.component.scss']
})
export class FormsPageComponent implements OnInit {
  gridColumns = GRID_COLUMNS;

  constructor() { }

  ngOnInit(): void {
  }

}
