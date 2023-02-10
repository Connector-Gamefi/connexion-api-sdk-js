# connexion-api-sdk-js
使用方法: 
1，拷贝crypto文件放到自己项目的目录下
2，在需要使用 HmacSHA256方法 的文件下引入tosha.js文件
3，将参数传入到toSha(key, value)方法里即可

引入示例: import { toSha } from "./crypto/tosha.js" // 不同项目、不同文件位置 引入方法有所不同，请示具体情况而定

参数示例: {"topNum":"5","timestamp":"1675998834"}, 

使用示例: toSha({"topNum":"5","timestamp":"1675998834"}, 'a05315753c2842598ee5daca4f7ef399')


