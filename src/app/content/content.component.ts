import { Component } from '@angular/core';
import { MainService } from '../main.service'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent{
  constructor(private service: MainService) {}
  openNavigationMenu = this.service.openNavigationMenu;
  openProfileMenu = this.service.openProfileMenu;
}

