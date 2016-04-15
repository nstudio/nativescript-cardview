import * as app from 'application';
import {Color} from 'color';
import * as platform from 'platform';
import {Demo} from "./main-view-model";

function pageLoaded(args) {
  var page = args.object;
  page.bindingContext = new Demo();
}
exports.pageLoaded = pageLoaded;