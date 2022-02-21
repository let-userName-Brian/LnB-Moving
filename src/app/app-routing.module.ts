import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Home-screen/home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { FinancesComponent } from './finances/finances.component';
import { DocumentsComponent } from './documents/documents.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'finances', component: FinancesComponent },
  { path: 'documents', component: DocumentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
