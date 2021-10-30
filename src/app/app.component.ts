import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'grid';

  columnDefs=[
    { headerName : "Name", field: "name",width:150, sortable: true, filter: true, editable :true},
    { headerName : "Age", field: "age",width:150, sortable:true, filter: true, editable :true},
    { headerName : "Location", field: "location",width:150, sortable:true, filter: true, editable :true},
    { headerName : "Gender", field: "gender",width:150, sortable:true, filter: true, editable :true}
  ];
  rowData=[
    { name: 'Sonal', age: 6, gender: 32 , location: 'Patna'},
    { name: 'Sonu', age: 6, gender: 37 , location: 'Pune'},
    { name: 'Priya', age: 6 , gender: 34, location: 'Bihar'},
    { name: 'Aggrid', age: 6 ,gender: 26, location: 'Maharastra', }
  ];
}
