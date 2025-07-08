import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'myorg-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="px-4 py-2 rounded shadow hover:shadow-md focus:outline-none"
      [class.opacity-50]="disabled"
      [disabled]="disabled"
      (click)="onClick($event)"
    >
      {{ label }}
    </button>
  `,
})
export class ButtonComponent {
  @Input() label = 'Click me and see the effect asd1344323344325!';
  @Input() disabled = false;
  @Output() clicked = new EventEmitter<Event>();
  onClick(e: Event) {
    if (!this.disabled) {
      this.clicked.emit(e);
    }
  }
}
