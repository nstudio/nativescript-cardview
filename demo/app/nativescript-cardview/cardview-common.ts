import definition = require("cardview");
import contentView = require("ui/content-view");
import {PropertyMetadata} from "ui/core/proxy";
import {Property, PropertyMetadataSettings} from "ui/core/dependency-observable";

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


export class CardView extends contentView.ContentView implements definition.CardView {

    public static radiusProperty = radiusProperty;
    public static elevationProperty = elevationProperty;

    constructor() {
        super();
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


}