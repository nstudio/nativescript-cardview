import { Color } from "color";
import { screen } from "platform";
import {
  CardViewCommon, radiusProperty, shadowColorProperty, shadowOffsetHeightProperty, shadowOffsetWidthProperty,
  shadowOpacityProperty, shadowRadiusProperty
} from "./cardview-common";

declare var UIView: any, CGRectMake: any, CGSizeMake: any;

export class CardView extends CardViewCommon {

  constructor() {
    super();
    let width = screen.mainScreen.widthDIPs - 20;
    this.nativeView = new UIView(CGRectMake(10, 30, width, 0));
    this.nativeView.layer.masksToBounds = false;
    this.shadowColor = "black";
    this.radius = 1;
    this.shadowRadius = 1;
    this.shadowOpacity = 0.4;
    this.shadowOffsetHeight = 2;
    this.shadowOffsetWidth = 0;
  }

  get ios(): any {
    return this.nativeView;
  }

  [radiusProperty.setNative](value: number) {
    this.nativeView.layer.cornerRadius = value;
  }

  [shadowRadiusProperty.setNative](value: number) {
    this.nativeView.layer.shadowRadius = value;
  }

  [shadowOffsetWidthProperty.setNative](value: number) {
    this.nativeView.layer.shadowOffset = CGSizeMake(value, this.nativeView.layer.shadowOffset.height);
  }

  [shadowOffsetHeightProperty.setNative](value: number) {
    this.nativeView.layer.shadowOffset = CGSizeMake(this.nativeView.layer.shadowOffset.width, value);
  }

  [shadowColorProperty.setNative](value: Color) {
    this.nativeView.layer.shadowColor = value.ios.CGColor;
  }

  [shadowOpacityProperty.setNative](value: number) {
    this.nativeView.layer.shadowOpacity = value;
  }
}
