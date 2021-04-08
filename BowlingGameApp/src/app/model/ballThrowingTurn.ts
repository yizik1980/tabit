export default class ballThrowingTurn {
    constructor() {
      //  this.shot = s;
    }
    isSet = false;
    private Shot: number;
    public get shot(): number {
        return this.Shot;
    }
    public set shot(s: number) {
        this.isSet = true;
        this.Shot = s <= 10 || s >= 0 ? s : 0;
    }

}