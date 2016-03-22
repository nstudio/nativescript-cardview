/**
 * Contains the CardView class, which represents a FrameLayout with a rounded corner background and shadow.
 */
declare module "cardview" {
  import view = require("ui/core/view");
     
  /**
   * Represents a standard CardView widget.
   */
  export class CardView extends view.View implements view.AddChildFromBuilder {
       
    /**
     * Gets the native [android widget](http://developer.android.com/reference/android/support/v7/widget/CardView.html) that represents the user interface for this component. Valid only when running on Android OS.
     */
    android: any; /* android.support.v7.widget.CardView */
     
    /**
    * Gets the native [ios widget](https://github.com/NathanWalker/MaterialCard) that represents the user interface for this component. Valid only when running on iOS.
    */
    ios: any; /* MaterialCard */

    /**
    * Called for every child element declared in xml.
    * This method will add a child element (value) to current element.
    * @param name - Name of the element.
    * @param value - Value of the element.
    */
    _addChildFromBuilder(name: string, value: any): void;
  }
}