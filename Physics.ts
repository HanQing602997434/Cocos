����ϵͳ��Ҫ����

�����ڵ���Ҫ������

������壬������ײ

������Ҫ�������ȼ��ϸ������

// ��ȡ����
let rbody = this.getComponent(cc.RigidBody);

// ��
rbody.applyForce(cc.v2(1000, 0), cc.v2(0, 0), true);
rbody.applyForceToCenter(cc.v2(5000, 0), true);

// �õ���ײ��
let points = contact.getWorldManifold().points;

// ����
let normal = contact.getWorldManifold().normal;