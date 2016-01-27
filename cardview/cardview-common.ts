import definition = require("cardview");
import platform = require("platform");
import {LayoutBase} from "ui/layouts/layout-base";
import {View} from "ui/core/view";
import {Orientation} from "ui/enums";
import {PropertyMetadata} from "ui/core/proxy";
import {Property, PropertyMetadataSettings} from "ui/core/dependency-observable"; 
// on Android we explicitly set propertySettings to None because android will invalidate its layout (skip unnecessary native call).
var AffectsLayout = platform.device.os === platform.platformNames.android ? PropertyMetadataSettings.None : PropertyMetadataSettings.AffectsLayout;

 var radiusProperty = new Property(
        "radius",
        "CardView",
        new PropertyMetadata("", PropertyMetadataSettings.AffectsLayout)
    );

 var elevationProperty = new Property(
        "elevation",
        "CardView",
        new PropertyMetadata("", PropertyMetadataSettings.AffectsLayout)
 );


export class CardView extends View implements definition.CardView {

    public static radiusProperty = radiusProperty;
    public static elevationProperty = elevationProperty;

    constructor() {
        super();
    }

    get android(): android.support.v7.widget.CardView {
        return this._android;
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

    public _addChildFromBuilder(name: string, value: any) {
        if (value instanceof View) {
            console.log('name: ' + name + ' value: ' + value);
            this._addView(value);
        }
    }

}