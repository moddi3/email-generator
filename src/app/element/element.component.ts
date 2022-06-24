import {Component, Input, OnInit} from '@angular/core';
import {Element} from "../app.component";

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.less']
})
export class ElementComponent implements OnInit {

  @Input() element: Element

  constructor() { }

  ngOnInit(): void {
  }

}
