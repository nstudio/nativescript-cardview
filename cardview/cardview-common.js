var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var proxy = require("ui/core/proxy");
var dependencyObservable = require("ui/core/dependency-observable");
var view = require("ui/core/view");
var radiusProperty = new dependencyObservable.Property("radius", "CardView", new proxy.PropertyMetadata("", dependencyObservable.PropertyMetadataSettings.AffectsLayout));
var elevationProperty = new dependencyObservable.Property("elevation", "CardView", new proxy.PropertyMetadata("", dependencyObservable.PropertyMetadataSettings.AffectsLayout));
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
    CardView.prototype._addChildFromBuilder = function (name, value) {
        console.log('name = ' + name + " value = " + value);
        //formattedString.FormattedString.addFormattedStringToView(this, name, value);
    };
    CardView.radiusProperty = radiusProperty;
    CardView.elevationProperty = elevationProperty;
    return CardView;
})(view.View);
exports.CardView = CardView;
