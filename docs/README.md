## NPM安装  :id=quick-start

```shell
npm install @zfowed/utils -S
```

## 目录

* @zfowed/utils/esm 目录存放 ES Module 代码
* @zfowed/utils/min 目录存 编译后 代码

## ES Module 引用方法

```javascript
// 全部引用
import utils from '@zfowed/utils'

// 按需引入
import uniq from '@zfowed/utils/uniq'
import { uniq } from '@zfowed/utils'
```
