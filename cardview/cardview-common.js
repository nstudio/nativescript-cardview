var platform = require("platform");
var view_1 = require("ui/core/view");
var proxy_1 = require("ui/core/proxy");
var dependency_observable_1 = require("ui/core/dependency-observable");
// on Android we explicitly set propertySettings to None because android will invalidate its layout (skip unnecessary native call).
var AffectsLayout = platform.device.os === platform.platformNames.android ? dependency_observable_1.PropertyMetadataSettings.None : dependency_observable_1.PropertyMetadataSettings.AffectsLayout;
var radiusProperty = new dependency_observable_1.Property("radius", "CardView", new proxy_1.PropertyMetadata("", dependency_observable_1.PropertyMetadataSettings.AffectsLayout));
var elevationProperty = new dependency_observable_1.Property("elevation", "CardView", new proxy_1.PropertyMetadata("", dependency_observable_1.PropertyMetadataSettings.AffectsLayout));
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
    //public _getItemTemplateContent(): view.View {
    //    var v;
    //    if (this.itemTemplate && this.items) {
    //        v = builder.parse(this.itemTemplate, getExports(this));
    //    }
    //    return v;
    //}
    //public addChild(child: View): void {
    //    // TODO: Do we need this method since we have the core logic in the View implementation?
    //    //this._subViews.push(child);
    //    this._addView(child);
    //}
    //public _addChildFromBuilder(name: string, value: any) {
    //    if (value instanceof View) {
    //        console.log('name: ' + name + ' value: ' + value);
    //        this.addChild(value);
    //    }
    //}
    CardView.prototype._addChildFromBuilder = function (name, value) {
        if (value instanceof view_1.View) {
            console.log('name: ' + name + ' value: ' + value);
            this._addView(value);
        }
    };
    CardView.radiusProperty = radiusProperty;
    CardView.elevationProperty = elevationProperty;
    return CardView;
})(view_1.View);
exports.CardView = CardView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZHZpZXctY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FyZHZpZXctY29tbW9uLnRzIl0sIm5hbWVzIjpbIkNhcmRWaWV3IiwiQ2FyZFZpZXcuY29uc3RydWN0b3IiLCJDYXJkVmlldy5hbmRyb2lkIiwiQ2FyZFZpZXcucmFkaXVzIiwiQ2FyZFZpZXcuZWxldmF0aW9uIiwiQ2FyZFZpZXcuX2FkZENoaWxkRnJvbUJ1aWxkZXIiXSwibWFwcGluZ3MiOiJBQUNBLElBQU8sUUFBUSxXQUFXLFVBQVUsQ0FBQyxDQUFDO0FBRXRDLHFCQUFtQixjQUFjLENBQUMsQ0FBQTtBQUVsQyxzQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0Msc0NBQWlELCtCQUErQixDQUFDLENBQUE7QUFDakYsbUlBQW1JO0FBQ25JLElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLGdEQUF3QixDQUFDLElBQUksR0FBRyxnREFBd0IsQ0FBQyxhQUFhLENBQUM7QUFFbEosSUFBSSxjQUFjLEdBQUcsSUFBSSxnQ0FBUSxDQUMxQixRQUFRLEVBQ1IsVUFBVSxFQUNWLElBQUksd0JBQWdCLENBQUMsRUFBRSxFQUFFLGdEQUF3QixDQUFDLGFBQWEsQ0FBQyxDQUNuRSxDQUFDO0FBRUwsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLGdDQUFRLENBQzdCLFdBQVcsRUFDWCxVQUFVLEVBQ1YsSUFBSSx3QkFBZ0IsQ0FBQyxFQUFFLEVBQUUsZ0RBQXdCLENBQUMsYUFBYSxDQUFDLENBQ3RFLENBQUM7QUFHSDtJQUE4QkEsNEJBQUlBO0lBSzlCQTtRQUNJQyxpQkFBT0EsQ0FBQ0E7SUFDWkEsQ0FBQ0E7SUFFREQsc0JBQUlBLDZCQUFPQTthQUFYQTtZQUNJRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQTtRQUN6QkEsQ0FBQ0E7OztPQUFBRjtJQUVEQSxzQkFBSUEsNEJBQU1BO2FBQVZBO1lBQ0lHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBO1FBQ25EQSxDQUFDQTthQUNESCxVQUFXQSxLQUFhQTtZQUNwQkcsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsY0FBY0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDbkRBLENBQUNBOzs7T0FIQUg7SUFLREEsc0JBQUlBLCtCQUFTQTthQUFiQTtZQUNJSSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxRQUFRQSxDQUFDQSxpQkFBaUJBLENBQUNBLENBQUNBO1FBQ3REQSxDQUFDQTthQUNESixVQUFjQSxLQUFhQTtZQUN2QkksSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUN0REEsQ0FBQ0E7OztPQUhBSjtJQU1EQSwrQ0FBK0NBO0lBQy9DQSxZQUFZQTtJQUVaQSw0Q0FBNENBO0lBQzVDQSxpRUFBaUVBO0lBQ2pFQSxPQUFPQTtJQUVQQSxlQUFlQTtJQUNmQSxHQUFHQTtJQUVIQSxzQ0FBc0NBO0lBQ3RDQSw4RkFBOEZBO0lBQzlGQSxtQ0FBbUNBO0lBQ25DQSwyQkFBMkJBO0lBQzNCQSxHQUFHQTtJQUdIQSx5REFBeURBO0lBQ3pEQSxrQ0FBa0NBO0lBQ2xDQSw0REFBNERBO0lBQzVEQSwrQkFBK0JBO0lBQy9CQSxPQUFPQTtJQUNQQSxHQUFHQTtJQUVJQSx1Q0FBb0JBLEdBQTNCQSxVQUE0QkEsSUFBWUEsRUFBRUEsS0FBVUE7UUFDaERLLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLFlBQVlBLFdBQUlBLENBQUNBLENBQUNBLENBQUNBO1lBQ3hCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxHQUFHQSxVQUFVQSxHQUFHQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUNsREEsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDekJBLENBQUNBO0lBQ0xBLENBQUNBO0lBdkRhTCx1QkFBY0EsR0FBR0EsY0FBY0EsQ0FBQ0E7SUFDaENBLDBCQUFpQkEsR0FBR0EsaUJBQWlCQSxDQUFDQTtJQXdEeERBLGVBQUNBO0FBQURBLENBQUNBLEFBM0RELEVBQThCLFdBQUksRUEyRGpDO0FBM0RZLGdCQUFRLFdBMkRwQixDQUFBIn0=