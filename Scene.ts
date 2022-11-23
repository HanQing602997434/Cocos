// 加载第二个场景
cc.director.loadScene("game2", function(){
        // 当前已经加载到新的场景里了
})

// 预加载
cc.director.preloadScene("game2", function(){
        // 这个场景加载到内存了，但是还没有用
        cc.director.loadScene("game2");
});