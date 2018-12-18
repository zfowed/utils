# Queue 队列

Queue.js 创建具有指定并发性的队列对象。 添加到队列中的任务并行处理（达到并发限制）。 如果所有工作人员都在进行中，则任务将排队等候，直到可用。 一旦工作人员完成任务，就会调用该任务的回调。

## NPM安装

```shell
npm install @zfowed/utils -S
```

## 基本用法

```javascript
import Queue from '@zfowed/utils/dist/Queue'
```

```javascript
/** 创建一个并发为10的一个任务队列 */
var queue = new Queue(function (task, next) {
  // task: 当前任务
  // next: 当前任务处理完了，执行next(arguments);进行回调
  console.log('正在处理' + task.name + '任务');
  return next();
}, 10);

// 队列为空的时候调用的function
queue.drain = function() {
  console.log('所有任务都执行完了');
};

// 将一些任务添加到队列中
queue.push({name: 'foo'}, function() {
  console.log('foo任务完成了');
});
queue.push({name: 'bar'}, function () {
  console.log('bar任务完成了');
});
```
