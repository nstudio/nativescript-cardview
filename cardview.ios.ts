import {ContentView} from 'ui/content-view';
import {Color} from "color";
import * as uiUtils from 'ui/utils';
import {PropertyMetadata} from 'ui/core/proxy';
import {Property, PropertyMetadataSettings} from 'ui/core/dependency-observable';

declare var MaterialCard: any, UIApplication: any, CGRectMake: any;

export class CardView extends ContentView {
  private _ios: MaterialCard;

  constructor() {
    super();
 
    this._ios = new MaterialCard(CGRectMake(10, uiUtils.ios.getStatusBarHeight() + 10, UIApplication.sharedApplication().statusBarFrame.size.width - 20, 0));

    // Default values for MaterialCard    
    // radius = 2;
    // shadowOffsetWidth = 0;
    // shadowOffsetHeight = 2;
    // shadowColor = new Color('#000').ios
    // shadowOpacity = 0.4;
    
    // console.log(`CardView constructor ------`);
    // console.log(this._ios);   
  }

  get ios(): MaterialCard {
    return this._ios;
  }

  get _nativeView(): MaterialCard {
    return this._ios;
  }
  
  set radius(value: string) {
    // console.log(`radius: ${value}`);
    this._ios.cornerRadius = +value;
  }

  set shadowOffsetWidth(value: string) {
    // console.log(`shadowOffsetWidth: ${value}`);
    this._ios.shadowOffsetWidth = +value;
  }

  set shadowOffsetHeight(value: string) {
    // console.log(`shadowOffsetHeight: ${value}`);
    this._ios.shadowOffsetHeight = +value;
  }

  set shadowColor(value: string) {
    // console.log(`shadowColor: ${value}`);  
    this._ios.shadowColor = new Color(value).ios;
  }     
  
  set shadowOpacity(value: string) {
    // console.log(`shadowOpacity: ${value}`);  
    this._ios.shadowOpacity = +value;
  }

}