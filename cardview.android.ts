import common = require("./cardview-common");
import {PropertyMetadata} from "ui/core/proxy";
import {Property, PropertyMetadataSettings} from "ui/core/dependency-observable";

global.moduleMerge(common, exports);

var radiusProp = new Property(
  "radius",
  "CardView",
  new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);
var elevationProp = new Property(
  "elevation",
  "CardView",
  new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);

export class CardView extends common.CardView {
  public static radiusProp = radiusProp;
  public static elevationProp = elevationProp;
  private _android: android.support.v7.widget.CardView;

  constructor() {
    super();
  }

  get android(): android.support.v7.widget.CardView {
    return this._android;
  }

  get _nativeView(): android.support.v7.widget.CardView {
    return this._android;
  }

  get radius(): number {
    return this._getValue(CardView.radiusProp);
  }
  set radius(value: number) {
    this._setValue(CardView.radiusProp, value);
  }

  get elevation(): number {
    return this._getValue(CardView.elevationProp);
  }
  set elevation(value: number) {
    this._setValue(CardView.elevationProp, value);
  }

  public _createUI() {

    this._android = new android.support.v7.widget.CardView(this._context);

    if (!this._androidViewId) {
      this._androidViewId = android.view.View.generateViewId();
    }
    this._android.setId(this._androidViewId);

    if (this.radius)
      this._android.setRadius(this.radius);

    if (this.elevation)
      this._android.setCardElevation(this.elevation);

  }
}