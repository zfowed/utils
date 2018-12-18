# `template` 模板引擎

Storage.js 是用于数据缓存的javascript库。Storage.js支持在浏览器端中使用使用本地存储，或者使用内存，又或者可以自定义存储源。Storage.js没有依赖关系。

## 特性

- 因为功能逻辑并不复杂，所以可以渲染极限的性能。
- 使用 `JavaScript` 原生语法，在复杂的业务需求都可以实现。
- 原始语法兼容 `EJS` 模板语法。

## NPM安装

```shell
npm install @zfowed/utils -S
```

## 基本用法

```javascript
import Storage from '@zfowed/utils/dist/Storage'
```

```javascript
/** 创建编译模板 */
var compiled = template('hello <%- user %>!');
compiled({ 'user': 'fred' }); // 'hello fred!'

/** 转义数据的值 */
var compiled = template('<b><%= value %></b>');
compiled({ 'value': '<script>' }); // '<b>&lt;script&gt;</b>'

/** 执行 JavaScript 和 生成HTML代码 */
var compiled = template('<% for(var i = 0; i < users.length; i++) { %><li><%= users[i] %></li><% } %>');
compiled({ 'users': ['fred', 'barney'] }); // '<li>fred</li><li>barney</li>'
```

## 模板（原生 `JavaScript` 语法）

```html
<% if (user) { %>
  <h2><%= user.name %></h2>
<% } %>
```

## 自定义边界

> 正则会由 `escape`, `interpolate`, `evaluate` 合并，注意匹配先后顺序；并且必须返回一个 `$1`，也只能一个 `$1`

使用：

- `<%` ... `%>`: `JavaScript` 代码
- `<%-` ... `%>`: 原始的数据值
- `<%=` ... `%>`: 转义后的数据值

```javascript
var compiled = template('hello <%- user %>!', {
  escape: /<%=\s*([\s\S]+?)\s*%>/g,
  interpolate: /<%-\s*([\s\S]+?)\s*%>/g,
  evaluate: /<%\s*([\s\S]+?)\s*%>/g
});
compiled({ 'user': 'fred' }); // 'hello fred!'
```

使用：

- `{{` ... `}}`: `JavaScript` 代码
- `{{-` ... `}}`: 原始的数据值
- `{{=` ... `}}`: 转义后的数据值

```javascript
var compiled = template('hello {{= user }}!', {
  escape: /{{=\s*([\s\S]+?)\s*}}/g,
  interpolate: /{{-\s*([\s\S]+?)\s*}}/g,
  evaluate: /{{\s*([\s\S]+?)\s*}}/g
});
compiled({ 'user': 'fred' }); // 'hello fred!'
```
