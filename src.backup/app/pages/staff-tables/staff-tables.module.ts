import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { ComponentsModule } from '../../components/components.module'
import { StaffTables } from './staff-tables.component'

const routes = [
  {
    path: '',
    component: StaffTables,
  },
]

@NgModule({
  declarations: [StaffTables],
  imports: [CommonModule, FormsModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [StaffTables],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StaffTablesModule {}
