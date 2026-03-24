import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'staff-table-form',
  templateUrl: 'staff-table-form.component.html',
  styleUrls: ['staff-table-form.component.css'],
})
export class StaffTableForm {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('StaffTableForm - exported project')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'StaffTableForm - exported project',
      },
    ])
  }
}
