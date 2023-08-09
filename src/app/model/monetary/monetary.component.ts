import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-monetary',
  templateUrl: './monetary.component.html',
  styleUrls: ['./monetary.component.scss']
})
export class MonetaryComponent implements OnInit {
  @Input() onMoneyValues: string = '';
  @Input() onReal: number = 0;
  @Input() onDolar: string = '';
  @Output() onChanges = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  changes(event: any): any {
    this.onChanges.emit(event);
  }
}
