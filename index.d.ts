import { ContentView } from 'ui/content-view';
/**
 * Contains the CardView class, which represents a card view component.
 */

export declare class CardView extends ContentView {

    /**
      * Gets the native [android widget](https://developer.android.com/reference/android/support/v7/widget/CardView.html) that represents the user interface for this component. Valid only when running on Android OS.
      */
    android: any /* android.support.v7.widget.CardView */;

    /**
     * Gets the native [ios widget](https://github.com/NathanWalker/MaterialCard) that represents the user interface for this component. Valid only when running on iOS.
     */
    ios: any /* MaterialCard */;

    /**
    * Gets or set the radius of the card view.
    */
    radius: any;

    /** 
     * Gets or set the elevation of the card view.  ** Valid only when running on Android OS **
     */
    elevation: number;

    /**
     * Set the shadow offset height of the card view. ** Valid only when running on iOS **
     */
    shadowOffsetWidth: string;


    /**
     * Set the shadow offset height of the card view. ** Valid only when running on iOS **
     */
    shadowOffsetHeight: string;

    /**
     * Set the shadow color of the card view. ** Valid only when running on iOS **
     */
    shadowColor: string;

    /**
     * Set the shadow opacity of the card view. ** Valid only when running on iOS **
     */
    shadowOpacity: string;

}

