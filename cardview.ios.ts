import {ContentView} from 'ui/content-view';
import {Color} from 'color';
import {PropertyMetadata} from 'ui/core/proxy';
import {Property, PropertyMetadataSettings} from 'ui/core/dependency-observable';
import { screen } from 'platform';
import * as uiUtils from 'ui/utils';
import style = require("ui/styling/style");


declare var MaterialCard: any, UIApplication: any, CGRectMake: any;

export class CardView extends ContentView {
  private _ios: MaterialCard;

  constructor() {
    super();
    let width = screen.mainScreen.widthDIPs - 20;
    this._ios = new MaterialCard(CGRectMake(10, 30, width, 0));

    // Default values for MaterialCard    
    // radius = 2;
    // shadowOffsetWidth = 0;
    // shadowOffsetHeight = 2;
    // shadowColor = new Color('#000').ios
    // shadowOpacity = 0.4;
  }

  get ios(): any {
    return this._ios;
  }

  get _nativeView(): any {
    return this._ios;
  }
  
  set radius(value: string) {
    this._ios.cornerRadius = +value;
  }

  set shadowOffsetWidth(value: string) {
    this._ios.shadowOffsetWidth = +value;
  }

  set shadowOffsetHeight(value: string) {
    this._ios.shadowOffsetHeight = +value;
  }

  set shadowColor(value: string) {
    this._ios.shadowColor = new Color(value).ios;
  }     
  
  set shadowOpacity(value: string) {
    this._ios.shadowOpacity = +value;
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