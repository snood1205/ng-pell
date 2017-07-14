import {Component, Input, OnInit} from '@angular/core'
import pell from 'pell'

@Component({
  selector: 'ng-pell-component',
  template: `<div class="pell" id="pell"></div>`
})
export class NgPellComponent implements OnInit {
  @Input() actions: Array<string | object>
  @Input() classes: object[]
  @Input() onChange: Function

  ngOnInit () {
    pell({
      actions: this.actions,
      classes: this.classes,
      onChange: this.onChange,
      root: 'pell'
    })
  }
}