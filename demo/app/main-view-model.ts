import {Observable, EventData} from 'data/observable';
import * as frame from 'ui/frame';
import * as app from 'application';

export class Demo extends Observable {

  constructor() {
    super();
  }

  public goAway(args) {
    var page = frame.topmost().currentPage;
    var card = page.getViewById('batCard');
    console.log(card);
    card.animate({
      scale: { x: 0, y: 0 },
      opacity: 0,
      duration: 1000
    }).then(() => {
      card.visibility = 'collapsed';
    });
  }

  public goAwayJoker(args) {
    var page = frame.topmost().currentPage;
    var card = page.getViewById('jokerCard');
    console.log(card);
    card.animate({
      scale: { x: 0, y: 0 },
      opacity: 0,
      duration: 1000
    }).then(() => {
      card.visibility = 'collapsed';
    });
  }

  public cardLoaded(args: EventData) {
    try {
      var card = args.object;
      console.log('card = ' + card);
      //console.log('card id = ' + card.id);
      if (app.android) {
        var androidCard = card.android;
        console.log('card native android = ' + androidCard);
        //console.log('radius = ' + card.radius);
        //console.log('elevation = ' + card.elevation);
        //console.log('padding = ' + card.padding);
        //console.log('card background = ' + card.backgroundColor.android);  
        //var btn = new android.widget.Button(app.android.currentContext);
        //btn.setText('Hello Baby!'); 
        //androidCard.addView(btn);
      } else if (app.ios) {
        var iosCard = card.ios;
        console.log('card native ios = ' + iosCard);
        console.log(iosCard);
      }

      // var sl = frame.topmost().currentPage.getViewById('stack');
      // console.log('sl = ' + sl);

    } catch (error) {
      console.log(error);
    }
  }

}

