// ����
// �ƶ�
let action = cc.moveTo(2, 200, 200);
action = cc.moveBy(2, 200, 200);

// ��ת
action = cc.rotateTo(2, 100);

// ����
action = cc.scaleTo(2, 1.5, 0.5);

// ��Ծ
action = cc.jumpBy(2, 200, 0, 100, 3);

// ��˸
action = cc.blink(3, 5);

// ����
action = cc.fadeOut(3);

// ����
action = cc.fadeIn(3);

// ����
action = cc.fadeTo(3, 100);

// ��ɫ
action = cc.tintTo(3, 100, 30, 100);

// ִ�ж���
this.node.runAction(action);

// ֹͣ����
this.node.stopAction(action);
this.node.stopAllActions();
this.node.stopActionByTag();

// ��ͣ����
this.node.pauseAllActions();

// �ָ�����
this.node.resumeAllActions();