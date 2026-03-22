import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { ComponentsModule } from '../../components/components.module'
import { Loginform } from './loginform.component'

const routes = [
  {
    path: '',
    component: Loginform,
  },
]

@NgModule({
  declarations: [Loginform],
  imports: [CommonModule, FormsModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Loginform],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginformModule {}
