// �ڵ�

// ��ȡ�ӽڵ�
this.node.children[0];�ӽڵ�����
this.node.getChildrenByName("abd");
cc.find("Canvas/Main Camera");

// ��ȡ���ڵ�
this.node.getParent();
this.node.setParent(ddd);

// �Ƴ��ӽڵ�
this.node.removeAllChildren();

// �ƶ���ĳ���ӽڵ�
this.node.removeChild(ddd);

// �Ӹ��ڵ��Ƴ���
this.node.removeFromParent();

// ����λ��
this.node.x
this.node.y
this.node.setPosition(3, 4);
this.node.setPosition(cc.v2(3, 4));

// ��ת
this.node.rotation

// ����
this.node.scale

// ê��
this.node.anchorX

// ��ɫ
this.node.color = cc.Color.RED;

// �ڵ㿪��
this.node.active = false;

// �������
this.Enable = false;

// ��ȡ���
let sprite = this.getComponent(cc.Sprite);
sprite.enabled = false;
this.getComponentInChildren(cc.Sprite);