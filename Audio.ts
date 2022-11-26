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
        // 是否正在播放
        player.isPlaying
        // 暂停
        player.pause();
        // 恢复
        player.resume();
        // 停止
        player.stop();
        // 是否循环播放
        player.loop = true;
        // 音量大小
        player.volume = 1;
});

cc.loader.loadRes("haha", cc.AudioClip, (res, clip)=>{
        // 播放
        let audioId: number = cc.audioEngine.playMusic(clip, true);
        // 是否正在播放
        cc.audioEngine.isMusicPlaying();
        // 暂停
        cc.audioEngine.pause(audioId);
        // 暂停背景音乐，不需要id
        cc.audioEngine.pauseMusic();
        // 恢复
        cc.audioEngine.resume(audioId);
        // 停止
        cc.audioEngine.stop(audioId);
        // 循环
        cc.audioEngine.setLoop(audioId, true);
        // 声音大小
        cc.audioEngine.setVolume(audioId, 1);
})