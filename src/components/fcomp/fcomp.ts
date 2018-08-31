import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the FcompComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fcomp',
  templateUrl: 'fcomp.html'
})
export class FcompComponent {

  text: string;
  @Input() public myText;
  @Output()someThingHap = new EventEmitter();
  constructor() {
    this.text = 'Hello EveryBody';
  }
  ngAfterViewInit(){/** Разобраться что за ngAfterViewInit(), ionViewLoad() */
    this.text = this.myText;
  }
  fireEvent(){
    this.someThingHap.emit("We have them");
  }

}
