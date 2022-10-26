import { EntryService } from './entry.service';
import { Entry } from './entry.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  entries: Entry[] = [];

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.entries = this.entryService.entries;
  }

  delete(entry: Entry) {
    this.entryService.delete(entry);
  }

}
