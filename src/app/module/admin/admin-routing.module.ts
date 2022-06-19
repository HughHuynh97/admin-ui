import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AdminComponent} from "./admin.component";
import {SystemMonitoringComponent} from "./analytic/system-monitoring.component";
import {EcommerceComponent} from "./ecommerce/ecommerce.component";
import {TaskComponent} from "./task/task.component";
import {ToolsComponent} from "./tools/tools.component";
import {UserManagementComponent} from "./user-management/user-management.component";
import {RoleManagementComponent} from "./role-management/role-management.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {path: 'system-monitoring', component: SystemMonitoringComponent},
      {path: 'ecommerce', component: EcommerceComponent},
      {path: 'tasks', component: TaskComponent},
      {path: 'tools', component: ToolsComponent},
      {path: 'user-management', component: UserManagementComponent},
      {path: 'role-management', component: RoleManagementComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
