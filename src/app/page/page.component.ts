import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) public sidenav!: MatSidenav;
  menuOpen: boolean = true;
  constructor(
    private _sidebarService: SidebarService) { }

  ngOnInit(): void {
    this._sidebarService.setSidenav(this.sidenav);
    this._sidebarService.open();
  }

}
