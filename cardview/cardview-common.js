var layouts = require("ui/layouts/layout-base");
var view = require("ui/core/view");
var color = require("color");

var CardView = (function (_super) {
    __extends(CardView, _super);
    function CardView() {
        _super.call(this, arguments);
    }
    Object.defineProperty(CardView.prototype, "backgroundColor", {
        get: function () {
            return this._getValue(CardView.backgroundColorProperty);
        },
        set: function (value) {
            this._setValue(CardView.backgroundColorProperty, new color.Color(value));
        }
    });
    Object.defineProperty(CardView.prototype, "radius", {
        get: function () {
            return this._getValue(CardView.radiusProperty);
        },
        set: function (value) {
            this._setValue(CardView.radiusProperty, value);
        }
    });
    Object.defineProperty(CardView.prototype, "elevation", {
        get: function () {
            return this._getValue(CardView.elevationProperty);
        },
        set: function (value) {
            this._setValue(CardView.elevationProperty, value);
        }
    });
    Object.defineProperty(CardView.prototype, "padding", {
        get: function () {
            return this._getValue(CardView.paddingProperty);
        },
        set: function (value) {
            this._setValue(CardView.paddingProperty, value);
        }
    });
    Object.defineProperty(CardView.prototype, "contentPadding", {
        get: function () {
            return this._getValue(CardView.contentPaddingProperty);
        },
        set: function (value) {
            this._setValue(CardView.contentPaddingProperty, value);
        }
    });
    return CardView;
})(layouts.LayoutBase);
exports.CardView = CardView;