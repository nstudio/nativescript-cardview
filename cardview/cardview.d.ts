/**
 * Contains the CardView class, which represents a FrameLayout with a rounded corner background and shadow.
 */
declare module "cardview" {
    import {LayoutBase} from "ui/layouts/layout-base";
    import {View} from "ui/core/view";
     
    /**
     * Represents a standard CardView widget.
     */
    class CardView extends View {

        /**
         * Gets the native [android widget](http://developer.android.com/reference/android/support/v7/widget/CardView.html) that represents the user interface for this component. Valid only when running on Android OS.
         */
        android: android.support.v7.widget.CardView /* android.support.v7.widget.CardView */;

        /**
         * Gets or sets the border radius of the CardView instance.
         */
        radius: number;       

        /**
         * Gets or sets the backward compatible elevation of the CardView.
         */
        elevation: number;

        /**
        * Called for every child element declared in xml.
        * This method will add a child element (value) to current element.
        * @param name - Name of the element.
        * @param value - Value of the element.
        */
        _addChildFromBuilder(name: string, value: any): void;
    }
}