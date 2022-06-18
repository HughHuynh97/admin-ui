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
    {title: 'System Monitoring', icon: 'las la-chart-pie', link: '/system-monitoring'},
    {title: 'Ecommerce', icon: 'las la-shopping-cart', link: '/ecommerce'},
    {title: 'Tasks', icon: 'las la-tasks', link: '/tasks'},
    {title: 'Authentication', icon: 'las la-lock', link: '/authentication'},
    {title: 'Tools', icon: 'las la-tools', link: '/tools'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
