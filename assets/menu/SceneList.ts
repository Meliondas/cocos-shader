const {ccclass, property} = cc._decorator;

@ccclass
export class SceneList extends cc.Component {

    private clickScene(event: cc.Event, msg: string): void {
        cc.director.loadScene(msg)
    }

}