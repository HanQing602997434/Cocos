// cc类装饰器
@ccclass
没有类装饰器的类无法作为组件添加到节点上

// 组件类装饰器
此装饰器只能用来装饰Component的子类
@executeInEditMode

// 属性装饰器
@property
属性装饰器property可以被应用在cc类的属性或访问器上。
如果不是基本类型则后面需要带(类型)，例如@property(cc.Label)