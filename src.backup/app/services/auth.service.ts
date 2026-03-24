import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private router: Router) {
    this.loadStoredUser();
  }

  private loadStoredUser(): void {
    const stored = localStorage.getItem('currentUser');
    if (stored) {
      try {
        const user = JSON.parse(stored);
        this.currentUserSubject.next(user);
      } catch (e) {
        console.error('Error loading stored user:', e);
      }
    }
  }

  login(username: string, password: string, role: 'customer' | 'staff' | 'manager'): boolean {
    // Mock authentication
    const mockUsers: Record<string, { password: string; name: string; role: User['role'] }> = {
      'customer': { password: 'customer123', name: 'Guest Customer', role: 'customer' },
      'staff': { password: 'staff123', name: 'Staff Member', role: 'staff' },
      'manager': { password: 'manager123', name: 'Manager', role: 'manager' }
    };

    const mockUser = mockUsers[username];
    if (mockUser && mockUser.password === password && mockUser.role === role) {
      const user: User = {
        id: `${role}-${Date.now()}`,
        username,
        role: mockUser.role,
        name: mockUser.name
      };
      
      this.currentUserSubject.next(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      
      // Navigate based on role
      switch (role) {
        case 'customer':
          this.router.navigate(['/customer']);
          break;
        case 'staff':
          this.router.navigate(['/staff']);
          break;
        case 'manager':
          this.router.navigate(['/manager']);
          break;
      }
      
      return true;
    }
    
    return false;
  }

  logout(): void {
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isAuthenticated(): boolean {
    return this.currentUserSubject.value !== null;
  }

  hasRole(role: User['role']): boolean {
    const user = this.currentUserSubject.value;
    return user?.role === role;
  }
}
