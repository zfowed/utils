
class Queue {
  constructor (key) {
    this._key = key || 'storage'
    this._storage = this.decode(this.getStorage(this._key), {})
  }

  _start () {
    if (this.tasks.length === 0 || this.concurrencyCut >= this.concurrencyMax) {
      return
    }
    var taskData = this.tasks.shift()
    this.concurrencyCut += 1
    this.worker && this.worker(taskData.task, this._next.bind({ taskData: taskData, self: this }))
  }

  _next () {
    var self = this.self
    var taskData = this.taskData
    taskData.callback && taskData.callback.apply(this, arguments)
    self.concurrencyCut -= 1
    if (self.tasks.length > 0) { return self._start() }
    if (self.concurrencyCut === 0) { return self.drain && self.drain() }
  }

  push (task, callback) {
    this.tasks.push({ task: task, callback: callback })
    if (this.concurrencyCut < this.concurrencyMax) { return this._start() }
  }
}

export default Queue
