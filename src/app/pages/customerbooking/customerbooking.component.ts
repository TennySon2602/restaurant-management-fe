import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-customerbooking',
  templateUrl: 'customerbooking.component.html',
  styleUrls: ['customerbooking.component.css'],
})
export class Customerbooking {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Customerbooking - exported project')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Customerbooking - exported project',
      },
    ])
  }
}
