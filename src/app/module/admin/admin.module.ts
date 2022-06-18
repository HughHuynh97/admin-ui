import {NgModule} from '@angular/core';
import {ShareModule} from "../share/share.module";
import {AdminComponent} from "./admin.component";
import {AdminRoutingModule} from "./admin-routing.module";
import { SystemMonitoringComponent } from './analytic/system-monitoring.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { TaskComponent } from './task/task.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ToolsComponent } from './tools/tools.component';
import { SiderbarComponent } from './siderbar/siderbar.component';

@NgModule({
    declarations: [
      AdminComponent,
      SystemMonitoringComponent,
      EcommerceComponent,
      TaskComponent,
      AuthenticationComponent,
      ToolsComponent,
      SiderbarComponent
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
