// 动作
// 移动
let action = cc.moveTo(2, 200, 200);
action = cc.moveBy(2, 200, 200);

// 旋转
action = cc.rotateTo(2, 100);

// 缩放
action = cc.scaleTo(2, 1.5, 0.5);

// 跳跃
action = cc.jumpBy(2, 200, 0, 100, 3);

// 闪烁
action = cc.blink(3, 5);

// 淡出
action = cc.fadeOut(3);

// 淡入
action = cc.fadeIn(3);

// 渐变
action = cc.fadeTo(3, 100);

// 颜色
action = cc.tintTo(3, 100, 30, 100);

// 执行动作
this.node.runAction(action);

// 停止动作
this.node.stopAction(action);
this.node.stopAllActions();
this.node.stopActionByTag();

// 暂停动作
this.node.pauseAllActions();

// 恢复动作
this.node.resumeAllActions();