// Ԥ����
��һ����ɵ�ģ���ϵ��ļ������γ�һ��Ԥ����

// �����ڵ�
let node = cc.Node("new");

// ������
node.addComponent(cc.Sprite);

// Ԥ����
@property(cc.Prefab);
pre : cc.Prefab = null;

// ʵ����Ԥ����
let node = cc.instantiate(this.pre);

// ���ø��ڵ�
node.setParent(this.node); 