import {ChangeDetectionStrategy, Component} from '@angular/core';
import { CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

export interface Element {
  id: number,
  type: string,
  styles?: {},
  url?: string,
  content?: string,
}

export interface Column {
  id: number,
  styles: {},
  elements: Element[]
}

export interface Section {
  id: number,
  styles: {},
  columns: Column[],
}

export const mainStructure: Section[] = [
  {
    id: 1,
    styles: {
      paddingTop: "15",
      paddingRight: "15",
      paddingBottom: "15",
      paddingLeft: "15",
      backgroundColor: "#fff",
    },
    columns: [
      {
        id: 10,
        styles: {
          paddingTop: "15",
          paddingRight: "15",
          paddingBottom: "15",
          paddingLeft: "15",
          backgroundColor: "#f2f2f2",
        },
        elements: [
          {
            id: 100,
            type: 'image',
            url: "https://liverpoolfc.ru/templates/yootheme/cache/27_money-b1bafb0d.jpeg"
          },
          {
            id: 101,
            type: 'indent',
            styles: {
              height: "15",
            },
          },
          {
            id: 102,
            type: 'text',
            styles: {
              fontSize: "15",
              color: "#333",
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A enim in voluptates!"
          },
          {
            id: 103,
            type: 'indent',
            styles: {
              height: "15",
            },
          },
          {
            id: 104,
            type: 'button',
            styles: {
              paddingTop: "10",
              paddingRight: "15",
              paddingBottom: "10",
              paddingLeft: "15",
              backgroundColor: "#f00",
              color: "#fff",
              borderRadius: "4"
            },
            content: "Click me!",
            url: "https://google.com",
          },
        ]
      },
      {
        id: 11,
        styles: {
          paddingTop: "15",
          paddingRight: "15",
          paddingBottom: "15",
          paddingLeft: "15",
          backgroundColor: "#eee",
        },
        elements: [
          {
            id: 106,
            type: 'image',
            url: "https://liverpoolfc.ru/templates/yootheme/cache/27_money-b1bafb0d.jpeg"
          },
          {
            id: 107,
            type: 'indent',
            styles: {
              height: "15",
            },
          },
          {
            id: 108,
            type: 'text',
            styles: {
              fontSize: "15",
              color: "#333",
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A enim in voluptates!"
          },
          {
            id: 109,
            type: 'indent',
            styles: {
              height: "15",
            },
          },
          {
            id: 110,
            type: 'button',
            styles: {
              paddingTop: "10",
              paddingRight: "15",
              paddingBottom: "10",
              paddingLeft: "15",
              backgroundColor: "#f00",
              color: "#fff",
              borderRadius: "4"
            },
            content: "Click me!",
            url: "https://google.com",
          },
        ]
      }
    ]
  },
  {
    id: 2,
    styles: {
      paddingTop: "15",
      paddingRight: "15",
      paddingBottom: "15",
      paddingLeft: "15",
      backgroundColor: "#f5f5f5",
    },
    columns: [
      {
        id: 12,
        styles: {
          paddingTop: "15",
          paddingRight: "15",
          paddingBottom: "15",
          paddingLeft: "15",
          backgroundColor: "#f2f2f2",
        },
        elements: [
          {
            id: 111,
            type: 'image',
            url: "https://liverpoolfc.ru/templates/yootheme/cache/27_money-b1bafb0d.jpeg"
          },
          {
            id: 112,
            type: 'indent',
            styles: {
              height: "15",
            },
          },
          {
            id: 113,
            type: 'text',
            styles: {
              fontSize: "15",
              color: "#333",
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A enim in voluptates!"
          },
          {
            id: 114,
            type: 'indent',
            styles: {
              height: "15",
            },
          },
          {
            id: 115,
            type: 'button',
            styles: {
              paddingTop: "10",
              paddingRight: "15",
              paddingBottom: "10",
              paddingLeft: "15",
              backgroundColor: "#f00",
              color: "#fff",
              borderRadius: "4"
            },
            content: "Click me!",
            url: "https://google.com",
          },
        ]
      },
      {
        id: 13,
        styles: {
          paddingTop: "15",
          paddingRight: "15",
          paddingBottom: "15",
          paddingLeft: "15",
          backgroundColor: "#eee",
        },
        elements: [
          {
            id: 116,
            type: 'image',
            url: "https://liverpoolfc.ru/templates/yootheme/cache/27_money-b1bafb0d.jpeg"
          },
          {
            id: 117,
            type: 'indent',
            styles: {
              height: "15",
            },
          },
          {
            id: 118,
            type: 'text',
            styles: {
              fontSize: "15",
              color: "#333",
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A enim in voluptates!"
          },
          {
            id: 119,
            type: 'indent',
            styles: {
              height: "15",
            },
          },
          {
            id: 120,
            type: 'button',
            styles: {
              paddingTop: "10",
              paddingRight: "15",
              paddingBottom: "10",
              paddingLeft: "15",
              backgroundColor: "#f00",
              color: "#fff",
              borderRadius: "4"
            },
            content: "Click me!",
            url: "https://google.com",
          },
        ]
      },
      {
        id: 14,
        styles: {
          paddingTop: "15",
          paddingRight: "15",
          paddingBottom: "15",
          paddingLeft: "15",
          backgroundColor: "#eee",
        },
        elements: [
          {
            id: 121,
            type: 'image',
            url: "https://liverpoolfc.ru/templates/yootheme/cache/27_money-b1bafb0d.jpeg"
          },
          {
            id: 122,
            type: 'indent',
            styles: {
              height: "15",
            },
          },
          {
            id: 123,
            type: 'text',
            styles: {
              fontSize: "15",
              color: "#333",
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A enim in voluptates!"
          },
          {
            id: 124,
            type: 'indent',
            styles: {
              height: "15",
            },
          },
          {
            id: 125,
            type: 'button',
            styles: {
              paddingTop: "10",
              paddingRight: "15",
              paddingBottom: "10",
              paddingLeft: "15",
              backgroundColor: "#f00",
              color: "#fff",
              borderRadius: "4"
            },
            content: "Click me!",
            url: "https://google.com",
          },
        ]
      },
    ]
  },
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent {
  title = 'HTML email generator';

  mainStructure = mainStructure

/*  lists = [
    {
      id: 1,
      users: [
        {name: "John",},
        {name: "Emma",},
        {name: "Chloe",}
      ]
    },
    {
      id: 2,
      users: [
        {name: "Mia",},
        {name: "Gwen",},
        {name: "George",}
      ]
    },
    {
      id: 3,
      users: [
        {name: "Kevin",},
        {name: "Tony",},
        {name: "Jessica",}
      ]
    },
  ];*/

  drop(event: CdkDragDrop<any>) {
    moveItemInArray(this.mainStructure, event.previousIndex, event.currentIndex);
  }
}
