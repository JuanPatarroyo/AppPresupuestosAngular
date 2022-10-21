import { EgressService } from './egress/egress.service';
import { EntryService } from './entry/entry.service';
import { Egress } from './egress/egress.model';
import { Entry } from './entry/entry.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  entries: Entry[] = [];
  expenses: Egress[] = [];

  constructor(private entryService: EntryService, private egressService: EgressService) {
    this.entries = entryService.entries;
    this.expenses = egressService.expenses;
  }

  getTotalEntry(){
    let totalEntry: number = 0;
    this.entries.forEach(entry => {
      totalEntry += entry.value;
    });
    return totalEntry;
  }

  getTotalEgress(){
    let totalEgress: number = 0;
    this.expenses.forEach(egress => {
      totalEgress += egress.value;
    });
    return totalEgress;
  }

  getTotalPercent(){
    return this.getTotalEgress()/this.getTotalEntry();
  }

  getTotalBudget(){
    return this.getTotalEntry()-this.getTotalEgress();
  }
}
