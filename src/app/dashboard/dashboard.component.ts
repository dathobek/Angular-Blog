import { Component, OnInit } from '@angular/core';
import {Post} from '../Post';
import {DataService } from '../data/data.service';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dataService: DataService) { 

  }

  ngOnInit() {
  }
   
  displayedColumns = ['date_posted', 'title', 'category', 'delete'];
  dataSource = new PostDataSource(this.dataService);
  
  }

  export class PostDataSource extends DataSource<any> {
    constructor(private dataService: DataService) {
      super();
    }

    connect(): Observable<Post[]> {
      return this.dataService.getData();
    }

    disconnect() {
    }


}
