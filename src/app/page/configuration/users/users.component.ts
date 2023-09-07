import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IUserDetail } from 'src/app/core/models/configuration/user-model';
import { ResponseData } from 'src/app/core/models/response-data.model';
import { GenericService } from 'src/app/core/services/generic.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  isApiLoading: boolean = false;
  panelOpenState: boolean = true;
  dataSource: MatTableDataSource<IUserDetail> = new MatTableDataSource();
  formFilter: FormGroup;
  displayedColumns: string[] = ['actions', 'name', 'lastName', 'email', 'userType'];
  constructor(
    private _HTTP: GenericService,
    private _fb: FormBuilder
  ) {
    this.formFilter = this._fb.group({
      email: ''
    })
  }


  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getListUsers();
  }


  getListUsers() {
    this.isApiLoading = true;
    this._HTTP.HttpGet('Users/GetList', this.formFilter.value).subscribe({
      next: (response: ResponseData<IUserDetail[]>) => {
        this.dataSource.data = response.data;
        this.isApiLoading = false;
      },
      error: err => {
        this.isApiLoading = false;
      }
    })

  }


  editUser(id: string) {

  }

  

  clearFormFilter() {

  }

}
