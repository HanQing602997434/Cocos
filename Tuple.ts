// 元组，返回多个返回值
let hero: [string, number] = ["超人", 100];

// 数组
let array1: number[] = [1, 2, 3];
let array2: Array<number> = new Array<number>();
// 在数组后面追加元素
array1.push(4);
// 在数组前面添加元素
array1.unshift(0);
// 删除最后面的元素
array1.pop();
// 从第几位开始删除
array1.splice(0, 1);
// 删除最前面的
array1.shift();
// 合并两个数组
array1 = array1.concat(array2);
// 查找元素位置
let index = array1.indexOf(3);
// 排序
array1.sort();
// 逆序
array1.reverse();

// 字典
let dic: {[key: string]: string} = {
        "name": "王小虎"
};
// 添加
dic["name3"] = "令狐冲"； 