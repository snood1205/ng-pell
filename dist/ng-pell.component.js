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
    NgPellComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-pell-component',
                    template: "<div class=\"pell\" id=\"pell\"></div>"
                },] },
    ];
    /** @nocollapse */
    NgPellComponent.ctorParameters = function () { return []; };
    NgPellComponent.propDecorators = {
        'actions': [{ type: Input },],
        'classes': [{ type: Input },],
        'onChange': [{ type: Input },],
    };
    return NgPellComponent;
}());
export { NgPellComponent };
//# sourceMappingURL=ng-pell.component.js.map