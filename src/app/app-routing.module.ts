import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cover', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'department/:dep', loadChildren: './department/department.module#DepartmentPageModule' },
  { path: 'services/:dep/:serv', loadChildren: './services/services.module#ServicesPageModule' },
  { path: 'docteur/:dep/:serv/:doc', loadChildren: './docteur/docteur.module#DocteurPageModule' },
  { path: 'cover', loadChildren: './cover/cover.module#CoverPageModule' },
  { path: 'summary', loadChildren: './summary/summary.module#SummaryPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
