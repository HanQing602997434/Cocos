// ���صڶ�������
cc.director.loadScene("game2", function(){
        // ��ǰ�Ѿ����ص��µĳ�������
})

// Ԥ����
cc.director.preloadScene("game2", function(){
        // ����������ص��ڴ��ˣ����ǻ�û����
        cc.director.loadScene("game2");
});