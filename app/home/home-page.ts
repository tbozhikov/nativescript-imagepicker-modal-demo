import { Page } from "ui/page";

let mainPage: Page;
let modalPageModule = './modal/modal-page';

export function onPageLoaded(args) {
    mainPage = <Page>args.object;
}

export function onTap(args) {
    mainPage.showModal(modalPageModule, null, function (arg) {
    }, false);
}
