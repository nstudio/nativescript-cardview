import common = require("./cardview-common");
import color = require("color");

global.moduleMerge(common, exports);

export class CardView extends common.CardView {
    private _android: android.support.v7.widget.CardView;

    get android(): android.support.v7.widget.CardView {
        return this._android;
    }

    public _createUI() {

        this._android = new android.support.v7.widget.CardView(this._context);

        if (this.backgroundColor)
            this._android.setCardBackgroundColor(new color.Color(this.backgroundColor.android));

        if (this.radius)
            this._android.setRadius(this.radius);       

        if (this.elevation)
            this._android.setCardElevation(this.elevation);

        if (this.contentPadding)
            this._android.setContentPadding(this.contentPadding);

        if (this.padding)
            this._android.setPadding(this.padding, this.padding, this.padding, this.padding);
    }
}