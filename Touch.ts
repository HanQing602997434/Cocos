// �����¼�
this.node.on(cc.Node.EventType.TOUCH_START, function(event){
      console.debug("����" + event.getLocation());
});

// �����Զ����¼�
this.node.on("myevent", function(event){
        console.debug("�Զ����¼�");
        self.node.dispatchEvent(new cc.Event.EventCustom("myevent", true));
});

