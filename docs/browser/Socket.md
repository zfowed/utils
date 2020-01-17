> # new Socket(url[, options])

Socket.js 是用一个基于 WebSocket 封装业务的即时通讯工具。

## options 参数

| 参数 | 类型 | 默认值 | 描述 |
| - | - | - | - |
| `autoConnect` | `Boolean` | `false` | 初始化直接连接 |
| `handleEmitParams` | `Function` | `handleEmitParams` | 处理前端发送数据的格式，接收参数 `(reqId, name, params)` |
| `handleResponseCallbackParams` | `Function` | `handleResponseCallbackParams` | 处理后端请求数据,前端响应数据的的格式, 接收参数`(resId, name, result)` |
| `handleMessage` | `Function` | `handleMessage` | 处理后端请求数据,处理后端回调监听事件接收参数`(message, listenerCallback, emitCallback, responseCallback)` |

## 基本用法

```javascript
import Socket from '@zfowed/utils/Socket'
```

实例化

```javascript
let socket = new Socket('ws://localhost:20001', options)
```

发送数据

```javascript
// 发送数据
socket.emit(name, params)

// 发送数据带回调结果
socket.emit(name, params, (result) => {
  // result => 响应数据
})
```

监听数据

```javascript
// 监听事件
socket.on(name, (result) => {
  // params => 服务端发送参数
})

// 监听后端发送的事件，回调数据给服务端
socket.on(name, (params, callback) => {
  // params => 服务端发送参数
  return callback(params) // => 回调服务端数据
})

```

## 理想配置

```javascript
let socket = new Socket('ws://localhost:20001', {

  /** 初始化直接连接 */
  autoConnect: false,
  
  /** 处理前端发送数据的格式 */
  handleEmitParams (reqId, name, params) {
    return { reqId, name, params: params[0] }
  },
  
  /** 处理后端请求数据,前端响应数据的的格式 */
  handleResponseCallbackParams (resId, name, result) {
    return { resId, name, result: result[0] }
  },

  
  /** 处理后端回调监听事件 */
  handleMessage (message, listenerCallback, emitCallback, responseCallback) {
    const data = JSON.parse(message)
    const { reqId, resId, name, params, result } = data
    if (resId) {
      // 回调数据 resId result 前端发送数据到后端，后端返回来的数据
      return emitCallback(resId, result)
    } else if (reqId) {
      // 请求数据 reqId name params 后端需要请求数据
      return responseCallback(reqId, name, params)
    }
    // 监听数据 name result 前端监听事件的数据
    return listenerCallback(name, result)
  }

})
```

`socket.emit` 数据格式

```javascript
{
  reqId: '发送事件ID',
  name: '发送事件名',
  params: { } // 回调的数据
}
```

接收 `socket.emit` 的回调 `socket.on` 格式

```javascript
{
  resId: '之前发送的事件ID',
  name: '之前发送的事件名',
  result: { } // 回调的数据
}
```

监听 `socket.on` 消息格式

```javascript
{
  name: '监听事件名',
  result: { } // 监听到的数据
}
```
