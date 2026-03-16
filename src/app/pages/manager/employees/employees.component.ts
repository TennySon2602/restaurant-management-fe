import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="employees-management">
      <h1>Employee Management</h1>
      <button class="btn-primary">+ Add Employee</button>
      <div class="employees-list">
        <div *ngFor="let employee of employees" class="employee-card card">
          <h3>{{ employee.name }}</h3>
          <p>Role: {{ employee.role }}</p>
          <p>Username: {{ employee.username }}</p>
          <p>Phone: {{ employee.phone }}</p>
          <p>Email: {{ employee.email }}</p>
          <p [class.active]="employee.active">{{ employee.active ? 'Active' : 'Inactive' }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .employees-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1rem;
      margin-top: 1.5rem;
    }
    .active { color: #10b981; font-weight: 700; }
  `]
})
export class EmployeesComponent implements OnInit {
  employees: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.employees$.subscribe(employees => {
      this.employees = employees;
    });
  }
}
