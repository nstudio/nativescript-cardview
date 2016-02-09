## Developing

### Setup

```
npm install typescript -g
npm install
npm run build  // you will see TypeScript warnings; you can ignore them
cd demo
npm install
tns platform add android
tns platform add ios

tns run android
// or...
tns run ios
```

## Submitting Pull Requests

**Please follow these basic steps to simplify pull request reviews - if you don't you'll probably just be asked to anyway.**

* Please rebase your branch against the current master
* Make reference to possible [issues](https://github.com/bradmartin/nativescript-cardview/issues) on PR comment

## Submitting bug reports

* Please detail the affected platform and version
* Please be sure to state which version of node, npm, and NativeScript you're using