import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { Router } from '@angular/router'
import { MockDataService } from '../../services/mock-data.service'

@Component({
  selector: 'manager-dashboard',
  templateUrl: 'manager-dashboard.component.html',
  styleUrls: ['manager-dashboard.component.css'],
})
export class ManagerDashboard {
  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router,
    private mockData: MockDataService
  ) {
    this.title.setTitle('Manager Dashboard - Gastros')
    this.meta.addTags([
      { property: 'og:title', content: 'Manager Dashboard - Gastros' },
    ])
  }

  navigateTo(path: string): void {
    this.router.navigate([path])
  }

  logout(): void {
    this.mockData.logout()
    this.router.navigate(['/'])
  }
}
