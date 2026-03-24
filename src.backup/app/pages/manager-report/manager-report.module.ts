import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { ManagerReport } from './manager-report.component'

const routes = [
  {
    path: '',
    component: ManagerReport,
  },
]

@NgModule({
  declarations: [ManagerReport],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [ManagerReport],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ManagerReportModule {}
