const { ccclass, property } = cc._decorator;

@ccclass
export class Loading extends cc.Component {

    @property({ displayName: "加载中图片", type: cc.Sprite })
    private loadingSprite: cc.Sprite = null;

    public start(): void {
        const canvas = cc.Canvas.instance;
        const materail = this.loadingSprite.getMaterial(0);
        materail.setProperty("u_resolution", new cc.Vec2(canvas.node.width, canvas.node.height));
    }

}