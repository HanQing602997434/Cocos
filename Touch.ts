// 触摸事件
this.node.on(cc.Node.EventType.TOUCH_START, function(event){
      console.debug("触摸" + event.getLocation());
});

// 监听自定义事件
this.node.on("myevent", function(event){
        console.debug("自定义事件");
        self.node.dispatchEvent(new cc.Event.EventCustom("myevent", true));
});

