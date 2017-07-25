import { Component, Input } from '@angular/core';
import pell from 'pell';
var NgPellComponent = (function () {
    function NgPellComponent() {
    }
    NgPellComponent.prototype.ngOnInit = function () {
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
        });
    };
    NgPellComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-pell-component',
                    template: "\n      <div class=\"pell\" id=\"pell-$$-internal\"></div>"
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