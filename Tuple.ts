// Ԫ�飬���ض������ֵ
let hero: [string, number] = ["����", 100];

// ����
let array1: number[] = [1, 2, 3];
let array2: Array<number> = new Array<number>();
// ���������׷��Ԫ��
array1.push(4);
// ������ǰ�����Ԫ��
array1.unshift(0);
// ɾ��������Ԫ��
array1.pop();
// �ӵڼ�λ��ʼɾ��
array1.splice(0, 1);
// ɾ����ǰ���
array1.shift();
// �ϲ���������
array1 = array1.concat(array2);
// ����Ԫ��λ��
let index = array1.indexOf(3);
// ����
array1.sort();
// ����
array1.reverse();

// �ֵ�
let dic: {[key: string]: string} = {
        "name": "��С��"
};
// ���
dic["name3"] = "�����"�� 