var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var layout_base_1 = require("ui/layouts/layout-base");
var CardView = (function (_super) {
    __extends(CardView, _super);
    function CardView() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(CardView.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardView.prototype, "backgroundColor", {
        get: function () {
            return this._getValue(CardView.backgroundColorProperty);
        },
        set: function (value) {
            this._setValue(CardView.backgroundColorProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardView.prototype, "radius", {
        get: function () {
            return this._getValue(CardView.radiusProperty);
        },
        set: function (value) {
            this._setValue(CardView.radiusProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardView.prototype, "elevation", {
        get: function () {
            return this._getValue(CardView.elevationProperty);
        },
        set: function (value) {
            this._setValue(CardView.elevationProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardView.prototype, "contentPadding", {
        get: function () {
            return this._getValue(CardView.contentPaddingProperty);
        },
        set: function (value) {
            this._setValue(CardView.contentPaddingProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardView.prototype, "padding", {
        get: function () {
            return this._getValue(CardView.paddingProperty);
        },
        set: function (value) {
            this._setValue(CardView.paddingProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    return CardView;
})(layout_base_1.LayoutBase);
exports.CardView = CardView;
