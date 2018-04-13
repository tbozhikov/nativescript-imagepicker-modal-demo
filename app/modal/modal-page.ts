import { Page } from "ui/page";
import * as pages from "tns-core-modules/ui/page";
import * as imagepicker from "nativescript-imagepicker";

let thisModalPage: Page;

export function onPickImageTap() {
    this.isSingleMode = true;
    let context = imagepicker.create({ mode: "single" }, thisModalPage);

    context
        .authorize()
        .then(() => {
            return context.present();
        })
        .then((selection) => {
            console.log("Image picked: " + JSON.stringify(selection));
        }).catch(function (e) {
            console.log(e);
        });
}

export function onShownModally(args: pages.ShownModallyData) {
    let page = <Page>args.object;
   
    thisModalPage = page;
}

function startSelection(context) {
    context
        .authorize()
        .then(() => {
            return context.present();
        })
        .then((selection) => {
            console.log("Image picked: " + JSON.stringify(selection));
        }).catch(function (e) {
            console.log(e);
        });
}