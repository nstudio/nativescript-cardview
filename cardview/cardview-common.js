var view = require("ui/core/view");
var color = require("color");

var CardView = (function (_super) {

    global.__extends(CardView, _super);

    function CardView() {
        _super.call(this);
    }

    Object.defineProperty(CardView.prototype, "backgroundColor", {
        get: function () {
            return this.backgroundColorProperty;
        },
        set: function(value){
            this.backgroundColorProperty = new color.Color(value);
        }
    });

     Object.defineProperty(CardView.prototype, "radius", {
        get: function () {
            return this.radiusProperty;
        },
        set: function(value){
            this.radiusProperty = value;
        }
    });
    
     Object.defineProperty(CardView.prototype, "elevation", {
        get: function () {
            return this.elevationProperty;
        },
        set: function(value){
            this.elevationProperty = value;
        }
    });

    return CardView;
})(view.View);

exports.CardView = CardView;