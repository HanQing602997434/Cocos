// 节点

// 获取子节点
this.node.children[0];子节点数组
this.node.getChildrenByName("abd");
cc.find("Canvas/Main Camera");

// 获取父节点
this.node.getParent();
this.node.setParent(ddd);

// 移除子节点
this.node.removeAllChildren();

// 移动到某个子节点
this.node.removeChild(ddd);

// 从父节点移除掉
this.node.removeFromParent();

// 访问位置
this.node.x
this.node.y
this.node.setPosition(3, 4);
this.node.setPosition(cc.v2(3, 4));

// 旋转
this.node.rotation

// 缩放
this.node.scale

// 锚点
this.node.anchorX

// 颜色
this.node.color = cc.Color.RED;

// 节点开关
this.node.active = false;

// 组件开关
this.Enable = false;

// 获取组件
let sprite = this.getComponent(cc.Sprite);
sprite.enabled = false;
this.getComponentInChildren(cc.Sprite);