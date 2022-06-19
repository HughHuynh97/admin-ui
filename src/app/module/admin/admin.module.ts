import {NgModule} from '@angular/core';
import {ShareModule} from "../share/share.module";
import {AdminComponent} from "./admin.component";
import {AdminRoutingModule} from "./admin-routing.module";
import { SystemMonitoringComponent } from './analytic/system-monitoring.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { TaskComponent } from './task/task.component';
import { ToolsComponent } from './tools/tools.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { RoleManagementComponent } from './role-management/role-management.component';

@NgModule({
    declarations: [
      AdminComponent,
      SystemMonitoringComponent,
      EcommerceComponent,
      TaskComponent,
      ToolsComponent,
      SiderbarComponent,
      UserManagementComponent,
      RoleManagementComponent
    ],
    imports: [
      ShareModule,
      AdminRoutingModule
    ],
    exports: [

    ],
    providers: [],
    bootstrap: []
  }
)
export class AdminModule {
}
