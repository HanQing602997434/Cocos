// ��Ƶ
// ������ķ�ʽ���в���

// �ô���ķ�ʽ���в���
let player: cc.AudioSource = this.getComponent(cc.AudioSource);
// ������Ƶ
cc.loader.loadRes("haha", cc.AudioClip, (res, clip)=>{
        // ��ֵ��Ƶ
        player.clip = clip;
        // ������Ƶ
        player.play();
        // �Ƿ����ڲ���
        player.isPlaying
        // ��ͣ
        player.pause();
        // �ָ�
        player.resume();
        // ֹͣ
        player.stop();
        // �Ƿ�ѭ������
        player.loop = true;
        // ������С
        player.volume = 1;
});

cc.loader.loadRes("haha", cc.AudioClip, (res, clip)=>{
        // ����
        let audioId: number = cc.audioEngine.playMusic(clip, true);
        // �Ƿ����ڲ���
        cc.audioEngine.isMusicPlaying();
        // ��ͣ
        cc.audioEngine.pause(audioId);
        // ��ͣ�������֣�����Ҫid
        cc.audioEngine.pauseMusic();
        // �ָ�
        cc.audioEngine.resume(audioId);
        // ֹͣ
        cc.audioEngine.stop(audioId);
        // ѭ��
        cc.audioEngine.setLoop(audioId, true);
        // ������С
        cc.audioEngine.setVolume(audioId, 1);
})