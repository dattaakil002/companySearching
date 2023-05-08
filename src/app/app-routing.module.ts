import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { OfficerListComponent } from './officer-list/officer-list.component';

const routes: Routes = [
  {
    path: '',
    component: SearchPageComponent
  },
  {
    path: 'company/:comp/:id',
    component: CompanyDetailsComponent
  },
  {
    path: 'officers/:comp/:id',
    component: OfficerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
