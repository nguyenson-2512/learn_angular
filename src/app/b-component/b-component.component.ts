import { Component, OnInit } from '@angular/core';
import { Observable , from, of } from 'rxjs'
import { map, tap } from 'rxjs/operators'
import { Person } from '../person'

@Component({
  selector: 'app-b-component',
  templateUrl: './b-component.component.html',
  styleUrls: ['./b-component.component.css']
})
export class BComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const person: Person = {
      name: 'Som',
      id: 1
    }

    // OF: converts the arguments to an observable sequence.
    const personObs: Observable<Person> = of(person);
    // FROM: Creates an Observable from an Array, an array-like object, a Promise, an iterable object, or an Observable-like object.
    const personPromise: Observable<Person> = from(Promise.resolve(person))

    //example map,pipe,tap
    const source = of(1, 2, 3, 4, 5);
    source
      .pipe(
        tap(val => console.log(`BEFORE MAP: ${val}`)), //tap k thay doi gia tri
        map(val => val + 10),
        tap(val => console.log(`AFTER MAP: ${val}`)) //nhận giá trị của operator map trước đó.
      )
      .subscribe(item => console.log(item))
    personPromise.subscribe(data => console.log(data))
  }

}
