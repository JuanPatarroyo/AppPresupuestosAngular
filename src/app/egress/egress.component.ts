import { EgressService } from './egress.service';
import { Egress } from './egress.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-egress',
  templateUrl: './egress.component.html',
  styleUrls: ['./egress.component.css']
})
export class EgressComponent implements OnInit {

  expenses: Egress[] = [];
  @Input() totalEntry: number;

  constructor(private egressService: EgressService) { }

  ngOnInit() {
    this.expenses = this.egressService.expenses;
  }

  deleteEgress(egress: Egress){
    this.egressService.delete(egress);
  }

  calculatePercent(egress: Egress){
    return egress.value/this.totalEntry;
  }
}
