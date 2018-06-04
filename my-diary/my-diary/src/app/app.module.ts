import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";
import { ProfileComponent } from './profile/profile.component';


export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("1829331310702257")
        }
        // {
        //   id: GoogleLoginProvider.PROVIDER_ID,
        //   provider: new GoogleLoginProvid("Your-Google-Client-Id")
        // },
      ]
  );
  return config;
}

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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
