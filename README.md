使用说明: 

0.
修改package.json的name对应跟目录文件.

1. 
复制文件的时候不用复制 build node_modules 这2个目录. 系统会自动生成.

2.生成 node_modules 目录.
终端: cnpm install  

3.生成 build 目录.
终端: webpack 

4.实时更新
终端: webpack-dev-server
然后在  http://localhost:8080/ 后面加上 webpack-dev-server


		终端: webpack-dev-server --port 8888 // 指定端口号
		终端: webpack-dev-server --inline //改变完代码之后,自动刷新浏览器
		终端: webpack-dev-server --hot  //热重载(只会刷新你修改的地方,局部刷新) 

