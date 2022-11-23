// ÊäÈëÊÂ¼þ
this.node.on(cc.Node.EventType.MOUSE_DOWN, function(event){
      if (event.getButton() == cc.Event.EventMouse.BUTTON_RIGHT){
              console.debug("ÓÒ¼ü");
      }
      if (event.getButton() == cc.Event.EventMouse.BUTTON_LEFT){
              console.debug("×ó¼ü");
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