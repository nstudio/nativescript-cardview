import { Demo } from './main-view-model';
import { isAndroid, device } from 'tns-core-modules/platform';
import { Color } from 'tns-core-modules/color/color';
import { android } from 'tns-core-modules/application';

export function pageLoaded(args) {
  const page = args.object;
  page.bindingContext = new Demo();

  if (isAndroid && device.sdkVersion >= '21') {
    const window = android.startActivity.getWindow();
    window.setStatusBarColor(new Color('#004c40').android);
  }
}
