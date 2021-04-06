export default class ballThrowingTurn {
    constructor(s:number) {
        this.shot = s;
    }

    private Shot: number;
    public get shot(): number {
        return this.Shot;
    }
    public set shot(s: number) {
        this.Shot = s <= 10 || s >= 0 ? s : 0;
    }



}