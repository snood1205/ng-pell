import { Component, EventEmitter, Input, Output } from '@angular/core';
import pell from 'pell';
var NgPellComponent = (function () {
    function NgPellComponent() {
        this.onChange = new EventEmitter();
    }
    NgPellComponent.prototype.ngOnInit = function () {
        var _this = this;
        pell.init({
            element: document.getElementById('pell-$$-internal'),
            onChange: function (html) { return _this.onChange.emit(html); },
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
                    template: "<div class=\"pell\" id=\"pell-$$-internal\"></div>"
                },] },
    ];
    /** @nocollapse */
    NgPellComponent.ctorParameters = function () { return []; };
    NgPellComponent.propDecorators = {
        'actions': [{ type: Input },],
        'classes': [{ type: Input },],
        'onChange': [{ type: Output },],
    };
    return NgPellComponent;
}());
export { NgPellComponent };
//# sourceMappingURL=ng-pell.component.js.map