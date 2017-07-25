import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import pell from 'pell'

@Component({
  selector: 'ng-pell-component',
  template: `<div class="pell" id="pell-$$-internal"></div>`
})
export class NgPellComponent implements OnInit {
  @Input() actions?: Array<string | object>
  @Input() classes?: object
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>()

  ngOnInit () {
    pell.init({
      element: document.getElementById('pell-$$-internal'),
      onChange: html => this.onChange.emit(html),
      styleWithCSS: false,
      actions: this.actions || ['bold', 'underline'],
      classes: this.classes || {
        actionbar: 'pell-actionbar',
        button: 'pell-button',
        content: 'pell-content'
      }
    })
  }
}