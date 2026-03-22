import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'customer-confirm-booking',
  templateUrl: 'customer-confirm-booking.component.html',
  styleUrls: ['customer-confirm-booking.component.css'],
})
export class CustomerConfirmBooking {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('CustomerConfirmBooking - exported project')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'CustomerConfirmBooking - exported project',
      },
    ])
  }
}
