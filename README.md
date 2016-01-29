# NativeScript CardView :credit_card:

A NativeScript plugin to provide an XML widget to implement the CardView in an Android app. This is currently Android only. If someone wants to contribute the iOS version, I've found a cocoapod that would be perfect. https://cocoapods.org/pods/MaterialCardView

#### [Material Design Spec](https://www.google.com/design/spec/components/cards.html)
#### [CardView Android Documentation](http://developer.android.com/intl/zh-tw/reference/android/support/v7/widget/CardView.html) 

## Installation
`npm install nativescript-cardview`

## Usage

###
```XML
<Page xmlns:Card="nativescript-cardview">
   <StackLayout>     
      <Card:CardView margin="10">
           <grid-layout rows="200, auto, auto" columns="auto, auto, *">
               <image src="~/images/batman.jpg" stretch="aspectFill" colSpan="3" row="0" />
               <label text="Batman wants to be friends?" class="info" textWrap="true" row="1" colSpan="3" />          
               <button text="DECLINE" tap="goAway" class="clear-btn blue" row="2" col="0" />
               <button text="ACCEPT" class="clear-btn blue" row="2" col="1" />
           </grid-layout>
       </Card:CardView>
   </StackLayout>
</Page>
```

## Attributes
**elevation** *optional*

 An attribute to set the elevation of the card. This will increase the 'drop-shadow' of the card.
There can be some performance impact when using a very high elevation value.

**radius** *optional*

An attribute to control the 'border-radius' of the card.

**backgroundColor** *optional*

This uses the internal backgroundColor stying provided by NativeScript, but I wanted to point out that if you apply this
you will lose any elevation and radius property set. This could be enhanced in the future to override the NativeScript styling
to use the native method available on the CardView component.


## Sample Screenshots

Sample 1 |  Sample 2
-------- | ---------
![Sample1](sample_card1.png) | ![Sample2](sample_card2.png)

Sample 3 | Sample 4
-------- | -------
![Sample3](sample_card3.png) | ![Sample4](sample_card4.png)


#### Contributors
[NathanaelA](https://github.com/NathanaelA)
