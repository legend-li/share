import datetime
import os

from green import set_sys_time, commit


def modify_other(path):
    # r 只读
    file = open(path, 'r');
    # 如果这个文件里面的第一行是0的话，那么赋值给flag为true
    flag = int(file.readline()) == 0
    file.close()
    # 打开可读写文件，若文件存在则文件长度清为零，即该文件内容会消失。若文件不存在则建立该文件
    file = open(path, 'w+');
    if flag:
        file.write('1')
    else:
        file.write('0')
        file.close()


def hard_commit(path, year, month, day, times):
    set_sys_time(year, month, day)
    # times = 15 , 循环14次
    while times > 0:
        # 修改文件1 or 0 ，如果没有则创建
        modify_other(path);
        
        # print (path);
        # 获取当前运行脚本的绝对路径 
        print (os.path.dirname(path));
         
        
        # 改变工作目录到参数
        os.chdir(os.path.dirname(path))
        
        commit()
        times -= 1


def special_commit(path, date, times):

    hard_commit(path, date.year, date.month, date.day, times);


def read_etc(path):
    idxes = []
    # 打开文件
    file = open(path, 'r')  
    while True:
        # 每行读取，拿到字符串对象
        word = file.readline()
        # 如果没有的话就break，直接return空数组
        
        if not word:
            break
        else:
            # 每一行都存到idxes数组内，最后是全部的数子
            idxes.extend(word.split())
            
    intIdxes = []
    for idx in idxes:
        # 数组里的每一个都转成数字，在存放到intIdxes中
        intIdxes.append(int(idx))
        # print (intIdxes)
        # 返回存放所有数字的数组
    return intIdxes


def love_commit(start_date, path, etc_path):
    # print (start_date);
    # print (start_date + datetime.timedelta(days=84))
    # return
    # 存放love里所有数字的数组
    words = read_etc(etc_path)
    for index in words:
        # 开始时间 + (数组里面的每个值)
        cur_date = start_date + datetime.timedelta(days=index)
        # 第一个循环2017-9-29
        special_commit(path, cur_date, 15);


if __name__ == '__main__':
    love_commit(datetime.date(2017, 7, 7), 'etc/index', 'etc/love');

