import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'manager-report',
  templateUrl: 'manager-report.component.html',
  styleUrls: ['manager-report.component.css'],
})
export class ManagerReport {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('ManagerReport - exported project')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'ManagerReport - exported project',
      },
    ])
  }
}
