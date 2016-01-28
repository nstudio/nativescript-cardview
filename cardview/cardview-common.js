var view = require("ui/core/view");
var proxy_1 = require("ui/core/proxy");
var dependency_observable_1 = require("ui/core/dependency-observable");
//// on Android we explicitly set propertySettings to None because android will invalidate its layout (skip unnecessary native call).
//var AffectsLayout = platform.device.os === platform.platformNames.android ? PropertyMetadataSettings.None : PropertyMetadataSettings.AffectsLayout;
var radiusProperty = new dependency_observable_1.Property("radius", "CardView", new proxy_1.PropertyMetadata(undefined, dependency_observable_1.PropertyMetadataSettings.None));
var elevationProperty = new dependency_observable_1.Property("elevation", "CardView", new proxy_1.PropertyMetadata(undefined, dependency_observable_1.PropertyMetadataSettings.None));
var CardView = (function (_super) {
    __extends(CardView, _super);
    function CardView() {
        _super.call(this);
    }
    Object.defineProperty(CardView.prototype, "android", {
        get: function () {
            return this.android;
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
        console.log('name: ' + name + ' value: ' + value);
        //if (value instanceof LayoutBase) {
        //this._addView(value);
        this.android.addView(value.android);
        //}
    };
    CardView.radiusProperty = radiusProperty;
    CardView.elevationProperty = elevationProperty;
    return CardView;
})(view.View);
exports.CardView = CardView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZHZpZXctY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FyZHZpZXctY29tbW9uLnRzIl0sIm5hbWVzIjpbIkNhcmRWaWV3IiwiQ2FyZFZpZXcuY29uc3RydWN0b3IiLCJDYXJkVmlldy5hbmRyb2lkIiwiQ2FyZFZpZXcucmFkaXVzIiwiQ2FyZFZpZXcuZWxldmF0aW9uIiwiQ2FyZFZpZXcuX2FkZENoaWxkRnJvbUJ1aWxkZXIiXSwibWFwcGluZ3MiOiJBQUdBLElBQU8sSUFBSSxXQUFXLGNBQWMsQ0FBQyxDQUFDO0FBRXRDLHNCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyxzQ0FBaUQsK0JBQStCLENBQUMsQ0FBQTtBQUNqRixxSUFBcUk7QUFDckkscUpBQXFKO0FBRXBKLElBQUksY0FBYyxHQUFHLElBQUksZ0NBQVEsQ0FDMUIsUUFBUSxFQUNSLFVBQVUsRUFDVixJQUFJLHdCQUFnQixDQUFDLFNBQVMsRUFBRSxnREFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FDakUsQ0FBQztBQUVMLElBQUksaUJBQWlCLEdBQUcsSUFBSSxnQ0FBUSxDQUM3QixXQUFXLEVBQ1gsVUFBVSxFQUNWLElBQUksd0JBQWdCLENBQUMsU0FBUyxFQUFFLGdEQUF3QixDQUFDLElBQUksQ0FBQyxDQUNwRSxDQUFDO0FBR0g7SUFBOEJBLDRCQUFTQTtJQUtuQ0E7UUFDSUMsaUJBQU9BLENBQUNBO0lBQ1pBLENBQUNBO0lBRURELHNCQUFJQSw2QkFBT0E7YUFBWEE7WUFDSUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7UUFDeEJBLENBQUNBOzs7T0FBQUY7SUFFREEsc0JBQUlBLDRCQUFNQTthQUFWQTtZQUNJRyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxRQUFRQSxDQUFDQSxjQUFjQSxDQUFDQSxDQUFDQTtRQUNuREEsQ0FBQ0E7YUFDREgsVUFBV0EsS0FBYUE7WUFDcEJHLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLENBQUNBLGNBQWNBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO1FBQ25EQSxDQUFDQTs7O09BSEFIO0lBS0RBLHNCQUFJQSwrQkFBU0E7YUFBYkE7WUFDSUksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxDQUFDQTtRQUN0REEsQ0FBQ0E7YUFDREosVUFBY0EsS0FBYUE7WUFDdkJJLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLENBQUNBLGlCQUFpQkEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDdERBLENBQUNBOzs7T0FIQUo7SUFLTUEsdUNBQW9CQSxHQUEzQkEsVUFBNEJBLElBQVlBLEVBQUVBLEtBQVVBO1FBQ2hESyxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxHQUFHQSxVQUFVQSxHQUFHQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUNsREEsb0NBQW9DQTtRQUNwQ0EsdUJBQXVCQTtRQUN2QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFDcENBLEdBQUdBO0lBQ1BBLENBQUNBO0lBL0JhTCx1QkFBY0EsR0FBR0EsY0FBY0EsQ0FBQ0E7SUFDaENBLDBCQUFpQkEsR0FBR0EsaUJBQWlCQSxDQUFDQTtJQWdDeERBLGVBQUNBO0FBQURBLENBQUNBLEFBbkNELEVBQThCLElBQUksQ0FBQyxJQUFJLEVBbUN0QztBQW5DWSxnQkFBUSxXQW1DcEIsQ0FBQSJ9