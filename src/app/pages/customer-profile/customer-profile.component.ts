import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'customer-profile',
  templateUrl: 'customer-profile.component.html',
  styleUrls: ['customer-profile.component.css'],
})
export class CustomerProfile {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('CustomerProfile - exported project')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'CustomerProfile - exported project',
      },
    ])
  }
}
