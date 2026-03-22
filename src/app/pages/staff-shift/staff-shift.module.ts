import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { StaffShift } from './staff-shift.component'

const routes = [
  {
    path: '',
    component: StaffShift,
  },
]

@NgModule({
  declarations: [StaffShift],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [StaffShift],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StaffShiftModule {}
