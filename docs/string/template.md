> # template(string[, options])

创建一个预编译模板方法。

## 特性

- 因为功能逻辑并不复杂，所以可以渲染极限的性能。
- 使用 `JavaScript` 原生语法，在复杂的业务需求都可以实现。
- 原始语法兼容 `EJS` 模板语法。

## 参数 (params)

| 参数 | 类型 | 默认值 | 描述 |
| - | - | - | - |
| string | string | '' | 模板 |
| options | Object | {} | 选项 |

## 结果 (return)

`(Function)`: 返回编译模板函数

## 案例 (DEMO)

```javascript
import template from '@zfowed/utils/esm/template'
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

正则会由 `escape`, `interpolate`, `evaluate` 合并，注意匹配先后顺序；并且必须返回一个 `$1`，也只能一个 `$1`

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
