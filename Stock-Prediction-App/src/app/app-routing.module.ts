import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputComponent } from './input/input.component'
import { SearchFieldComponent } from './search-field/search-field.component';

const routes: Routes = [
  {path:'',redirectTo:'input', pathMatch: 'full'},
  {path:'input', component: InputComponent},
  {path:'input/edit', component: SearchFieldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
