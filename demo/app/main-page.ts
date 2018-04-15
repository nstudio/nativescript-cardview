import { Demo } from './main-view-model';

function pageLoaded(args) {
  const page = args.object;
  page.bindingContext = new Demo();
}
exports.pageLoaded = pageLoaded;
