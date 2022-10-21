import { Egress } from './egress.model';

export class EgressService{
  expenses: Egress[] = [
    new Egress('Apartment rent',900000),
    new Egress('Clothes',500000)
  ]
}
