import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  events: string[] = [];
  opened: boolean;
  styles: any;
  constructor() { }

  ngOnInit() {
  }
  loadStyles(values) {
    console.log(values);
    this.styles = values;
  }

}
