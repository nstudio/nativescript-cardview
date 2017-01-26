import {ContentView} from 'ui/content-view';
import {Color} from 'color';
import {PropertyMetadata} from 'ui/core/proxy';
import {Property, PropertyMetadataSettings} from 'ui/core/dependency-observable';
import { screen } from 'platform';
import * as uiUtils from 'ui/utils';
import style = require('ui/styling/style');

declare var UIView: any, UIApplication: any, CGRectMake: any, CGSizeMake: any;

export class CardView extends ContentView {
  private _ios: UIView;

  constructor() {
    super();
    let width = screen.mainScreen.widthDIPs - 20;
    this._ios = new UIView(CGRectMake(10, 30, width, 0));
    this._ios.layer.masksToBounds = false;
    this.shadowColor = "black";
    this.radius = "1";
    this.shadowRadius = "1";
    this.shadowOpacity = "0.4";
    this.shadowOffsetHeight = "2";
    this.shadowOffsetWidth = "0";
  }

  get ios(): any {
    return this._ios;
  }

  get _nativeView(): any {
    return this._ios;
  }
  
  set radius(value: string) {
    this._ios.layer.cornerRadius = +value;
  }

  set shadowRadius(value: string) {
    this._ios.layer.shadowRadius = +value;
  }

  set shadowOffsetWidth(value: string) {
    this._ios.layer.shadowOffset = CGSizeMake(+value, this._ios.layer.shadowOffset.height);
  }

  set shadowOffsetHeight(value: string) {
    this._ios.layer.shadowOffset = CGSizeMake(this._ios.layer.shadowOffset.width, +value);
  }

  set shadowColor(value: string) {
    this._ios.layer.shadowColor = new Color(value).ios.CGColor;
  }     
  
  set shadowOpacity(value: string) {
    this._ios.layer.shadowOpacity = +value;
  }

}

export class CardViewStyler implements style.Styler {
    private static setBackgroundProperty(view: any, newValue: any) {  
        if (view._nativeView) {
          try{
            
              // var color = new Color(newValue);
              // console.log('setting background-color', color.ios);
              view._nativeView.backgroundColor = newValue;
            }catch(error){
                //Do nothing, catch bad color value
                console.log('bad background-color value:', error);
            }
        }
    }

    private static resetBackgroundProperty(view: any, nativeValue: number) {
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