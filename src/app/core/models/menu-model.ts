import { UserTypeEnum } from "../enums/user-type.enum";

export interface IMenu {
  id: string;
  name: string;
  route: string;
  isUnique: boolean;
  icon: IIcon;
  subMenus: ISubMenu[]

}

export interface ISubMenu {
  id: string;
  name: string;
  route: string;
  icon: IIcon;
}
export interface IIcon {
  fonSet: string;
  fontIcon: string;
}

export class Menu {
  constructor(userType: UserTypeEnum) {
    switch (userType) {
      case UserTypeEnum.ADMINISTRACION: {
        return [{
          index: 0,
          name: 'Inicio',
          route: 'home',
          icon: {
            fontSet: 'fa-solid',
            fontIcon: 'fa-gear'
          }
        },
        {
          index: 1,
          name: 'Configuración',
          route: 'configuration',
          icon: {
            fontSet: 'fa-solid',
            fontIcon: 'fa-gear'
          },
          subMenus: [{
            index: 0,
            name: 'Usuarios',
            route: '/users',
            icon: {
              fontSet: 'fa-solid',
              fontIcon: 'fa-gear'
            }
          }]
        }];
      }
      case UserTypeEnum.USUARIO: {
        return [{
          index: 0,
          name: 'Consumo de Agua',
          icon: {

          }
        }];
      }
      default: null;
    }
  }


}

