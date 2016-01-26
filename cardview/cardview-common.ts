import definition = require("ui/cardview");
import platform = require("platform");
import {LayoutBase} from "ui/layouts/layout-base";
import {Orientation} from "ui/enums";
import proxy = require("ui/core/proxy");
import dependencyObservable = require("ui/core/dependency-observable");
import view = require("ui/core/view");

export class CardView extends LayoutBase implements definition.CardView {

    public static backgroundColorProperty = new dependencyObservable.Property(
        "background",
        "CardView",
        new proxy.PropertyMetadata("", dependencyObservable.PropertyMetadataSettings.AffectsLayout)
    );

    public static radiusProperty = new dependencyObservable.Property(
        "radius",
        "CardView",
        new proxy.PropertyMetadata("", dependencyObservable.PropertyMetadataSettings.AffectsLayout)
    );

    public static elevationProperty = new dependencyObservable.Property(
        "elevation",
        "CardView",
        new proxy.PropertyMetadata("", dependencyObservable.PropertyMetadataSettings.AffectsLayout)
    );

    public static contentPaddingProperty = new dependencyObservable.Property(
        "contentPadding",
        "CardView",
        new proxy.PropertyMetadata("", dependencyObservable.PropertyMetadataSettings.AffectsLayout)
    );

    public static paddingProperty = new dependencyObservable.Property(
        "padding",
        "CardView",
        new proxy.PropertyMetadata("", dependencyObservable.PropertyMetadataSettings.AffectsLayout)
    );

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