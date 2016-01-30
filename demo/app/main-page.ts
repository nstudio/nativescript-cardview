import observable = require("data/observable");
import pages = require("ui/page");
import card = require("./cardview/cardview");
import btnModule = require("ui/button");
import frame = require("ui/frame");
import app = require("application");

var viewModel = new observable.Observable({});

export function pageLoaded(args: observable.EventData) {
    var page = <pages.Page>args.object;
    var sl = frame.topmost().currentPage.getViewById('stack');
    console.log('sl = ' + sl);
    page.bindingContext = viewModel;
}

export function goAway(args) {
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

export function goAwayJoker(args) {
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

export function cardLoaded(args: observable.EventData) {
    try {
        var card = <card.CardView>args.object;
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

export function getstack(args) {
    var sl = frame.topmost().currentPage.getViewById('stack');
    console.log('sl = ' + sl);
}