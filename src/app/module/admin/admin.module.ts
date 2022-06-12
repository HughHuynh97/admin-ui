import {NgModule} from '@angular/core';
import {ShareModule} from "../share/share.module";
import {AdminComponent} from "./admin.component";
import {AdminRoutingModule} from "./admin-routing.module";
import { AnalyticComponent } from './analytic/analytic.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { TaskComponent } from './task/task.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ToolsComponent } from './tools/tools.component';

@NgModule({
    declarations: [
      AdminComponent,
      AnalyticComponent,
      EcommerceComponent,
      TaskComponent,
      AuthenticationComponent,
      ToolsComponent
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
