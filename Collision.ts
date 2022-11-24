// 碰撞

//碰撞产生
onCollisionEnter(other, self){
        console.debug("碰撞发生" + other.tag);
}

// 碰撞持续
onCollisionStay(other){
        console.debug("碰撞持续");
}

// 碰撞结束
onCollisionExit(other){
        console.debug("碰撞结束");
}