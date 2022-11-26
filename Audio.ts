// 音频
// 以组件的方式进行播放

// 用代码的方式进行播放
let player: cc.AudioSource = this.getComponent(cc.AudioSource);
// 加载音频
cc.loader.loadRes("haha", cc.AudioClip, (res, clip)=>{
        // 赋值音频
        player.clip = clip;
        // 播放音频
        player.play();
});