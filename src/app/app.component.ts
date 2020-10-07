import { Component, OnInit } from '@angular/core';
import { MyLibService } from 'my-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-project';

  constructor (
    public myLibService: MyLibService,
  ) {

  }

  ngOnInit () {
    console.log('From Lib', this.myLibService.getTime())
  }
}
