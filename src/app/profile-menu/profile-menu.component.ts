import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.css']
})
export class ProfileMenuComponent {

  profileItems = ["На главную страницу", "Избранное", "Перейти в полную версию", "Уведомление"];
  settingItems = ["Профиль пользователя", "Настройки пользователя", "Панель администрирования"]; 
  modeItems = ["Перейти в полноэкранный режим", "Показать информационную панель"];
}
