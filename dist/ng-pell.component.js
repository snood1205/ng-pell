var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import pell from 'pell';
var NgPellComponent = (function () {
    function NgPellComponent() {
    }
    NgPellComponent.prototype.ngOnInit = function () {
        pell({
            actions: this.actions,
            classes: this.classes,
            onChange: this.onChange,
            root: 'pell'
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], NgPellComponent.prototype, "actions", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], NgPellComponent.prototype, "classes", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], NgPellComponent.prototype, "onChange", void 0);
    NgPellComponent = __decorate([
        Component({
            selector: 'ng-pell-component',
            template: "<div class=\"pell\" id=\"pell\"></div>"
        })
    ], NgPellComponent);
    return NgPellComponent;
}());
export { NgPellComponent };
//# sourceMappingURL=ng-pell.component.js.map