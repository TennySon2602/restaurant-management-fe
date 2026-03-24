import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { ComponentsModule } from '../../components/components.module'
import { ManagerTables } from './manager-tables.component'

const routes = [
  {
    path: '',
    component: ManagerTables,
  },
]

@NgModule({
  declarations: [ManagerTables],
  imports: [CommonModule, FormsModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [ManagerTables],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ManagerTablesModule {}
