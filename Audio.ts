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
});