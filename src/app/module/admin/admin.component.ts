import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  menus: any[] = [
    {title: 'Analytic', icon: 'las la-chart-pie', link: '/analytic'},
    {title: 'Ecommerce', icon: 'las la-shopping-cart', link: '/ecommerce'},
    {title: 'Tasks', icon: 'las la-tasks', link: '/tasks'},
    {title: 'Authentication', icon: 'las la-lock', link: '/authentication'},
    {title: 'Tools', icon: 'las la-tools', link: '/tools'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
