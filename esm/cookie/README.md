# `cookie`

## NPM安装

```shell
npm install @zfowed/utils -S
```

## 基本用法

```javascript
import cookie from '@zfowed/utils/esm/cookie'
```

```javascript
/* 获取 cookie */
cookie('key')
cookie.getItem('key')

/* 设置 cookie */
cookie('key', 'value')
cookie.setItem('key', 'value')
cookie('key', 'value', { expires: 1, path: '/', domanin: location.hostname, secure: true })
cookie.setItem('key', 'value', { expires: 1, path: '/', domanin: location.hostname, secure: true })

/* 删除 cookie */
cookie('key', null)
cookie.removeItem('key')
cookie('key', null, { path: '/', domanin: location.hostname, secure: true })
cookie.removeItem('key', { path: '/', domanin: location.hostname, secure: true })

/* 获取所有 cookie */
cookie()

/* 删除所有 cookie */
cookie.clear()
```
