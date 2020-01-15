> # cookie

对浏览器 cookie 进行封装。

## 基本用法

```javascript
import cookie from '@zfowed/utils/esm/cookie'
```

获取全部 cookie

```javascript
cookie()
```

删除所有 cookie

```javascript
cookie.clear()
```

通过 key 获取值

```javascript
cookie('key')
cookie.getItem('key')
```

通过 key 设置值

```javascript
cookie('key', 'value')
cookie.getItem('key', 'value')

// 配置 生命周期，路径，域，安全性
cookie('key', 'value', { expires: 1, path: '/', domanin: location.hostname, secure: true })
cookie.setItem('key', 'value', { expires: 1, path: '/', domanin: location.hostname, secure: true })
```

通过 key 删除

```javascript
cookie('key', null)
cookie.removeItem('key')

// 指定生命周期，路径，域，安全性
cookie('key', null, { path: '/', domanin: location.hostname, secure: true })
cookie.removeItem('key', { path: '/', domanin: location.hostname, secure: true })
```
