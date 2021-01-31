import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, interval } from 'rxjs';
import { scan } from 'rxjs/operators';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-a-component',
  templateUrl: './a-component.component.html',
  styleUrls: ['./a-component.component.css']
})
export class AComponentComponent implements OnInit {
  // func(){
  //   return fromEvent(document, 'click')
  //   .pipe(scan(count => count + 1, 0))
  //   .subscribe(count => console.log(`clicked ${count} `))
  // }

  // interval example
  // secondCounter = interval(1000);
  // subscription = this.secondCounter.subscribe(count => console.log(`${count}`))

  constructor(private httpService: HttpService) { }

  profile =  {}

  loadProfile() {
    this.httpService.getProfile().subscribe(data => this.profile = data)
  }
  ngOnInit(): void {
    this.httpService.getAllPost().subscribe(post => console.log(post))
    this.httpService.getText().subscribe(text => console.log(text))
    // UNSUBSCRIBE this SUBSCRIPTION
    // setTimeout(() => {
    //   this.subscription.unsubscribe()
    // }, 5000)

    //OBSERVABLE creating
    const observable = Observable.create((observer: any) => {
      observer.next("Hello rxjs")
      observer.next(1)
      observer.next(2)
      setInterval(() => {
        observer.next("Random async log message")
      },2000)
      // error or complete : only exist
      // observer.error("Error")
      // observer.complete("Completed")
      setInterval(() => {
        observer.complete()
      },5000)

      //return DESCRIPTION (if using CREATE OR NEW OBSERVABLE then set DESCRIPTION)
      return function unsubscribe() {
        clearInterval(observable)
      }

    })

    //OBSERVER
    const observer = {
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };


    //SUBSCRIBE this OBSERVABLE
    const description = observable.subscribe(observer)

    //Disposing Observable Executions
    setTimeout(() => {
      console.log('--unsubscribe')
      description.unsubscribe()
    },6000)
  }

}
