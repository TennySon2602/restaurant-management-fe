import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'staff-shift',
  templateUrl: 'staff-shift.component.html',
  styleUrls: ['staff-shift.component.css'],
})
export class StaffShift {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('StaffShift - exported project')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'StaffShift - exported project',
      },
    ])
  }
}
