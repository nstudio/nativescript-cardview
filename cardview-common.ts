import { Color } from "tns-core-modules/color";
import { ContentView } from "tns-core-modules/ui/content-view";
import {
  backgroundColorProperty,
  backgroundInternalProperty,
  Property
} from "tns-core-modules/ui/core/view";

export {
  backgroundColorProperty,
  backgroundInternalProperty
} from "tns-core-modules/ui/core/view";

/**
 * Contains the CardView class, which represents a card view component.
 */
export class CardViewCommon extends ContentView {
  /**
   * Gets the native [android widget](https://developer.android.com/reference/android/support/v7/widget/CardView.html) that represents the user interface for this component. Valid only when running on Android OS.
   */
  android: any /* android.support.v7.widget.CardView */;

  /**
   * Gets the native [ios widget](UIView) that represents the user interface for this component. Valid only when running on iOS.
   */
  ios: any /* UIView */;

  /**
   * Gets or set the radius of the card view.
   */
  radius: number;

  /**
   * Gets or set the elevation of the card view.  ** Valid only when running on Android OS **
   */
  elevation: number;

  /**
   * Gets or set the shadow radius of the card view.  ** Valid only when running on iOS **
   */
  shadowRadius: number;

  /**
   * Set the shadow offset width of the card view. ** Valid only when running on iOS **
   */
  shadowOffsetWidth: number;

  /**
   * Set the shadow offset height of the card view. ** Valid only when running on iOS **
   */
  shadowOffsetHeight: number;

  /**
   * Set the shadow color of the card view. ** Valid only when running on iOS **
   */
  shadowColor: string;

  /**
   * Set the shadow opacity of the card view. ** Valid only when running on iOS **
   */
  shadowOpacity: number;
}

export const radiusProperty = new Property<CardViewCommon, number>({
  name: "radius",
  valueConverter: value => +value
});
radiusProperty.register(CardViewCommon);

export const elevationProperty = new Property<CardViewCommon, number>({
  name: "elevation",
  valueConverter: value => +value
});
elevationProperty.register(CardViewCommon);

export const shadowRadiusProperty = new Property<CardViewCommon, number>({
  name: "shadowRadius",
  valueConverter: value => +value
});
shadowRadiusProperty.register(CardViewCommon);

export const shadowOffsetWidthProperty = new Property<CardViewCommon, number>({
  name: "shadowOffsetWidth",
  valueConverter: value => +value
});
shadowOffsetWidthProperty.register(CardViewCommon);

export const shadowOffsetHeightProperty = new Property<CardViewCommon, number>({
  name: "shadowOffsetHeight",
  valueConverter: value => +value
});
shadowOffsetHeightProperty.register(CardViewCommon);

export const shadowColorProperty = new Property<CardViewCommon, Color>({
  name: "shadowColor",
  valueConverter: value => new Color(value)
});
shadowColorProperty.register(CardViewCommon);

export const shadowOpacityProperty = new Property<CardViewCommon, number>({
  name: "shadowOpacity",
  valueConverter: value => +value
});
shadowOpacityProperty.register(CardViewCommon);
