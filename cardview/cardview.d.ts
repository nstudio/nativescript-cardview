/**
 * Contains the CardView class, which represents a FrameLayout with a rounded corner background and shadow.
 */
declare module "ui/cardview" {
    import observable = require("data/observable");
    import dependencyObservable = require("ui/core/dependency-observable");
    import view = require("ui/core/view");

    /**
     * Represents a standard CardView widget.
     */
    export class CardView extends view.View implements view.AddChildFromBuilder {

        /**
         * Gets the native [android widget](http://developer.android.com/reference/android/support/v7/widget/CardView.html) that represents the user interface for this component. Valid only when running on Android OS.
         */
        android: any /* android.support.v7.widget.CardView */;

        /**
        * Gets or Sets the background color of the CardView.
        */
        backgroundColor: string;

        /**
         * Gets or sets the border radius of the CardView instance.
         */
        radius: number;       

        /**
         * Gets or sets the backward compatible elevation of the CardView.
         */
        elevation: number;

        /**
         * Gets or Sets the padding between the Card's edges and the children of CardView.
         */
        contentPadding: number;

        /**
         * Gets or Sets the padding.
         */
        padding: number;

        /**
         * Called for every child element declared in xml.
         * This method will add a child element (value) to current element.
         * @param name - Name of the element.
         * @param value - Value of the element.
         */
        _addChildFromBuilder(name: string, value: any): void;
    }
}