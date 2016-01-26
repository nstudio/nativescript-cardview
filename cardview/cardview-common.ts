import definition = require("ui/cardview");
import platform = require("platform");
import {LayoutBase} from "ui/layouts/layout-base";
import {View} from "ui/core/view";
import {Orientation} from "ui/enums";
import {PropertyMetadata} from "ui/core/proxy";
import {Property, PropertyMetadataSettings} from "ui/core/dependency-observable";

export class CardView extends LayoutBase implements definition.CardView {

    get android(): android.support.v7.widget.CardView {
        return this._android;
    }
    
    get backgroundColor(): string {
        return this._getValue(CardView.backgroundColorProperty);
    }
    set backgroundColor(value: string) {
        this._setValue(CardView.backgroundColorProperty, value);
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

    get contentPadding(): number {
        return this._getValue(CardView.contentPaddingProperty);
    }
    set contentPadding(value: number) {
        this._setValue(CardView.contentPaddingProperty, value);
    }

    get padding(): number {
        return this._getValue(CardView.paddingProperty);
    }
    set padding(value: number) {
        this._setValue(CardView.paddingProperty, value);
    }

}