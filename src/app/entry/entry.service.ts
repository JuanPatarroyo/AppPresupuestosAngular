import { Entry } from './entry.model';
export class EntryService{
  entries: Entry[] = [
    new Entry('Salary',5000000),
    new Entry('Sale',50000)
  ]
}
