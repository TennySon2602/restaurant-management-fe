import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { CustomerConfirmBooking } from './customer-confirm-booking.component'

const routes = [
  {
    path: '',
    component: CustomerConfirmBooking,
  },
]

@NgModule({
  declarations: [CustomerConfirmBooking],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [CustomerConfirmBooking],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomerConfirmBookingModule {}
