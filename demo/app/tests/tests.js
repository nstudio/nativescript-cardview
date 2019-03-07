describe('imagefilters class', function() {
  it('can be instantiated', function() {
    var testCardView;
    var CardView = require('nativescript-cardview').CardView;
    if (CardView) {
      testCardView = new CardView();
      console.log('CardView instance: ' + testCardView);
    }

    expect(function() {
      return new CardView();
    }).not.toThrow();

    expect(new CardView()).toBeDefined();
  });
});
