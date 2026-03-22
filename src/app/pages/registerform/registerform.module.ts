import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Registerform } from './registerform.component'

const routes = [
  {
    path: '',
    component: Registerform,
  },
]

@NgModule({
  declarations: [Registerform],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Registerform],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RegisterformModule {}
