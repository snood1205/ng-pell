import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {NgPellComponent} from './ng-pell.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgPellComponent
  ],
  entryComponents: [
    NgPellComponent
  ],
  exports: [
    NgPellComponent
  ]
})
export class NgPellModule {
}
