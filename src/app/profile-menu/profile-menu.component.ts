import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.css']
})
export class ProfileMenuComponent {

  profileItems = ["На главную страницу", "Избранное", "Перейти в полную версию", "Уведомление"];
  settingItems = ["Профиль пользователя", "Настройки пользователя", "Панель администрирования"]; 
  modeItems = ["Перейти в полноэкранный режим", "Показать информационную панель"];

  sizeLightboxBlock(): any {
    let header = document.querySelector('header').clientHeight;
    return { "width": `${header}px` };
  }

  @HostListener('window:resize', ['$event'])
  sizeContentBlock(): any {
    let header = document.querySelector('header').clientHeight;
    let height = window.innerHeight - header * 2;
    let width = window.outerWidth - header;
    return { "height": `${height}px`, "width": `${width}px` };
  }
}
