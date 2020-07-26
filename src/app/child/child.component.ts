import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() boxColor;
  @Input() placeholderText;

  @Output() inputEvent = new EventEmitter()

  count:number=0;

  constructor() { }

  ngOnInit() {
  }

  onCreate(inpVal){
    if(inpVal.value.length>0){
      this.count=this.count + 1;
      // alert(inpVal.value)
      this.inputEvent.emit(inpVal.value);
    }
    
  }

}