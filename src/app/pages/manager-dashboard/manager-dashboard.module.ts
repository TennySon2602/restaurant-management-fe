import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { ComponentsModule } from '../../components/components.module'
import { ManagerDashboard } from './manager-dashboard.component'

const routes = [
  {
    path: '',
    component: ManagerDashboard,
  },
]

@NgModule({
  declarations: [ManagerDashboard],
  imports: [CommonModule, FormsModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [ManagerDashboard],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ManagerDashboardModule {}
