import {
  Component, OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked, OnDestroy, Input, ViewEncapsulation, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // None, Emulated (default), Native
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked {
  @Input('srvElement') element:{type:string, name:string, content:string};
  @Input() name:string;

  constructor() {
  }

  /*
   Other  points:

   ngOnChanges
   ngOnInit - not rendered on page
   ngDoCheck - change detection
   ngAfterContentInit - called after content (ng-content) has been projected into view
   ngAfterContentChecked - projected content has been checked for change
   ngAfterViewInit - component's view (child views also ) has been initialized
   ngAfterViewChecked - called every time the view (and child views) have been checked
   ngOnDestroy - called when about to be destroyed.

   */
  ngOnChanges(changes:SimpleChanges) {
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

}
