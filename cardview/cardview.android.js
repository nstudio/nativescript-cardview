/**************************************************************************************
 * Made for the {N} community by Brad Martin @BradWayneMartin                           
 * https://twitter.com/BradWayneMartin
 * https://github.com/bradmartin
 * Pull requests are welcome. Enjoy!
 *************************************************************************************/

var common = require("./cardview-common");
global.moduleMerge(common, exports);
var CardView = (function (_super) {
    __extends(CardView, _super);
    function CardView() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(CardView.prototype, "android", {
        get: function () {
            return this._layout;
        },
        enumerable: true,
        configurable: true
    });
    CardView.prototype._createUI = function () {
        this._layout = new android.support.v7.widget.CardView(this._context);
        if (this.radius)
            this._layout.setRadius(this.radius);
        if (this.backgroundColor)
            this._layout.setCardBackgroundColor(this.backgroundColor.android);
        if (this.elevation)
            this._layout.setMaxCardElevation(this.elevation);
        if (this.padding)
            this._layout.setContentPadding(this.padding);
        if (this.contentPadding)
            this._layout.setPadding(this.contentPadding);
    };
    return CardView;
})(common.CardView);
exports.CardView = CardView;




    //     CardView.prototype._createUI = function () {
    // 
    //         // http://developer.android.com/intl/zh-tw/reference/android/support/v7/widget/CardView.html
    //         this._android = new android.support.v7.widget.CardView(args.context);
    // 
    //         if (this.radius)
    //             this._android.setRadius(this.radius);
    // 
    //         if (this.elevation)
    //             this._android.setMaxCardElevation(this.elevation);
    // 
    //         if (this.backgroundColor)
    //             this._android.setCardBackgroundColor(android.content.res.ColorStateList.valueOf(this.backgroundColor.android));
    // 
    // 
    //         //          var that = new WeakRef(this);
    //         // 
    //         //          this._android.setOnClickListener(new android.view.View.OnClickListener({
    //         //               get owner() {
    //         //                   return that.get();
    //         //               },
    //         // 
    //         //               onClick: function (v) {
    //         //                   if (this.owner) {
    //         //                       this.owner._emit("tap");
    //         //                   }
    //         //               }
    //         //         }));
    //     };
    // 
    //     Object.defineProperty(CardView.prototype, "android", {
    //         get: function () {
    //             return this._android;
    //         },
    //         enumerable: true,
    //         configurable: true
    //     });