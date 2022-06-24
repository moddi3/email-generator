import {Component, Input, OnInit} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem  } from '@angular/cdk/drag-drop';
import {Column, Section, mainStructure} from "../app.component";

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.less']
})
export class ColumnComponent implements OnInit {

  test = []

  @Input() mainStructure

  @Input() section: Section

  @Input() column: Column


  constructor() { }

  ngOnInit(): void {
  }

  dropElement(event: CdkDragDrop<any>) {
    console.log(event)

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  public get connectedCol(): string[] {
    this.test = []

    for(let i = 0; i < mainStructure.length; i++) {
      for(let k = 0; k < mainStructure[i].columns.length; k++) {
        this.test.push(mainStructure[i].columns[k].id.toString())
      }
    }
    console.log('column', this.test)

    return this.test
  }
}
