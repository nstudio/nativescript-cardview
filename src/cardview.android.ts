/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />

import { Color } from 'tns-core-modules/color';
var application = require("tns-core-modules/application");
import {
  backgroundColorProperty,
  backgroundInternalProperty,
  CardViewCommon,
  elevationProperty,
  radiusProperty,
  rippleProperty
} from './cardview-common';

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

    if( !value ){
      this.nativeView.setClickable(false); 
    } else { 
      let attr = java.lang.Class.forName("android.support.v7.appcompat.R$attr");
      let field = attr.getField("selectableItemBackground");
      
      if( field ) {
        let resId = field.getInt(null);

        let attrs =  Array.create("int", 1);
        attrs[0] = resId
        let activity = application.android.foregroundActivity;
        let typedValue = activity.obtainStyledAttributes(attrs);
        let selectedItemDrawable = typedValue.getDrawable(0);

        this.nativeView.setForeground(selectedItemDrawable);
        this.nativeView.setClickable(true);  
      }
    }
  } 


  public createNativeView() {
    return new (android.support.v7.widget as any).CardView(this._context);
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
