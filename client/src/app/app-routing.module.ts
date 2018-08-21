import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { AccountCreateFormComponent } from './account/account-create-form/account-create-form.component';
import { AccountViewComponent } from './account/account-view/account-view.component';
import { AccountEditFormComponent } from './account/account-edit-form/account-edit-form.component';
import { QuizListComponent } from './quiz/quiz-list/quiz-list.component';
import { QuizCreateFormComponent } from './quiz/quiz-create-form/quiz-create-form.component';
import { QuizViewComponent } from './quiz/quiz-view/quiz-view.component';
import { QuizEditFormComponent } from './quiz/quiz-edit-form/quiz-edit-form.component';
import { ProfileViewComponent } from './profile/profile-view/profile-view.component';
import { ProfileEditFormComponent } from './profile/profile-edit-form/profile-edit-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterFormComponent } from './register-form/register-form.component';
const routes = [
  { path: '', component: MyDashboardComponent },
  { path: 'register-form', component: RegisterFormComponent},
  { path: 'logout', component: LoginComponent},
  { path: 'logout', redirectTo: 'login', pathMatch: 'full'},
  { path: 'dashboard', component: MyDashboardComponent },
  { path: 'account', component: AccountListComponent },
  { path: 'account/form', component: AccountCreateFormComponent },
  { path: 'account/:id', component: AccountViewComponent },
  { path: 'account/:id/form', component: AccountEditFormComponent },
  { path: 'quiz', component: QuizListComponent },
  { path: 'quiz/form', component: QuizCreateFormComponent },
  { path: 'quiz/:id', component: QuizViewComponent },
  { path: 'quiz/:id/form', component: QuizEditFormComponent },
  { path: 'profile', component: ProfileViewComponent },
  { path: 'profile/form', component: ProfileEditFormComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
