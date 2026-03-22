import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { ManagerInventory } from './manager-inventory.component'

const routes = [
  {
    path: '',
    component: ManagerInventory,
  },
]

@NgModule({
  declarations: [ManagerInventory],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [ManagerInventory],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ManagerInventoryModule {}
