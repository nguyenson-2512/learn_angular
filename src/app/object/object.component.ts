import { Component, OnInit } from '@angular/core';
import { Observable, Subject, interval, BehaviorSubject, ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css'],
})
export class ObjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    //example SUBJECT like a observable
    const subjectO1 = new Subject();
    subjectO1.subscribe({
      next: (value) => {console.log('ObserverA ' + value)}
    })
    subjectO1.subscribe({
      next: (value) => {console.log('ObserverB ' + value)}
    })
    subjectO1.next('Hello')
    subjectO1.next('world')


    //example SUBJECT like a OBSERVER (pass into an observable)
    const subjectO2 = new Subject();
    subjectO2.subscribe({
      next: (value) => {console.log('ObserverA ' + value)}
    })
    subjectO2.subscribe({
      next: (value) => {console.log('ObserverB ' + value)}
    })

    const observable = interval(500)
    observable
      .pipe((take(3)))
      .subscribe(subjectO2)



    //example BEHAVIOR_SUBJECT (tao subject co gia tri khoi tao, luu gia tri emit gan nhat, cap cho observer moi dc subcribe vao)
    const subjectBH = new BehaviorSubject(0);
    subjectBH.subscribe((value) => {console.log('bh-- observer1--' + value)})
    subjectBH.next(1)
    subjectBH.subscribe((value) => {console.log('bh-- observer2--' + value)})
    subjectBH.next(2)


    //example REPLAY_SUBJECT (same subjectBH nh save many value tu stream)
    const subjectRS = new ReplaySubject(2) //max luu dc 3 value
    subjectRS.subscribe((value) => {console.log('rs-- observer1--' + value)})
    subjectRS.next(1)
    subjectRS.next(2)
    subjectRS.next(3)
    subjectRS.subscribe((value) => {console.log('rs-- observer2--' + value)})
    subjectRS.next(4)


    //AsyncSubject
    //Đây là biến thể mà chỉ emit giá trị cuối cùng của Observable execution cho các observers, và chỉ khi execution complete.

    // share execution with multi-observer
    const foo = interval(500);
    const observerB = {
      observers: [],
      addObserver: function (observer) {
        this.observers.push(observer);
      },

      // this part is an Observer
      next: function (x) {
        this.observers.forEach((observer) => observer.next(x));
      },
      error: function (err) {
        this.observers.forEach((observer) => observer.error(err));
      },
      complete: function () {
        this.observers.forEach((observer) => observer.complete());
      },
    };

    const observerBaz = {
      next: (x) => console.log('first next: ' + x),
      error: (err) => console.log('first error: ' + err),
      complete: (_) => console.log('first done'),
    };

    const observerBar = {
      next: (x) => console.log('second next: ' + x),
      error: (err) => console.log('second error: ' + err),
      complete: (_) => console.log('second done'),
    };

    observerB.addObserver(observerBaz);
    foo
      .pipe(take(5))
      .subscribe(observerB);
    setTimeout(() => {
      observerB.addObserver(observerBar);
    }, 1500);
  }
}
