import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { CustomerMenu } from './customer-menu.component'

const routes = [
  {
    path: '',
    component: CustomerMenu,
  },
]

@NgModule({
  declarations: [CustomerMenu],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [CustomerMenu],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomerMenuModule {}
