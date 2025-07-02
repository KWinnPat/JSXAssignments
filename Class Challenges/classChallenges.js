class ArrayManager {
  constructor(items = []) {
    this.items = [...items];
    this.leftPointer = 0;
    this.rightPointer = items.length - 1;
    this.popFromLeft = true;
  }

  addItems(newItems) {
    this.items.push(...newItems);
    this.rightPointer = this.items.length - 1;
  }

  clear() {
    this.items = [];
    this.leftPointer = 0;
    this.rightPointer = -1;
    this.popFromLeft = true;
  }

  pop() {
    if (this.leftPointer > this.rightPointer) {
      return ''; // Array is empty
    }

    let item;
    if (this.popFromLeft) {
      item = this.items[this.leftPointer];
      this.leftPointer++;
    } else {
      item = this.items[this.rightPointer];
      this.rightPointer--;
    }
    
    this.popFromLeft = !this.popFromLeft; // Toggle for next pop
    return item;
  }

  getArray() {
    return this.items.slice(this.leftPointer, this.rightPointer + 1);
  }
}

const manager = new ArrayManager([1, 2, 3, 4, 5]);
console.log(manager.pop());
console.log(manager.pop()); 
console.log(manager.pop()); 
console.log(manager.pop()); 
console.log(manager.pop()); 
console.log(manager.pop());