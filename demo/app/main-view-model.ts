import * as frame from 'ui/frame';
import * as app from 'application';
import { Observable, EventData } from 'data/observable';
import { isAndroid, isIOS } from "platform";
import { CardView } from 'nativescript-cardview';

export class Demo extends Observable {

  constructor() {
    super();
  }

  public goAway(args) {
    let page = frame.topmost().currentPage;
    let card = <CardView>page.getViewById('batCard');
    card.animate({
      scale: { x: 0, y: 0 },
      opacity: 0,
      duration: 1000
    }).then(() => {
      card.visibility = 'collapsed';
    });
  }

  public goAwayJoker(args) {
    let page = frame.topmost().currentPage;
    let card = page.getViewById('jokerCard');
    card.animate({
      scale: { x: 0, y: 0 },
      opacity: 0,
      duration: 1000
    }).then(() => {
      card.visibility = 'collapsed';
    });
  }

  public cardLoaded(args: EventData) {
    let card = <CardView>args.object;
    console.log('card = ' + card);
    if (isAndroid) {
      console.log('card native android = ' + card.android);
    } else if (isIOS) {
      console.log('card native ios = ' + card.ios);
    }
  }

}

