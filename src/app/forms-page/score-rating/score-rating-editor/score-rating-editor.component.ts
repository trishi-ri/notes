import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-rating-editor',
  templateUrl: './score-rating-editor.component.html',
  styleUrls: ['./score-rating-editor.component.scss']
})
export class ScoreRatingEditorComponent implements OnInit {

  elements: number[] = [1];

  constructor() { }

  ngOnInit(): void {
  }

  addElement(): void {
    this.elements.push(1);
  }

  deleteElement(index: number): void {
    this.elements.splice(index, 1);
  }
}
