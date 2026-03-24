import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { StaffTableForm } from './staff-table-form.component'

const routes = [
  {
    path: '',
    component: StaffTableForm,
  },
]

@NgModule({
  declarations: [StaffTableForm],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [StaffTableForm],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StaffTableFormModule {}
