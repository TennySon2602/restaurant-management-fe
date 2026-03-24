import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { ComponentsModule } from '../../components/components.module'
import { ManagerMenu } from './manager-menu.component'

const routes = [
  {
    path: '',
    component: ManagerMenu,
  },
]

@NgModule({
  declarations: [ManagerMenu],
  imports: [CommonModule, FormsModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [ManagerMenu],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ManagerMenuModule {}
