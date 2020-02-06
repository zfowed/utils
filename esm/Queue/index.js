class Queue {
  constructor (worker, concurrency) {
    this.tasks = []
    this.worker = typeof worker === 'function' ? worker : null
    this.concurrencyMax = typeof concurrency === 'number' && concurrency > 0 ? concurrency : 1
    this.concurrencyCut = 0
    this.drain = null

    this._id = 0
  }

  _start () {
    if (this.tasks.length === 0 || this.concurrencyCut >= this.concurrencyMax) return
    const tasksEvent = this.tasks.shift()
    this.concurrencyCut += 1
    this.worker && this.worker(tasksEvent.task, this._next.bind(this, tasksEvent))
  }

  _next (tasksEvent, ...args) {
    if (tasksEvent.__$isComplete) return
    tasksEvent.__$isComplete = true
    const { callback } = tasksEvent
    callback && callback.apply(this, args)
    this.concurrencyCut -= 1
    if (this.tasks.length > 0) { return this._start() }
    if (this.concurrencyCut === 0) { return this.drain && this.drain() }
  }

  push (task, callback) {
    const id = ++this._id
    this.tasks.push({ id, task, callback })
    if (this.concurrencyCut < this.concurrencyMax) this._start()
    return id
  }

  remove (id) {
    const index = this.tasks.findIndex(item => item.id === id)
    if (index >= 0) {
      this.tasks.splice(index, 1)
    }
  }
}

export { Queue }
export default Queue
