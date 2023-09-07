// import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit} from '@angular/core';
// import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userName =  localStorage.getItem('fullNameTexasie');
  email = localStorage.getItem('emailTexasie');
  menuOpen = true;

  constructor(
    private authService: AuthService,
    private sidenav: SidebarService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }



  clickMenu() {
    this.menuOpen = !this.menuOpen;
    this.sidenav.toggle();
  }

  logOut() {
    this.authService.LogOut();
  }


  // ngAfterViewInit(){
  //   //Para cuando sea abra en una pantalla pequena el sidenav se posicione por encima del contenido
  //   this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
  //     if(res.matches){
  //       this.sidenav.mode = 'over'
  //     }else{
  //       this.sidenav.mode = 'side'
  //     }
  //   })
  // }



  // isMenuOpen(){
  //   this.menuOpen = !this.menuOpen
  // }

  // menuOpenSide(evento : any){
  //   console.log(evento);
  //   //this.sidenav.close()
  // }
}
