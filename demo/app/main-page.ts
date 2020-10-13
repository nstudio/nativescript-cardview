import { Application, Color, Device, isAndroid } from '@nativescript/core';
import { Demo } from './main-view-model';

export function pageLoaded(args) {
  const page = args.object;
  page.bindingContext = new Demo();

  if (isAndroid && Device.sdkVersion >= '21') {
    const window = Application.android.startActivity.getWindow();
    window.setStatusBarColor(new Color('#004c40').android);
  }
}
