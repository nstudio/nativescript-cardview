import definition = require("cardview");
import platform = require("platform");
import {LayoutBase} from "ui/layouts/layout-base";
import {Orientation} from "ui/enums";
import proxy = require("ui/core/proxy");
import dependencyObservable = require("ui/core/dependency-observable");
import view = require("ui/core/view");
 
 var radiusProperty = new dependencyObservable.Property(
        "radius",
        "CardView",
        new proxy.PropertyMetadata("", dependencyObservable.PropertyMetadataSettings.AffectsLayout)
    );

 var elevationProperty = new dependencyObservable.Property(
        "elevation",
        "CardView",
        new proxy.PropertyMetadata("", dependencyObservable.PropertyMetadataSettings.AffectsLayout)
 );

export class CardView extends view.View implements definition.CardView {

    public static radiusProperty = radiusProperty;
    public static elevationProperty = elevationProperty;

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
    
    
    public _addChildFromBuilder(name: string, value: any): void {
        console.log('name = ' + name + " value = " + value);
        //formattedString.FormattedString.addFormattedStringToView(this, name, value);
    }

}