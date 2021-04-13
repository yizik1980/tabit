export class DialogData {
    constructor(arg?) {
        this.show = true;
        this.componentName = arg.componentName || '';
        this.title = arg.title || '';
        this.innerTitle = arg.innerTitle || '';
        this.text = arg.text || '';
        this.placeholder = arg.placeHolder || '';
    }
    componentName:string;
    title: string;
    text: string;
    show: boolean;
    placeholder: string;
    innerTitle: string;
    callBackDialog: any;
    dynamicObject:unknown;
    close() {
        this.show = false;
    }
}
