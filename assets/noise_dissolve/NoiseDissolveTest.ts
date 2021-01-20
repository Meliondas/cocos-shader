const { ccclass, property } = cc._decorator;

@ccclass
export class NoiseDissolveTest extends cc.Component {

    @property({ displayName: "消融图片", type: cc.Sprite })
    private blurSprite: cc.Sprite = null;

    @property({ displayName: "溶解速度", type: cc.Float })
    private speed: number = 0.1;

    private _switch: boolean = false;

    private _dissovle: number = 0;

    private _dir: number = 1;

    private clickSwitch(toggle: cc.Toggle): void {
        this._switch = toggle.isChecked;
    }

    public update(dt: number): void {
        if (!this._switch) {
            return;
        }

        const materail = this.blurSprite.getMaterial(0);
        materail.setProperty('dissolve', this._dissovle);

        this._dissovle += this._dir * dt * this.speed;
        if (this._dissovle > 1 || this._dissovle < 0) {
            this._dissovle = this._dissovle > 1 ? 1 : 0;
            this._dir = -this._dir;
        }
    }

}