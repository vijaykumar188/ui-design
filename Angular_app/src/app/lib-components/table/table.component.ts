
import { Component, Input, OnInit, Output, ViewChild,EventEmitter,Injectable, NgModule} from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() tableTitle="";
  @Input() totalTableDataCount="";
  @Input() showFilter = false;
  @Input() showupload = false;
  @Input() download = false;
  @Input() showicon = false;
  @Input() showSearch = false;
  @Input() header:any=[];
  @Input() tableData:any=[];
  @Output() onrowClickd = new EventEmitter;
  @Output() advanceClickd = new EventEmitter;
  
  ngOnInit(): void {
  }

  onrowClick(){
    this.onrowClickd.emit();
  }

  advanceClick(){
    this.advanceClickd.emit();
  }

}
