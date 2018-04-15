import { Color } from 'tns-core-modules/color';
import {
  backgroundColorProperty,
  backgroundInternalProperty,
  CardViewCommon,
  elevationProperty,
  radiusProperty
} from './cardview-common';

declare var android: any;

export class CardView extends CardViewCommon {
  private _androidViewId: number;
  public nativeView;

  get android(): any {
    return this.nativeView;
  }

  [radiusProperty.setNative](value: number) {
    this.nativeView.setRadius(value);
  }

  [elevationProperty.setNative](value: number) {
    this.nativeView.setCardElevation(value);
  }

  public createNativeView() {
    return new android.support.v7.widget.CardView(this._context);
  }

  public initNativeView() {
    this._androidViewId = android.view.View.generateViewId();
    this.nativeView.setId(this._androidViewId);
  }

  [backgroundColorProperty.setNative](value: Color) {
    if (value) {
      try {
        this.nativeView.setCardBackgroundColor(value !== undefined ? value.android : new Color('#FFFFFF').android);
      } catch (error) {
        // do nothing, catch bad color value
        console.log('invalid background-color value:', error);
      }
    }
  }

  [backgroundInternalProperty.setNative](value: any) {
    if (value) {
      try {
        this.nativeView.setCardBackgroundColor(
          new Color(value.color !== undefined ? value.color + '' : '#FFFFFF').android
        );
      } catch (error) {
        // do nothing, catch bad color value
        console.log('invalid background-color value:', error);
      }
    }
  }
}
