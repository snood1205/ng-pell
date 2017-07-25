import {Component, Input, OnInit} from '@angular/core'
import pell from 'pell'

@Component({
  selector: 'ng-pell-component',
  template: `
      <div class="pell" id="pell-$$-internal"></div>`
})
export class NgPellComponent implements OnInit {
  @Input() actions?: Array<string | object>
  @Input() classes?: object
  @Input() onChange: Function

  ngOnInit () {
    pell.init({
      element: document.getElementById('pell-$$-internal'),
      onChange: this.onChange,
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