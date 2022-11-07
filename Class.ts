class Person{
        static des: string = "这是一个类";
        name: string = "";
        age: number = "";

        say() {
              document.write("haha");
        }
};

// 抽象类
class Student extends Person{

};

abstract class Person{
        name: string = "";
        abstract say();
}

// 接口
interface Talk{
       name: string
       age: number
}

class Student implements Talk{
        
}

export导出类的属性或函数
import导入类的属性或函数