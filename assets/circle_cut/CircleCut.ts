/*
 * @Author: FeiFan Chen 
 * @Date: 2021-01-16 10:12:57 
 * @Last Modified by: FeiFan Chen
 * @Last Modified time: 2021-01-16 11:04:24
 */
const { ccclass, property } = cc._decorator;

@ccclass
export class CricleAvatar extends cc.Component {

    @property({ displayName: "圆角裁剪的图片", type: cc.Sprite })
    private cutSprite: cc.Sprite = null;

    public start(): void {
        const node = this.cutSprite.node;
        const ratio = node.width / node.height;
        this.cutSprite.getMaterial(0).setProperty('ratio', ratio);
    }

}