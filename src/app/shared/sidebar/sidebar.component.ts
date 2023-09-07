import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserTypeEnum } from 'src/app/core/enums/user-type.enum';
import { IMenu, Menu } from 'src/app/core/models/menu-model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SidebarComponent implements OnInit {
  @Output()
  menuOpenSide = new EventEmitter<boolean>(false);
  menu: any;
  constructor(
    private authService: AuthService) {

  }

  ngOnInit(): void {
    this.menu = new Menu(UserTypeEnum[`${this.authService.DecodeToken()['userType']}`]);
  }

  // selectMenu(menu: IMenu) {
  //   console.log(this.menu);
  //   this.menu.forEach(a => {
  //     if (menu.isUnique === a.isUnique && menu.id === a.id) {
  //       a.selected = true;
  //     } else {
  //       a.selected = false;
  //     }
  //   });
  // }

  // selectSubMenu(subMenu: ISubMenus) {
  //   this.menu.forEach(a => {
  //     if (a.unique === false) {
  //       a.subMenus.forEach(b => {
  //         if (subMenu.id === b.id) {
  //           b.selected = true;
  //         } else {
  //           b.selected = false;
  //         }
  //       });
  //     } else {
  //       a.selected = false;
  //     }
  //   });

  // }

  // private deselectSubMenus() {
  //   this.menu.forEach(a => {
  //     if (a.subMenus !== null) {
  //       a.subMenus.forEach(b => b.selected = false);
  //     }
  //   });

  // }




}
