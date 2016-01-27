var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var common = require("./cardview-common");
global.moduleMerge(common, exports);
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
    CardView.prototype._createUI = function () {
        this._android = new android.support.v7.widget.CardView(this._context);
        if (this.radius)
            this._android.setRadius(this.radius);
        if (this.elevation)
            this._android.setCardElevation(this.elevation);
    };
    return CardView;
})(common.CardView);
exports.CardView = CardView;
