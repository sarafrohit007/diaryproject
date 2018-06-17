import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { FacebookSigninComponent } from './login/facebook-signin/facebook-signin.component';

import { ProfileComponent } from './profile/profile.component';


const appRoutes: Routes = [
  {
    path: '',
    component: ContentComponent,
    data: { title: 'Dashboard' }
  },
  { path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  { path: 'profile',
    component: ProfileComponent,
    data: { title: 'My Profile' }
  }
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    LoginComponent,
    FacebookSigninComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes /* ,{ enableTracing: true } // <-- debugging purposes only */
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
