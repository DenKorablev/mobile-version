import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  public pageOrientation : boolean;

  @HostListener('window:resize')
  orientationChange(): void {
    if(window.matchMedia("(orientation: landscape)").matches){
      this.pageOrientation = true;
    }
    else {
      this.pageOrientation = false;
    }
  }

  ngOnInit() {
    if(window.matchMedia("(orientation: landscape)").matches){
      this.pageOrientation = true;
    }
  }
}