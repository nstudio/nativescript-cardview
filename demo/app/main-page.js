var observable = require("data/observable");
var frame = require("ui/frame");
var viewModel = new observable.Observable({});
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = viewModel;
}
exports.pageLoaded = pageLoaded;
function goAway(args) {
    var page = frame.topmost().currentPage;
    var card = page.getViewById('batCard');
    console.log(card);
    card.animate({ 
        scale: { x: 0, y: 0 },
        opacity: 0,
        duration: 1000
    }).then(function () { return card.visibility = 'collapsed'; });
}
exports.goAway = goAway;
function goAwayJoker(args) {
    var page = frame.topmost().currentPage;
    var card = page.getViewById('jokerCard');
    console.log(card);
    card.animate({
        scale: { x: 0, y: 0 },
        opacity: 0,
        duration: 1000
    }).then(function () { return card.visibility = 'collapsed'; });
} 
exports.goAwayJoker = goAwayJoker;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbInBhZ2VMb2FkZWQiLCJnb0F3YXkiXSwibWFwcGluZ3MiOiJBQUFBLElBQU8sVUFBVSxXQUFXLGlCQUFpQixDQUFDLENBQUM7QUFFL0MsSUFBTyxLQUFLLFdBQVcsVUFBVSxDQUFDLENBQUM7QUFFbkMsSUFBSSxTQUFTLEdBQUcsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRTlDLG9CQUEyQixJQUEwQjtJQUNqREEsSUFBSUEsSUFBSUEsR0FBZUEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7SUFDbkNBLElBQUlBLENBQUNBLGNBQWNBLEdBQUdBLFNBQVNBLENBQUNBO0FBQ3BDQSxDQUFDQTtBQUhlLGtCQUFVLGFBR3pCLENBQUE7QUFFRCxnQkFBdUIsSUFBMEI7SUFDN0NDLElBQUlBLElBQUlBLEdBQUdBLEtBQUtBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBLFdBQVdBLENBQUNBO0lBQ3ZDQSxJQUFJQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtJQUV4Q0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFFbEJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBO1FBQ1RBLEtBQUtBLEVBQUVBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBO1FBQ3JCQSxPQUFPQSxFQUFFQSxDQUFDQTtRQUNWQSxRQUFRQSxFQUFFQSxJQUFJQTtLQUNqQkEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsY0FBTUEsT0FBQUEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsV0FBV0EsRUFBN0JBLENBQTZCQSxDQUFDQSxDQUFDQTtBQUVqREEsQ0FBQ0E7QUFaZSxjQUFNLFNBWXJCLENBQUEifQ==