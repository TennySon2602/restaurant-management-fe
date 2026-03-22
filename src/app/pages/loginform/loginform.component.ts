import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { Router } from '@angular/router'
import { MockDataService } from '../../services/mock-data.service'

@Component({
  selector: 'app-loginform',
  templateUrl: 'loginform.component.html',
  styleUrls: ['loginform.component.css'],
})
export class Loginform {
  raw5tbd: string = ' '
  rawt6nt: string = ' '
  username: string = ''
  password: string = ''
  errorMessage: string = ''

  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router,
    private mockData: MockDataService
  ) {
    this.title.setTitle('Login - Gastros')
    this.meta.addTags([
      { property: 'og:title', content: 'Login - Gastros' },
    ])
    // Force logout when visiting login page to ensure login screen is always shown first
    this.mockData.logout()
  }

  onLogin(): void {
    this.errorMessage = ''
    if (!this.username || !this.password) {
      this.errorMessage = 'Please enter username and password'
      return
    }
    const user = this.mockData.login(this.username, this.password)
    if (user) {
      this.redirectByRole(user.role)
    } else {
      this.errorMessage = 'Invalid username or password'
    }
  }

  quickLogin(role: 'customer' | 'staff' | 'manager'): void {
    this.mockData.quickLogin(role)
    this.redirectByRole(role)
  }

  private redirectByRole(role: string): void {
    switch (role) {
      case 'manager':
        this.router.navigate(['/manager-dashboard'])
        break
      case 'staff':
        this.router.navigate(['/staff-tables'])
        break
      case 'customer':
        this.router.navigate(['/customer-home'])
        break
      default:
        this.router.navigate(['/manager-dashboard'])
    }
  }
}
