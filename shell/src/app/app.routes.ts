import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('@angular-monorepo/features/dashboard').then(
        (m) => m.DashboardComponent
      ),
    data: {
      overviewData: { users: 1243, sessions: 3421, errors: 5 },
    },
  },
  {
    path: 'health-dashboard',
    loadComponent: () =>
      import('@angular-monorepo/features/dashboard').then(
        (m) => m.DashboardComponent
      ),
    data: {
      overviewData: { heartRate: 72, sleepHours: 7.5, steps: 10342 },
    },
  },
  {
    path: 'feeding-dashboard',
    loadComponent: () =>
      import('@angular-monorepo/features/dashboard').then(
        (m) => m.DashboardComponent
      ),
    data: {
      overviewData: { calories: 2200, meals: 3, waterOz: 64 },
    },
  },
  // if you like you can still keep a bare “Go to Dashboard”:
  {
    path: 'other-dashboard',
    loadComponent: () =>
      import('@angular-monorepo/features/dashboard').then(
        (m) => m.DashboardComponent
      ),
    data: {
      overviewData: { foo: 'bar', answer: 42 },
    },
  }
];
