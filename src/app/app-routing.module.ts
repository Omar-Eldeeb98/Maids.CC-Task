import { NotfoundComponent } from './pages/notfound/notfound.component';
import { UserdetailsComponent } from './pages/userdetails/userdetails.component';
import { UsersComponent } from './pages/users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent, title: 'Users' },
  {
    path: 'details/:id',
    component: UserdetailsComponent,
    title: 'User Details ',
  },
  { path: '**', component: NotfoundComponent, title: 'Not Found 404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
