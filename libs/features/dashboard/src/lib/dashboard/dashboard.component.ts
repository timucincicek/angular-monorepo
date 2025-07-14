import { Component, OnInit } from '@angular/core';
import { CardComponent } from '@angular-monorepo/shared/ui';
import { WidgetComponent } from '../widget/widget.component';
import { StatsComponent } from '../stats/stats.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'myorg-dashboard',
  standalone: true,
  imports: [CardComponent, WidgetComponent, StatsComponent],
  template: `
   <!--  <myorg-card title="Dashboard Overview">
      <div class="grid grid-cols-2 gap-4">
        <myorg-widget
          title="Raw Data"
          [data]="overviewData"
        ></myorg-widget>
        <myorg-stats [stats]="stats"></myorg-stats>
      </div>
    </myorg-card>  -->
  `,
})

export class DashboardComponent implements OnInit {
  overviewData: any;
  stats: Array<{ label: string; value: number }> = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // get the payload from the route config
    this.overviewData = this.route.snapshot.data['overviewData'];

    // turn it into an array of label/value pairs for StatsComponent
    this.stats = Object.entries(this.overviewData).map(
      ([label, value]) => ({ label, value: Number(value) })
    );
  }
}

