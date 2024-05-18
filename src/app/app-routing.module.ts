import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'test-page', pathMatch: 'full' },
  {
    path: 'test-page',
    loadChildren: () =>
      import(
        './pages/test-page/test-page.module'
      ).then((m) => m.TestPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
