// 脚本
脚本必须要挂载到节点上才会执行

//@ccclass
装饰器

//@property
属性装饰器，添加之后可以在面板看到属性

// 脚本生命周期
onLoad()在start之前执行

start()在onLoad之后调用

onEnable()启动时调用

update(dt)每帧调用

lateUpdate()在update之后调用

onDisable()不启用时调用

onDestroy()销毁时调用