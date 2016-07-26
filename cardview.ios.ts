import {ContentView} from 'ui/content-view';
import {Color} from 'color';
import {PropertyMetadata} from 'ui/core/proxy';
import {Property, PropertyMetadataSettings} from 'ui/core/dependency-observable';
import { screen } from 'platform';
import * as uiUtils from 'ui/utils';


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