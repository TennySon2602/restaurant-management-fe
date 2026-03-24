import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  selectedRole: 'customer' | 'staff' | 'manager' = 'customer';
  username = '';
  password = '';
  errorMessage = '';

  roles: { value: 'customer' | 'staff' | 'manager'; label: string; icon: string }[] = [
    { value: 'customer', label: 'Customer', icon: '🍽️' },
    { value: 'staff', label: 'Staff', icon: '👔' },
    { value: 'manager', label: 'Manager', icon: '👨‍💼' }
  ];

  constructor(private authService: AuthService) {}

  selectRole(role: 'customer' | 'staff' | 'manager'): void {
    this.selectedRole = role;
    this.errorMessage = '';
  }

  login(): void {
    if (!this.username || !this.password) {
      this.errorMessage = 'Please enter username and password';
      return;
    }

    const success = this.authService.login(this.username, this.password, this.selectedRole);
    
    if (!success) {
      this.errorMessage = 'Invalid credentials';
    }
  }

  getCredentialsHint(): string {
    switch (this.selectedRole) {
      case 'customer':
        return 'Username: customer | Password: customer123';
      case 'staff':
        return 'Username: staff | Password: staff123';
      case 'manager':
        return 'Username: manager | Password: manager123';
    }
  }
}
