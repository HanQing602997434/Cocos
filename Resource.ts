// 资源动态加载
创建文件夹resources

// 加载
let self = this;
cc.loader.loadRes("land",  cc.SpriteFrame, function(err, sp){
        this.getComponent(cc.Sprite).spriteFrame = sp;
});

cc.loader.loadRes("test/1", cc.SpriteAtlas, function(err, atlas: cc.SpriteAtlas){
        self.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("bg_day");
})