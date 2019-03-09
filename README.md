<a align="center" href="https://www.npmjs.com/package/nativescript-cardview">
    <h3 align="center">NativeScript CardView</h3>
</a>
<h4 align="center">A NativeScript plugin to provide an XML widget to implement the Material Design CardView component.</h4>

<p align="center">
    <a href="https://www.npmjs.com/package/nativescript-cardview">
        <img src="https://img.shields.io/npm/v/nativescript-cardview.svg" alt="npm">
    </a>
    <a href="https://www.npmjs.com/package/nativescript-cardview">
        <img src="https://img.shields.io/npm/dt/nativescript-cardview.svg?label=npm%20downloads" alt="npm">
    </a>
    <a href="https://github.com/bradmartin/nativescript-cardview/stargazers">
        <img src="https://img.shields.io/github/stars/bradmartin/nativescript-cardview.svg" alt="stars">
    </a>
      <a href="https://travis-ci.org/bradmartin/nativescript-cardview">
        <img src="https://travis-ci.org/bradmartin/nativescript-cardview.svg?branch=master" alt="build status">
    </a>
    <a href="https://paypal.me/bradwayne88">
        <img src="https://img.shields.io/badge/Donate-PayPal-green.svg" alt="donate">
    </a>
    <br />
    <a href="http://nstudio.io">
      <img src="./images/nstudio-banner.png" alt="nStudio banner">
    </a>
    <h5 align="center">Do you need assistance on your project or plugin? Contact the nStudio team anytime at <a href="mailto:team@nstudio.io">team@nstudio.io</a> to get up to speed with the best practices in mobile and web app development.
    </h5>
</p>

---

## Installation

`tns plugin add nativescript-cardview`

Be sure to run a new build after adding plugins to avoid any issues. Here is a post with some details: [Plugin Not Working after adding to project.](https://bradmartin.net/2016/07/20/ahhh-this-nativescript-plugin-doesnt-work)

---

##### [Material Design Card Spec](https://www.google.com/design/spec/components/cards.html)

##### [CardView Android Documentation](http://developer.android.com/intl/zh-tw/reference/android/support/v7/widget/CardView.html)

## Usage

_iOS note: Setting a background-color will help if you do not see the card on the page._

### NativeScript Plain

<span style="color:red">IMPORTANT: </span>_Make sure you include `xmlns:Card="nativescript-cardview"` on the Page element_

#### XML

```xml
<Page xmlns:Card="nativescript-cardview">
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
import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from 'nativescript-cardview';
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
  () => require('nativescript-cardview').CardView
);
```

```html
<card-view margin="10" elevation="40" radius="1">
  <stack-layout>
    <label text="Hello World" />
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

#### Contributors

| [<img alt="bradmartin" src="https://avatars3.githubusercontent.com/u/6006148?v=3&s=117" width="117">](https://github.com/bradmartin) | [<img alt="NathanWalker" src="https://avatars1.githubusercontent.com/u/457187?v=3&s=117" width="117">](https://github.com/NathanWalker) | [<img alt="manijak" src="https://avatars3.githubusercontent.com/u/3605066?v=3&s=117" width="117">](https://github.com/manijak) | [<img alt="NathanaelA" src="https://avatars0.githubusercontent.com/u/850871?v=3&s=117" width="117">](https://github.com/NathanaelA) | [<img alt="EddyVerbruggen" src="https://avatars2.githubusercontent.com/u/1426370?v=3&s=117" width="117">](https://github.com/EddyVerbruggen) | [<img alt="sis0k0" src="https://avatars1.githubusercontent.com/u/7893485?v=3&s=117" width="117">](https://github.com/sis0k0) |
| :----------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: |
|                                             [bradmartin](https://github.com/bradmartin)                                              |                                             [NathanWalker](https://github.com/NathanWalker)                                             |                                             [manijak](https://github.com/manijak)                                              |                                             [NathanaelA](https://github.com/NathanaelA)                                             |                                             [EddyVerbruggen](https://github.com/EddyVerbruggen)                                              |                                             [sis0k0](https://github.com/sis0k0)                                              |

| [<img alt="vladimirnani" src="https://avatars0.githubusercontent.com/u/3397077?v=3&s=117" width="117">](https://github.com/vladimirnani) | [<img alt="DickSmith" src="https://avatars0.githubusercontent.com/u/6675511?v=3&s=117" width="117">](https://github.com/DickSmith) | [<img alt="JoffTiquez" src="https://avatars0.githubusercontent.com/u/8638243?v=3&s=117" width="117">](https://github.com/jofftiquez) |
| :--------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: |
|                                             [vladimirnani](https://github.com/vladimirnani)                                              |                                             [DickSmith](https://github.com/DickSmith)                                              |                                          [Jofferson Tiquez](https://github.com/jofftiquez)                                           |
