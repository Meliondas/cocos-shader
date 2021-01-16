const { ccclass, property } = cc._decorator;

@ccclass
export class MasaicTest extends cc.Component {

    @property({ displayName: "图片", type: cc.Sprite })
    private sprite: cc.Sprite = null;

    private _material: cc.Material = null;

    public start(): void {
        this._material = this.sprite.getMaterial(0);
    }

    private toggleMasaic(toggle: cc.Toggle): void {
        this._material.define("USE_MASAIC", toggle.isChecked, 0, true)
    }

    private refreshSlider(slider: cc.Slider, type: 'x' | 'y'): void {
        this._material.setProperty(`${type}_count`, Math.floor(slider.progress * 100));
    }

}