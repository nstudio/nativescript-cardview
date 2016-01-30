var common = require("./cardview-common");
global.moduleMerge(common, exports);
var CardView = (function (_super) {
    __extends(CardView, _super);
    function CardView() {
        _super.call(this);
    }
    Object.defineProperty(CardView.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardView.prototype, "_nativeView", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    CardView.prototype._createUI = function () {
        this._android = new android.support.v7.widget.CardView(this._context);
        if (!this._androidViewId) {
            this._androidViewId = android.view.View.generateViewId();
        }
        this._android.setId(this._androidViewId);
        if (this.radius)
            this._android.setRadius(this.radius);
        if (this.elevation)
            this._android.setCardElevation(this.elevation);
    };
    return CardView;
})(common.CardView);
exports.CardView = CardView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZHZpZXcuYW5kcm9pZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcmR2aWV3LmFuZHJvaWQudHMiXSwibmFtZXMiOlsiQ2FyZFZpZXciLCJDYXJkVmlldy5jb25zdHJ1Y3RvciIsIkNhcmRWaWV3LmFuZHJvaWQiLCJDYXJkVmlldy5fbmF0aXZlVmlldyIsIkNhcmRWaWV3Ll9jcmVhdGVVSSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTyxNQUFNLFdBQVcsbUJBQW1CLENBQUMsQ0FBQztBQUU3QyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUVwQztJQUE4QkEsNEJBQWVBO0lBR3pDQTtRQUNJQyxpQkFBT0EsQ0FBQ0E7SUFDWkEsQ0FBQ0E7SUFFREQsc0JBQUlBLDZCQUFPQTthQUFYQTtZQUNJRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQTtRQUN6QkEsQ0FBQ0E7OztPQUFBRjtJQUVEQSxzQkFBSUEsaUNBQVdBO2FBQWZBO1lBQ0lHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBO1FBQ3pCQSxDQUFDQTs7O09BQUFIO0lBRU1BLDRCQUFTQSxHQUFoQkE7UUFFSUksSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7UUFFdEVBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3ZCQSxJQUFJQSxDQUFDQSxjQUFjQSxHQUFHQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtRQUM3REEsQ0FBQ0E7UUFDREEsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0E7UUFFekNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBO1lBQ1pBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBRXpDQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQTtZQUNmQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxnQkFBZ0JBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO0lBRXZEQSxDQUFDQTtJQUNMSixlQUFDQTtBQUFEQSxDQUFDQSxBQS9CRCxFQUE4QixNQUFNLENBQUMsUUFBUSxFQStCNUM7QUEvQlksZ0JBQVEsV0ErQnBCLENBQUEifQ==