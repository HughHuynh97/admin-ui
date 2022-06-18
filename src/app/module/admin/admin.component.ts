import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  toggle: boolean = false;
  darkTheme:boolean = true;

  changeToggle(value: boolean): void {
    this.toggle = value;
  }
  changeTheme(value: boolean): void {
    this.darkTheme = value;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
