var contentView = require("ui/content-view");
var proxy_1 = require("ui/core/proxy");
var dependency_observable_1 = require("ui/core/dependency-observable");
var radiusProperty = new dependency_observable_1.Property("radius", "CardView", new proxy_1.PropertyMetadata(undefined, dependency_observable_1.PropertyMetadataSettings.None));
var elevationProperty = new dependency_observable_1.Property("elevation", "CardView", new proxy_1.PropertyMetadata(undefined, dependency_observable_1.PropertyMetadataSettings.None));
var CardView = (function (_super) {
    __extends(CardView, _super);
    function CardView() {
        _super.call(this);
    }
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
    CardView.radiusProperty = radiusProperty;
    CardView.elevationProperty = elevationProperty;
    return CardView;
})(contentView.ContentView);
exports.CardView = CardView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZHZpZXctY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FyZHZpZXctY29tbW9uLnRzIl0sIm5hbWVzIjpbIkNhcmRWaWV3IiwiQ2FyZFZpZXcuY29uc3RydWN0b3IiLCJDYXJkVmlldy5yYWRpdXMiLCJDYXJkVmlldy5lbGV2YXRpb24iXSwibWFwcGluZ3MiOiJBQUNBLElBQU8sV0FBVyxXQUFXLGlCQUFpQixDQUFDLENBQUM7QUFDaEQsc0JBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLHNDQUFpRCwrQkFBK0IsQ0FBQyxDQUFBO0FBRWpGLElBQUksY0FBYyxHQUFHLElBQUksZ0NBQVEsQ0FDekIsUUFBUSxFQUNSLFVBQVUsRUFDVixJQUFJLHdCQUFnQixDQUFDLFNBQVMsRUFBRSxnREFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FDakUsQ0FBQztBQUVOLElBQUksaUJBQWlCLEdBQUcsSUFBSSxnQ0FBUSxDQUM1QixXQUFXLEVBQ1gsVUFBVSxFQUNWLElBQUksd0JBQWdCLENBQUMsU0FBUyxFQUFFLGdEQUF3QixDQUFDLElBQUksQ0FBQyxDQUNwRSxDQUFDO0FBRUg7SUFBOEJBLDRCQUF1QkE7SUFLakRBO1FBQ0lDLGlCQUFPQSxDQUFDQTtJQUNaQSxDQUFDQTtJQUVERCxzQkFBSUEsNEJBQU1BO2FBQVZBO1lBQ0lFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBO1FBQ25EQSxDQUFDQTthQUNERixVQUFXQSxLQUFhQTtZQUNwQkUsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsY0FBY0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDbkRBLENBQUNBOzs7T0FIQUY7SUFLREEsc0JBQUlBLCtCQUFTQTthQUFiQTtZQUNJRyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxRQUFRQSxDQUFDQSxpQkFBaUJBLENBQUNBLENBQUNBO1FBQ3REQSxDQUFDQTthQUNESCxVQUFjQSxLQUFhQTtZQUN2QkcsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUN0REEsQ0FBQ0E7OztPQUhBSDtJQWhCYUEsdUJBQWNBLEdBQUdBLGNBQWNBLENBQUNBO0lBQ2hDQSwwQkFBaUJBLEdBQUdBLGlCQUFpQkEsQ0FBQ0E7SUFvQnhEQSxlQUFDQTtBQUFEQSxDQUFDQSxBQXZCRCxFQUE4QixXQUFXLENBQUMsV0FBVyxFQXVCcEQ7QUF2QlksZ0JBQVEsV0F1QnBCLENBQUEifQ==