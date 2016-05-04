import {ContentView} from 'ui/content-view';
import {PropertyMetadata} from "ui/core/proxy";
import {Property, PropertyMetadataSettings} from "ui/core/dependency-observable";
import style = require("ui/styling/style");
import view = require("ui/core/view");
import color = require("color");


export class CardView extends ContentView {
  private _radius: number;
  private _elevation: number;
  private _android: android.support.v7.widget.CardView;

  get android(): android.support.v7.widget.CardView {
    return this._android;
  }

  get _nativeView(): android.support.v7.widget.CardView {
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

  private static setBackgroundProperty(view: view.View, newValue: any) {
    var card = <android.support.v7.widget.CardView>view.android;
    var droidColor = new color.Color(newValue).android;
    card.setCardBackgroundColor(droidColor);
  }

  private static resetBackgroundProperty(view: view.View, nativeValue: number) {
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