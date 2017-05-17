import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // None, Emulated (default), Native
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
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
}
