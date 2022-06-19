import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.scss']
})
export class SiderbarComponent implements OnInit {

  @Input("toggle") toggle: boolean = false;
  @Output() onChangeToggle = new EventEmitter<boolean>();
  @Output() onChangeTheme = new EventEmitter<boolean>();
  settingOpen: boolean = false;
  menus: any[] = [
    {id: 1, title: 'System Monitoring', icon: 'las la-chart-pie', link: '/system-monitoring', children: []},
    {id: 2, title: 'Ecommerce', icon: 'las la-shopping-cart', link: '/ecommerce', children: []},
    {id: 3, title: 'Tasks', icon: 'las la-tasks', link: '/tasks', children: [], collapse: true}, {
      id: 4,
      title: 'Authentication',
      icon: 'las la-lock',
      link: '',
      children: [
        {title: 'User Management', icon: 'las la-users', link: '/user-management'},
        {title: 'Role Management', icon: 'las la-user-lock', link: '/role-management'}
      ]
    },
    {id: 5, title: 'Tools', icon: 'las la-tools', link: '/tools', children: []}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
