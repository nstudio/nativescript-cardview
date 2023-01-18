## Source management moved to [nstudio/nativescript-plugins](https://github.com/nstudio/nativescript-plugins/tree/main/packages/nativescript-cardview)
<hr/>
<a align="center" href="https://www.npmjs.com/package/@nstudio/nativescript-cardview">
    <h3 align="center">NativeScript CardView</h3>
</a>
<h4 align="center">A NativeScript plugin to provide an XML widget to implement the Material Design CardView component.</h4>

<p align="center">
    <a href="https://www.npmjs.com/package/@nstudio/nativescript-cardview">
        <img src="https://img.shields.io/npm/v/@nstudio/nativescript-cardview.svg" alt="npm">
    </a>
    <a href="https://www.npmjs.com/package/@nstudio/nativescript-cardview">
        <img src="https://img.shields.io/npm/dt/@nstudio/nativescript-cardview.svg?label=npm%20downloads" alt="npm">
    </a>
</p>

---

## Installation

NativeScript 7+:

```bash
ns plugin add @nstudio/nativescript-cardview
```

NativeScript prior to 7:

```bash
tns plugin add @nstudio/nativescript-cardview@1.0.0
```

---

##### [Material Design Card Spec](https://www.google.com/design/spec/components/cards.html)

##### [CardView Android Documentation](http://developer.android.com/intl/zh-tw/reference/android/support/v7/widget/CardView.html)

## Usage

_iOS note: Setting a background-color will help if you do not see the card on the page._

### NativeScript Plain

<span style="color:red">IMPORTANT: </span>_Make sure you include `xmlns:Card="@nstudio/nativescript-cardview"` on the Page element_

#### XML

```xml
<Page xmlns:Card="@nstudio/nativescript-cardview">
   <StackLayout>
      <Card:CardView class="cardStyle" margin="10" elevation="40" radius="5">
           <grid-layout rows="200, auto, auto" columns="auto, auto, *">
               <image src="~/images/batman.jpg" stretch="aspectFill" colSpan="3" row="0" />
               <label text="Batman wants to be friends?" class="info" textWrap="true" row="1" colSpan="3" />
               <button text="DECLINE" tap="goAway" row="2" col="0" />
               <button text="ACCEPT" row="2" col="1" />
           </grid-layout>
       </Card:CardView>
   </StackLayout>
</Page>
```

#### CSS

```css
.cardStyle {
  background-color: #3489db;
  color: #fff;
}
```

---

### NativeScript Angular

```typescript
import { registerElement } from '@nativescript/angular';
import { CardView } from '@nstudio/nativescript-cardview';
registerElement('CardView', () => CardView);
```

```html
<CardView class="cardStyle" margin="10" elevation="40" radius="1">
  <GridLayout rows="10,30,30,250, auto, auto,10" columns="10,40, *, 30,10">
    <image
      src="res://profile"
      stretch="aspectFit"
      verticalAlignment="stretch"
      col="1"
      row="1"
      rowSpan="2"
    ></image>
    <label
      class="createdBy text-left"
      horizontalAlignment="left"
      [text]="item.CreatedBy"
      row="1"
      col="2"
      textWrap="true"
    ></label>
    <label
      class="createdOn text-left"
      horizontalAlignment="left"
      [text]="item.UpdatedDate"
      row="2"
      col="2"
    ></label>
    <image
      [src]="'https://img.youtube.com/vi/'+item.MediaURL+'/mqdefault.jpg'"
      stretch="aspectFit"
      colSpan="3"
      col="1"
      row="3"
    ></image>
    <label
      horizontalAlignment="left"
      [text]="item.Title"
      colSpan="3"
      row="4"
      textWrap="true"
      col="1"
    ></label>
    <label
      horizontalAlignment="left"
      [text]="item.Summary"
      textWrap="true"
      col="1"
      row="5"
      colSpan="3"
    ></label>
  </GridLayout>
</CardView>
```

---

### NativeScript Vue

```javascript
import Vue from 'nativescript-vue';
Vue.registerElement(
  'CardView',
  () => require('@nstudio/nativescript-cardview').CardView
);
```

```html
<card-view margin="10" elevation="40" radius="1">
  <stack-layout>
    <label text="Hello World"></label>
  </stack-layout>
</card-view>
```

---

### Attributes

- **radius** _optional_

An attribute to control the 'border-radius' of the card.

### Platform specific options

#### Android

- **elevation** _optional_

An attribute to set the elevation of the card. This will increase the 'drop-shadow' of the card.
There can be some performance impact when using a very high elevation value.

- **ripple** _optional_

Set to 'true' to show a ripple when the card is tapped. Tap event handlers in the card content will prevent the ripple.

#### iOS

- **shadowOffsetWidth** _optional_

An attribute to offset the x position of the shadow behind the card.

- **shadowOffsetHeight** _optional_

An attribute to offset the y position of the shadow behind the card.

- **shadowColor** _optional_

An attribute to set the color of the shadow behind the card.

- **shadowOpacity** _optional_

An attribute to set the opacity of the shadow behind the card.

- **shadowRadius** _optional_

An attribute to set the radius of the shadow (shadow spread) behind the card.

The default values are set to:

```
radius = 2;
shadowOffsetWidth = 0;
shadowOffsetHeight = 2;
shadowColor = new Color('#000').ios
shadowOpacity = 0.4;
shadowRadius = 1;
```

### Sample Screenshots

#### Android

| Sample 1                            | Sample 2                            |
| ----------------------------------- | ----------------------------------- |
| ![Sample1](images/sample_card1.png) | ![Sample2](images/sample_card2.png) |

#### iOS

| Sample 1                                | Sample 2                                |
| --------------------------------------- | --------------------------------------- |
| ![Sample1](images/sample_card1_ios.png) | ![Sample2](images/sample_card3_ios.png) |

## Run Demo

```bash
git clone https://github.com/nstudio/nativescript-cardview.git

npm run demo.ios

// or...

npm run demo.android
```

## [Changelog](./CHANGELOG.md)

## [Contributing](./CONTRIBUTING.md)
