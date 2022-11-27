物理系统需要开启

场景节点需要添加组件

比如刚体，盒体碰撞

物体想要有物理，先加上刚体组件

// 获取刚体
let rbody = this.getComponent(cc.RigidBody);

// 力
rbody.applyForce(cc.v2(1000, 0), cc.v2(0, 0), true);
rbody.applyForceToCenter(cc.v2(5000, 0), true);