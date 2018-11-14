import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbar='navbar';
  myInputFirst='love';
  myInputSecond='second';
  myInputThird='third';

  @Input() person;
  @Output() onYell = new EventEmitter();
  clickMe(val){
    console.log(val);
  }
  fireYell(){
    this.onYell.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
