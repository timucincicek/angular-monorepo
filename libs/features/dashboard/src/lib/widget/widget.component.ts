import { Component, Input } from '@angular/core';
import { CardComponent } from '@angular-monorepo/shared/ui';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'myorg-widget',
  standalone: true,
  imports: [/* CardComponent,JsonPipe */],
  template: `
   <!--   <myorg-card [title]="title">
      <pre class="text-sm">{{ data | json }}</pre>
    </myorg-card> -->
  `,
})
export class WidgetComponent {
  @Input() title = '';
  @Input() data: any;
}