import definition = require("cardview");
import platform = require("platform");
import {LayoutBase} from "ui/layouts/layout-base";
import view = require("ui/core/view");
import {Orientation} from "ui/enums";
import {PropertyMetadata} from "ui/core/proxy";
import {Property, PropertyMetadataSettings} from "ui/core/dependency-observable"; 
//// on Android we explicitly set propertySettings to None because android will invalidate its layout (skip unnecessary native call).
//var AffectsLayout = platform.device.os === platform.platformNames.android ? PropertyMetadataSettings.None : PropertyMetadataSettings.AffectsLayout;

 var radiusProperty = new Property(
        "radius",
        "CardView",
        new PropertyMetadata(undefined, PropertyMetadataSettings.None)
    );

 var elevationProperty = new Property(
        "elevation",
        "CardView",
        new PropertyMetadata(undefined, PropertyMetadataSettings.None)
 );


export class CardView extends view.View implements definition.CardView {

    public static radiusProperty = radiusProperty;
    public static elevationProperty = elevationProperty;

    constructor() {
        super();
    }

    get android(): android.support.v7.widget.CardView {
        return this.android;
    }

    get radius(): number {
        return this._getValue(CardView.radiusProperty);
    }
    set radius(value: number) {
        this._setValue(CardView.radiusProperty, value);
    }

    get elevation(): number {
        return this._getValue(CardView.elevationProperty);
    }
    set elevation(value: number) {
        this._setValue(CardView.elevationProperty, value);
    }

    public _addChildFromBuilder(name: string, value: any): void {
        console.log('name: ' + name + ' value: ' + value);
        //if (value instanceof LayoutBase) {
        //this._addView(value);
        this.android.addView(value.android);
        //}
    }

}