import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'myorg-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="border rounded-lg shadow p-4">
      <ng-container *ngIf="title">
        <h3 class="text-lg font-semibold mb-2">{{ title }}</h3>
      </ng-container>
      <ng-content></ng-content>
    </div>
  `,
})
export class CardComponent {
  @Input() title?: string;
}
