import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'customer-home',
  templateUrl: 'customer-home.component.html',
  styleUrls: ['customer-home.component.css'],
})
export class CustomerHome {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('CustomerHome - exported project')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'CustomerHome - exported project',
      },
    ])
  }
}
