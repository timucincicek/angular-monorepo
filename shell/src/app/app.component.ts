import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { ButtonComponent } from '@angular-monorepo/shared/ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent,RouterModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private router: Router) {}

  go(path: string) {
    this.router.navigate([path]);
  }
}