// 预设体
将一个完成的模型拖到文件夹中形成一个预设体

// 创建节点
let node = cc.Node("new");

// 添加组件
node.addComponent(cc.Sprite);

// 预设体
@property(cc.Prefab);
pre : cc.Prefab = null;

// 实例化预设体
let node = cc.instantiate(this.pre);

// 设置父节点
node.setParent(this.node); 