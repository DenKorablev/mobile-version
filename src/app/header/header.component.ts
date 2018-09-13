import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public openNavigationMenu = "is-hidden" ;
  public openProfileMenu = "is-hidden" ;

  navigationMenu(): void {
    this.openNavigationMenu == null 
      ? this.openNavigationMenu = "is-hidden" 
      : this.openNavigationMenu = null;
    this.openProfileMenu = "is-hidden" 
  }
  
  profileMenu(): void {
    this.openProfileMenu == null 
      ? this.openProfileMenu = "is-hidden" 
      : this.openProfileMenu = null;
    this.openNavigationMenu = "is-hidden"      
  }
}
