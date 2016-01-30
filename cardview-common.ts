import definition = require("cardview");
import contentView = require("ui/content-view");

export class CardView extends contentView.ContentView implements definition.CardView {

  constructor() {
    super();
  }

  get android(): any {
    return;
  }

  get ios(): any {
    return;
  }
}