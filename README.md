# ng-pell
## What is this

It's a port of [pell](https://github.com/jaredreich/pell) for Angular 4+. 

## How do I use it

In a component like this

./example/example.component.ts
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'example-component',
  template: `<ng-pell-component [(ngModel)]="html"></ng-pell-component>`
})
export class ExampleComponent {
  html: string
}
```

and it must be included in the respective module like this

./example/example.module.ts

```typescript
import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {ExampleComponent} from './example.component'
import {NgPellModule} from 'ng-pell'

@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    NgPellModule
  ],
  providers: [],
  bootstrap: [ExampleComponent]
})
export class ExampleModule {}
```

## Installation

It can be added to your project like this

```bash
yarn add ng-pell
```

Angular is a peer dependency, so while a version of Angular is required, it just uses the version of Angular already in the project.

## Resolving the "Unexpected value" error

If you see:

```
Unexpected value 'NgPellModule' imported by the module 'AppModule'.
```

or

```
Critical dependency: the request of a dependency is an expression
 @ ./node_modules/ng-pell/node_modules/@angular/core/@angular/core.es5.js
```

Either of these indicate that the version of `ng-pell` is < 0.7.5, which did not use Angular as a peer dependency, causing issues. If you see this, just do this:

```bash
rm -rf node_modules/ng-pell
yarn add ng-pell@^0.7.5
```
