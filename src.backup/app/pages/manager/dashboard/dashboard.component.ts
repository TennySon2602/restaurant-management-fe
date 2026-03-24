import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data.service';
import { Analytics } from '../../../models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  analytics!: Analytics;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.analytics = this.dataService.getAnalytics();
  }

  formatCurrency(amount: number): string {
    return amount.toLocaleString('vi-VN') + 'đ';
  }
}
