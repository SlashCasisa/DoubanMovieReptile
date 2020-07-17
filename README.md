# 爬虫必备工具：cheerio
## cheerio 简单介绍：
cheerio 是 jquery 核心功能的一个快速灵活而又简洁的实现，主要是为了用在服务器端需要对 DOM 进行操作的地方。大家可以简单的理解为用来解析 html 非常方便的工具。使用之前只需要在终端安装即可 npm install cheerio

## 教程
 1. npm init -y
 2. git init 
 3. 创建.gitignore文件，里面添加：node_modules
 4. package.json设置
```
    "scripts": {
    "start": "node ./src/app.js",
    "start-db": "node ./src/main.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

### app.js 爬虫到本地
npm run start
### main.js 爬虫到数据库
  爬虫到数据库 需要
  npm install mysql2 sequelize sequelize-cli -S
  在navicat新建数据库
  连上自己新建的数据库（要改config.json）
  npx sequelize-cli model:generate --name DoubanMovie --attributes title:string,star:string,pic:string
  再运行
  npm run start

  
