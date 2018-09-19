import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { MainService } from '../main.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  public navigationMenuOpened : boolean;
  public profileMenuOpened : boolean;

  constructor() {
  }

  toggleNavigationMenu(): void {
    this.navigationMenuOpened = !this.navigationMenuOpened;
    this.profileMenuOpened = false;
  }
  
  toggleProfileMenu(): void {
    this.profileMenuOpened = !this.profileMenuOpened;
    this.navigationMenuOpened = false;
  }

  @ViewChild('searchContainer') searchContainer: ElementRef;
  visibleFocusBorder(): void {
    this.searchContainer.nativeElement.classList.add('is-focus');
  }
}
