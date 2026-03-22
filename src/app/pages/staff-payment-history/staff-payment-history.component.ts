import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'staff-payment-history',
  templateUrl: 'staff-payment-history.component.html',
  styleUrls: ['staff-payment-history.component.css'],
})
export class StaffPaymentHistory {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('StaffPaymentHistory - exported project')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'StaffPaymentHistory - exported project',
      },
    ])
  }
}
