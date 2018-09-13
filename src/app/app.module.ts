import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { ProfileComponent } from './profile/profile.component';
import { PanelComponent } from './panel/panel.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BurgerMenuComponent,
    ProfileComponent,
    PanelComponent,
    NavMenuComponent,
    ProfileMenuComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
