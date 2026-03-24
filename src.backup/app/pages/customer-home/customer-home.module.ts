import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { CustomerHome } from './customer-home.component'

const routes = [
  {
    path: '',
    component: CustomerHome,
  },
]

@NgModule({
  declarations: [CustomerHome],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [CustomerHome],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomerHomeModule {}
