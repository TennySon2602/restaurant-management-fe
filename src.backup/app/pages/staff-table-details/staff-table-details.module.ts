import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { ComponentsModule } from '../../components/components.module'
import { StaffTableDetails } from './staff-table-details.component'

const routes = [
  {
    path: '',
    component: StaffTableDetails,
  },
]

@NgModule({
  declarations: [StaffTableDetails],
  imports: [CommonModule, FormsModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [StaffTableDetails],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StaffTableDetailsModule {}
