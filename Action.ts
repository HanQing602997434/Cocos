// 动作
let action = cc.moveTo(2, 200, 200);

// 执行动作
this.node.runAction(action);

// 停止动作
this.node.stopAction(action);
this.node.stopAllActions();
this.node.stopActionByTag();