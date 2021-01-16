const { ccclass, property } = cc._decorator;

@ccclass
export class TransitionTexTest extends cc.Component {

    @property({ displayName: "图集", type: [cc.Node] })
    private bgList: cc.Node[] = [];

    @property({ displayName: "渐变半径", type: cc.Float })
    private fadeRadius: number = 0.1;

    // 是否正在渐变中
    private _isTransition: boolean = false;

    public start(): void {
        this.orderList();
    }

    private clickTransition(): void {
        if(this._isTransition) {
            console.error('渐变中...');
            return;
        }

        this._isTransition = true;
        let time = 0;
        const node = this.bgList.shift();
        this.bgList.push(node);
        console.error(this.bgList);
        const materail = node.getComponent(cc.Sprite).getMaterial(0);
        materail.setProperty('fade_radius', this.fadeRadius);
        materail.setProperty('u_time', time);
        materail.define('USE_TRASITION', true, 0, true);

        const interval = setInterval(() => {
            time += 0.03;
            materail.setProperty('u_time', time);
            if (time > 1.0 + this.fadeRadius) {
                this._isTransition = false;
                this.orderList();
                materail.setProperty('u_time', 0.0);
                materail.define('USE_TRASITION', false, 0, true);
                interval && clearInterval(interval);
            }
        }, 30);
    }

    private orderList(): void {
        this.bgList.forEach((node: cc.Node, index: number) => {
            node.zIndex = this.bgList.length - index;
        });
    }

}