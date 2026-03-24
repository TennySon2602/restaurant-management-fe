import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="reports-management">
      <h1>Reports & Analytics</h1>
      <div class="reports-grid">
        <div class="report-card card">
          <h3>📊 Sales Report</h3>
          <p>Generate detailed sales reports</p>
          <button class="btn-primary">Generate</button>
        </div>
        <div class="report-card card">
          <h3>📈 Revenue Report</h3>
          <p>Analyze revenue trends</p>
          <button class="btn-primary">Generate</button>
        </div>
        <div class="report-card card">
          <h3>👥 Staff Performance</h3>
          <p>Track staff performance metrics</p>
          <button class="btn-primary">Generate</button>
        </div>
        <div class="report-card card">
          <h3>🍜 Menu Analytics</h3>
          <p>Popular items and trends</p>
          <button class="btn-primary">Generate</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .reports-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-top: 1.5rem;
    }
    .report-card { text-align: center; }
    .report-card h3 { margin-bottom: 1rem; }
    .report-card p { color: #666; margin-bottom: 1.5rem; }
  `]
})
export class ReportsComponent {}
