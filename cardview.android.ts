import {ContentView} from 'ui/content-view';
import {PropertyMetadata} from "ui/core/proxy";
import {Property, PropertyMetadataSettings} from "ui/core/dependency-observable";
import { View } from "ui/core/view";
import { Color } from "color";
import style = require("ui/styling/style");

declare var android: any;

export class CardView extends ContentView {
  private _radius: number;
  private _elevation: number;
  private _androidViewId: number;
  private _android: android.support.v7.widget.CardView;

  get android(): any {
    return this._android;
  }

  get _nativeView(): any {
    return this._android;
  }

  set radius(value: number) {
    this._radius = value;
    if (this._android)
      this._android.setRadius(value);
  }

  set elevation(value: number) {
    this._elevation = value;
    if (this._android)
      this._android.setCardElevation(value);
  }

  public _createUI() {
    this._android = new android.support.v7.widget.CardView(this._context);

    if (!this._androidViewId) {
      this._androidViewId = android.view.View.generateViewId();
    }
    this._android.setId(this._androidViewId);

    if (this._radius)
      this.radius = this._radius;

    if (this._elevation)
      this.elevation = this._elevation;
  }
}



export class CardViewStyler implements style.Styler {

  private static setBackgroundProperty(view: View, newValue: any) {
    var card = <android.support.v7.widget.CardView>view.android;
    var droidColor = new Color(newValue).android;
    card.setCardBackgroundColor(droidColor);
  }

  private static resetBackgroundProperty(view: View, nativeValue: number) {
    // Do nothing.
  }

  public static registerHandlers() {
    style.registerHandler(style.backgroundColorProperty, new style.StylePropertyChangedHandler(
      CardViewStyler.setBackgroundProperty,
      CardViewStyler.resetBackgroundProperty), "CardView");

    style.registerHandler(style.backgroundInternalProperty, style.ignorePropertyHandler, "CardView");
  }
}

CardViewStyler.registerHandlers();