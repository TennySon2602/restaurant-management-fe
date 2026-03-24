import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Customerbooking } from './customerbooking.component'

const routes = [
  {
    path: '',
    component: Customerbooking,
  },
]

@NgModule({
  declarations: [Customerbooking],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Customerbooking],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomerbookingModule {}
