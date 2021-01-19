const { ccclass, property } = cc._decorator;

@ccclass
export class Menu extends cc.Component {

    @property({ displayName: "返回按钮", type: cc.Node })
    private backButton: cc.Node = null;

    public onLoad(): void {
        cc.game.addPersistRootNode(this.node);
    }

    public onEnable(): void {
        this.backButton.active = cc.director.getScene().name != 'menu';
    }

    private clickBack(): void {
        cc.director.loadScene('menu');
    }

}