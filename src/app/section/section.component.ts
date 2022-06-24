import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {Component, Input, OnInit} from '@angular/core';
import {mainStructure, Section} from "../app.component";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.less']
})
export class SectionComponent implements OnInit {

  @Input() section: Section
  test
  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<any>) {
    console.log(event)
    // moveItemInArray(this.section.columns, event.previousIndex, event.currentIndex);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  public get connectedSection(): string[] {
    this.test = []

    for(let i = 0; i < mainStructure.length; i++) {
      this.test.push(mainStructure[i].id.toString())
    }

    console.log('section', this.test)
    return this.test
  }
}
