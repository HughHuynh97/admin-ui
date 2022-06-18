import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AdminComponent} from "./admin.component";
import {SystemMonitoringComponent} from "./analytic/system-monitoring.component";
import {EcommerceComponent} from "./ecommerce/ecommerce.component";
import {TaskComponent} from "./task/task.component";
import {ToolsComponent} from "./tools/tools.component";
import {AuthenticationComponent} from "./authentication/authentication.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {path:'system-monitoring', component: SystemMonitoringComponent},
      {path:'authentication', component: AuthenticationComponent},
      {path:'ecommerce', component: EcommerceComponent},
      {path:'tasks', component: TaskComponent},
      {path:'tools', component: ToolsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
