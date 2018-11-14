import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:'<h1>xxx</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  name = 'zhangbinjin';
  person = {
    name:"Emily",
    title:"h1"
  };

}
