// �����¼�
this.node.on(cc.Node.EventType.MOUSE_DOWN, function(event){
      if (event.getButton() == cc.Event.EventMouse.BUTTON_RIGHT){
              console.debug("�Ҽ�");
      }
      if (event.getButton() == cc.Event.EventMouse.BUTTON_LEFT){
              console.debug("���");
      }
});

cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function(event){
      if (event.keyCode == cc.macro.KEY.w){
            console.debug("w");
      }
      if (event.keyCode == cc.macro.KEY.s){
            console.debug("s");
      }
})