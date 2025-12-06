class AsyncTaskQueue {
  constructor(concurrency) {
    this.concurrency = concurrency;
    this.noOfWorking = 0;
    this.taskQueue = [];
    // Initialize the queue with the specified concurrency limit
  }
  queue(task) {
    this.taskQueue.push(task);
    this.callPromise();
  }
  callPromise() {
    if (this.noOfWorking < this.concurrency && this.taskQueue.length > 0) {
      const first = this.taskQueue.shift();
      this.noOfWorking++;
      first().finally(() => {
        this.noOfWorking--;
        this.callPromise();
      });
    }
  }
}
