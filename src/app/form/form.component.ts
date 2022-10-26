import { EgressService } from './../egress/egress.service';
import { EntryService } from './../entry/entry.service';
import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry/entry.model';
import { Egress } from '../egress/egress.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  type: string = "entry";
  descriptionInput: string;
  valueInput: number;

  constructor(private entryService: EntryService, private egressService: EgressService) { }

  ngOnInit() {
  }

  typeOperation(event) {
    this.type = event.target.value;
  }

  addValue() {
    if (this.type === "entry") {
      this.entryService.entries.push(new Entry(this.descriptionInput, this.valueInput));
      return;
    }
    this.egressService.expenses.push(new Egress(this.descriptionInput, this.valueInput));
  }

}
