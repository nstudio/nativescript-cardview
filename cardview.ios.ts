import common = require("./cardview-common");
import {Color} from "color";
import uiUtils = require("ui/utils");
import {PropertyMetadata} from "ui/core/proxy";
import {Property, PropertyMetadataSettings} from "ui/core/dependency-observable";

global.moduleMerge(common, exports);

declare var MaterialCard: any, UIApplication: any, CGRectMake: any;

// var radiusProp = new Property(
//   "radius",
//   "CardView",
//   new PropertyMetadata(undefined, PropertyMetadataSettings.None)
// );
// var shadowOpacityProp = new Property(
//   "shadowOpacity",
//   "CardView",
//   new PropertyMetadata(undefined, PropertyMetadataSettings.None)
// );
// var shadowRadiusProp = new Property(
//   "shadowRadius",
//   "CardView",
//   new PropertyMetadata(undefined, PropertyMetadataSettings.None)
// );
// var backgroundColorProp = new Property(
//   "backgroundColor",
//   "CardView",
//   new PropertyMetadata(undefined, PropertyMetadataSettings.None)
// );


export class CardView extends common.CardView {
  // public radiusProp = radiusProp;
  // public shadowOpacityProp = shadowOpacityProp;
  // public shadowRadiusProp = shadowRadiusProp;
  // public backgroundColorProp = backgroundColorProp;
  private _ios: MaterialCard;

  constructor() {
    super();

        
    this._ios = new MaterialCard(CGRectMake(10, uiUtils.ios.getStatusBarHeight() + 10, UIApplication.sharedApplication().statusBarFrame.size.width - 20, 0));
    // this._ios.cornerRadius = 0;
    // this._ios.shadowOffsetWidth = 1;
    // this._ios.shadowOffsetHeight = 8;
    // this._ios.shadowColor = new Color('#5390E5').ios
    // this._ios.shadowOpacity = .8;
    
    
    console.log(`CardView constructor ------`);
    console.log(this._ios);   
  }

  get ios(): MaterialCard {
    return this._ios;
  }

  get _nativeView(): MaterialCard {
    return this._ios;
  }
  
  // get radius(): string {
  //   return this._getValue(this.radiusProp);
  // }
  // set radius(value: string) {
  //   this._setValue(this.radiusProp, value);
  // }
  
  // get shadowOpacity(): string {
  //   return this._getValue(this.shadowOpacityProp);
  // }
  // set shadowOpacity(value: string) {
  //   this._setValue(this.shadowOpacityProp, value);
  // }
  
  // get shadowRadius(): string {
  //   return this._getValue(this.shadowRadiusProp);
  // }
  // set shadowRadius(value: string) {
  //   this._setValue(this.shadowRadiusProp, value);
  // }

  // get backgroundColor(): string {
  //   return this._getValue(this.backgroundColorProp);
  // }
  // set backgroundColor(value: string) {
  //   this._setValue(this.backgroundColorProp, value);
  // }

  private updateAppearance() {
    // console.log('updateAppearance');
    
    // if (this.radius) {
    //   // console.log(`radius: ${this.radius}`);  
    //   this._ios.cardRadius = +this.radius;
    // }
    
    // if (this.shadowOpacity) {
    //   // console.log(`shadowOpacity: ${this.shadowOpacity}`);  
    //   this._ios.shadowOpacity = +this.shadowOpacity;
    // }
    
    // if (this.shadowRadius) {
    //   // console.log(`shadowRadius: ${this.shadowRadius}`);  
    //   this._ios.shadowRadius = +this.shadowRadius;
    // }
    
    // if (this.backgroundColor) {
    //   // console.log(`backgroundColor: ${this.backgroundColor}`);  
    //   this._ios.backgroundColor = new Color(this.backgroundColor).ios;
    // }
  }
}