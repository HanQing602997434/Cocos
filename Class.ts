class Person{
        static des: string = "����һ����";
        name: string = "";
        age: number = "";

        say() {
              document.write("haha");
        }
};

// ������
class Student extends Person{

};

abstract class Person{
        name: string = "";
        abstract say();
}

// �ӿ�
interface Talk{
       name: string
       age: number
}

class Student implements Talk{
        
}