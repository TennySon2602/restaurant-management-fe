import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'customer-menu',
  templateUrl: 'customer-menu.component.html',
  styleUrls: ['customer-menu.component.css'],
})
export class CustomerMenu {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('CustomerMenu - exported project')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'CustomerMenu - exported project',
      },
    ])
  }
}
