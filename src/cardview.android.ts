import { Application, Color, backgroundColorProperty, backgroundInternalProperty } from '@nativescript/core';
import {
  CardViewCommon,
  elevationProperty,
  radiusProperty,
  rippleProperty
} from './cardview-common';
declare let global: any;
const CardViewNamespace = useAndroidX() ? global.androidx.cardview.widget : (<any>android.support).v7.widget;
const AppCompatResourcesNamespace = useAndroidX() ? 'androidx.appcompat' : 'android.support.v7.appcompat';

function useAndroidX() {
  return global.androidx && global.androidx.cardview;
}
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

  [rippleProperty.setNative](value: boolean) {
    if (!value) {
      this.nativeView.setClickable(false);
    } else {
      const resourcesUri = AppCompatResourcesNamespace + '.R$attr';
      const attr = java.lang.Class.forName(resourcesUri);

      // https://developer.android.com/reference/java/lang/Class#getField(java.lang.String)
      const field = attr.getField('selectableItemBackground') as java.lang.reflect.Field;

      if (field && android.os.Build.VERSION.SDK_INT >= 23) {
        const resId = field.getInt(null);

        const attrs = Array.create('int', 1);
        attrs[0] = resId;
        const activity = Application.android.foregroundActivity;
        const typedValue = activity.obtainStyledAttributes(attrs);
        const selectedItemDrawable = typedValue.getDrawable(0);
        this.nativeView.setForeground(selectedItemDrawable);
        this.nativeView.setClickable(true);
      }
    }
  }

  public createNativeView() {
    return new CardViewNamespace.CardView(this._context);
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
        console.log('NativeScript-Cardview --- invalid background-color value ', error);
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
        console.log('NativeScript-Cardview --- invalid background-color value:', error);
      }
    }
  }
}
