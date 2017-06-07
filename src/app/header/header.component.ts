/* Created by a.ramanava on 1/6/2017. */

import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();


  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
