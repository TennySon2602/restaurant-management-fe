import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'manager-inventory',
  templateUrl: 'manager-inventory.component.html',
  styleUrls: ['manager-inventory.component.css'],
})
export class ManagerInventory {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('ManagerInventory - exported project')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'ManagerInventory - exported project',
      },
    ])
  }
}
