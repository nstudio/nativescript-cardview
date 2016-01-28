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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZHZpZXcuYW5kcm9pZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcmR2aWV3LmFuZHJvaWQudHMiXSwibmFtZXMiOlsiQ2FyZFZpZXciLCJDYXJkVmlldy5jb25zdHJ1Y3RvciIsIkNhcmRWaWV3LmFuZHJvaWQiLCJDYXJkVmlldy5fY3JlYXRlVUkiXSwibWFwcGluZ3MiOiJBQUFBLElBQU8sTUFBTSxXQUFXLG1CQUFtQixDQUFDLENBQUM7QUFHN0MsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFFcEM7SUFBOEJBLDRCQUFlQTtJQUd6Q0E7UUFDSUMsaUJBQU9BLENBQUNBO0lBQ1pBLENBQUNBO0lBRURELHNCQUFJQSw2QkFBT0E7YUFBWEE7WUFDSUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7UUFDekJBLENBQUNBOzs7T0FBQUY7SUFFTUEsNEJBQVNBLEdBQWhCQTtRQUVJRyxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtRQUV0RUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7WUFDWkEsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFFekNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBO1lBQ2ZBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7SUFFdkRBLENBQUNBO0lBQ0xILGVBQUNBO0FBQURBLENBQUNBLEFBdEJELEVBQThCLE1BQU0sQ0FBQyxRQUFRLEVBc0I1QztBQXRCWSxnQkFBUSxXQXNCcEIsQ0FBQSJ9