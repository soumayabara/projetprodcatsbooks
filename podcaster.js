class StackAndQueue {
    constructor() {
        this.pointer = this.holder = this.peak = null;
    }
    add(data) {
        if (!this.peak) {
            this.pointer = this.holder = this.peak = new Element(data);
            return;
        }
        let temp = this.holder;
        this.holder = this.holder.next = new Element(data);
        this.holder.previous = temp;
    }
    dequeue() {
        if (this.pointer && this.pointer === this.peak) {
            this.pointer = this.peak.next;
        }
        if (this.peak && this.peak.next) {
            this.peak = this.peak.next;
            this.peak.previous = null;
        } else {
            this.pointer = this.holder = this.peak = null;
        }
    }
    pop() {
        if (this.holder && this.holder === this.pointer) {
            this.pointer = this.holder.previous;
        }
        if (this.holder && this.holder.previous) {
            this.holder = this.holder.previous;
            this.holder.next = null;
        } else {
            this.peak = this.pointer = null;
        }
    }
    next() {
        if (this.pointer && this.pointer.next) {
            this.pointer = this.pointer.next;
        }
    }
    previous() {
        if (this.pointer && this.pointer.previous) {
            this.pointer = this.pointer.previous;
        }
    }
    show() {
        if (this.pointer) {
            return this.pointer.data;
        }
        return null;
    }
}
class Element {
    constructor(data, next, previous) {
        this.data = data;
        this.next = next || null;
        this.previous = previous || null;
    }
}
let list = new StackAndQueue();
let list2 = new StackAndQueue();
