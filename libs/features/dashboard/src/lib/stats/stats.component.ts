import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from '@angular-monorepo/shared/ui';
import { NgForOf } from '@angular/common';

interface Stat { label: string; value: number; }

@Component({
  selector: 'myorg-stats',
  standalone: true,
  imports: [CardComponent,NgForOf],
  template: `
   <!--   <div class="grid grid-cols-3 gap-4">
      <ng-container *ngFor="let stat of stats">
        <myorg-card [title]="stat.label">
          <p class="text-2xl font-bold">{{ stat.value }}</p>
        </myorg-card>
      </ng-container>
    </div>  -->
  `,
})
export class StatsComponent  {
  @Input() stats: Stat[] = [];

}
