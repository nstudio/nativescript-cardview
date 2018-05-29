import { ContentView } from 'tns-core-modules/ui/content-view';

/**
 * Contains the CardView class, which represents a card view component.
 */
export class CardView extends ContentView {
  /**
   * Gets the native [android widget](https://developer.android.com/reference/android/support/v7/widget/CardView.html) that represents the user interface for this component. Valid only when running on Android OS.
   */
  android: any /* android.support.v7.widget.CardView */;

  /**
   * Gets the native [ios widget](UIView) that represents the user interface for this component. Valid only when running on iOS.
   */
  ios: any /* MaterialCard */;

  /**
   * Gets or set the radius of the card view.
   */
  radius: number;

  /**
   * Gets or set the elevation of the card view.  ** Android Only **
   */
  elevation: number;

  /**
   * Gets or set the shadow radius of the card view.  ** iOS Only **
   */
  shadowRadius: number;

  /**
   * Set the shadow offset width of the card view.  ** iOS Only **
   */
  shadowOffsetWidth: number;

  /**
   * Set the shadow offset height of the card view. ** iOS Only **
   */
  shadowOffsetHeight: number;

  /**
   * Set the shadow color of the card view. ** iOS Only **
   */
  shadowColor: string;

  /**
   * Set the shadow opacity of the card view. ** iOS Only **
   */
  shadowOpacity: number;

  /**
   * Gets or set the ripple setting. ** Android Only **
   */
  ripple: boolean;
}
