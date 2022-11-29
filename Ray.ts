// 射线
let results = cc.director.getPhysicsManager().rayCast(this.node.getPosition(), cc.v2(this.node.x, this.node.y + 100), cc.Ray)

// 射线碰到的碰撞器
res.collider

// 碰到的点
res.point

// 碰到的法线
res.normal