import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { StaffPaymentHistory } from './staff-payment-history.component'

const routes = [
  {
    path: '',
    component: StaffPaymentHistory,
  },
]

@NgModule({
  declarations: [StaffPaymentHistory],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [StaffPaymentHistory],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StaffPaymentHistoryModule {}
