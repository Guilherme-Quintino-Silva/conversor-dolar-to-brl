import { Component, OnInit, Input } from '@angular/core';
import { MoedasCotacaoService } from '../moedas-cotacao.service';
import { Monetary } from '../model/monetary.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dolar: string = '1';
  real: number = 0;
  @Input() moneyValues: any;
  constructor(
    public moedasCotacaoService: MoedasCotacaoService,
  ) { }

  ngOnInit(): void {
    this.moedasCotacaoService.consumeMonetary().subscribe((monetary: Monetary) => {
      this.moneyValues = monetary;
      this.real = Number(this.dolar.replace(',', '.')) * this.moneyValues.USDBRL.high;
    })
  }
  changes(event: any) {
    event = event.target.value * this.moneyValues.USDBRL.high;
    this.real = event;
  }
}
