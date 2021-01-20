const { ccclass, property } = cc._decorator;

@ccclass
export class SearchLight extends cc.Component {

    @property({ displayName: "探照光图片", type: cc.Sprite })
    private sprite: cc.Sprite = null;

    private _material: cc.Material = null;

    public start(): void {
        this._material = this.sprite.getMaterial(0);
    }

    public onEnable(): void {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
    }

    public onDisable(): void {
        this.node.off(cc.Node.EventType.TOUCH_START);
        this.node.off(cc.Node.EventType.TOUCH_MOVE);
    }

    private touchStart(event: cc.Event.EventTouch): void {
        const pos = event.getLocation();
        this._material && this._material.setProperty('u_mouse', pos);
    }

    private touchMove(event: cc.Event.EventTouch): void {
        const pos = event.getLocation();
        this._material && this._material.setProperty('u_mouse', pos);
    }

}