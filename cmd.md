#一、安装生成器
```
npm install -g express-generator
```

#二、生成项目
```
 express -e blog
 cd blog && npm install
```

#三、启动项目
```
SET DEBUG=blog:* & npm start
```

#四、提交远程仓库
```
git init 初始化仓库
git add -A 把所有的文件添加到暂存区
git commit -m"初始化珠峰博客" 把所有的修改添加到历史区
git remote add origin https://github.com/zhufengnodejs/zhufengblog.git 添加远程仓库的关联
git push -u origin master 把本地的仓库推送到远程服务器上去
```

