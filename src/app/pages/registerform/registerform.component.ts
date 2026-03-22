import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-registerform',
  templateUrl: 'registerform.component.html',
  styleUrls: ['registerform.component.css'],
})
export class Registerform {
  rawnk7m: string = ' '
  raw4tin: string = ' '
  rawvq0d: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('registerform - exported project')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'registerform - exported project',
      },
    ])
  }
}
