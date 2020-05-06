console.log('script connected!');

const testData = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]


// 2. Adding a React UI
// 1) Linear search
// Given the following dataset, find out how many tries it took to search for a particular item in the dataset. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.
function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return i;
    }
  }
  return "Value not found";
}

// console.log(indexOf(testData, 87));


// 2) Binary search
// Use the same front end and the dataset from the previous exercise for this exercise. Use array.sort to sort the dataset. Then implement a binary search to find a particular value in the dataset. Display how many tries it took to search for a particular item in the dataset using binary search. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.
function binarySearch(actualArray, value, start, end) {
  array = actualArray.sort((a, b) => a - b)
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
    return "value not found";
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item == value) {
    return index;
  } else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  } else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

// console.log(binarySearch(testData, 33, 1, 98));


// 3. Find a book
// Imagine you are looking for a book in a library with a Dewey Decimal index. How would you go about it? Can you express this process as a search algorithm? Implement your algorithm to find a book whose Dewey and book title is provided.

const library = [
  { dewey: "001", title: "Book 1" },
  { dewey: "002", title: "Book 2" },
  { dewey: "003", title: "Book 3" },
  { dewey: "004", title: "Book 4" },
  { dewey: "005", title: "Book 5" }
];

function deweySearch(dewey, title, books) {
  books.forEach(book => {
    if (book.dewey === dewey && book.title === title) {
      console.log("Book", book);
      return book;
    }
  });
}

// deweySearch("002", "Book 2", library);

class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
  insert(key, value) {
    if (this.key == null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    if (this.key == key) {
      return this.value;
    } else if (key < this.key && this.left) {
      return this.left.find(key);
    } else if (key > this.key && this.right) {
      return this.right.find(key);
    } else {
      throw new Error("Key Error");
    }
  }

  remove(key) {
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      } else if (this.left) {
        this._replaceWith(this.left);
      } else if (this.right) {
        this._replaceWith(this.right);
      } else {
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error("Key Error");
    }
  }
  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      } else if (this == this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }

  _findMax() {
    if (!this.right) {
      return this;
    }
    return this.right._findMax();
  }
}

function dfs(values = []) {
  if (this.left) {
    values = this.left.dfs(values);
  }
  values.push(this.value);

  if (this.right) {
    values = this.right.dfs(values);
  }
  return values;
}

function bfs(tree, values = []) {
  const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
  const node = tree.root;
  queue.enqueue(node);
  while (queue.length) {
    const node = queue.dequeue(); //remove from the queue
    values.push(node.value); // add that value from the queue to an array

    if (node.left) {
      queue.enqueue(node.left); //add left child to the queue
    }

    if (node.right) {
      queue.enqueue(node.right); // add right child to the queue
    }
  }

  return values;
}

// 5. Implement different tree traversals
function inOrder(tree) {
  if (tree.left) {
    inOrder(tree.left);
  }
  console.log(tree.key);
  if (tree.right) {
    inOrder(tree.right);
  }
}

function preOrder(tree) {
  console.log(tree.key);
  if (tree.left) {
    inOrder(tree.left);
  }
  if (tree.right) {
    inOrder(tree.right);
  }
}

function postOrder(tree) {
  if (tree.left) {
    inOrder(tree.left);
  }
  if (tree.right) {
    inOrder(tree.right);
  }

  console.log(tree.key);
}




// 5. Implement different tree traversals
// Using your BinarySearchTree class from your previous lesson, create a binary search tree with the following dataset: 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22. Then implement inOrder(), preOrder(), and postOrder() functions. Test your functions with the following datasets.

// A pre-order traversal should give you the following order: 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90

// In-order: 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90

// Post-order: 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25

const tree = new BinarySearchTree();

tree.insert(25);
tree.insert(15);
tree.insert(50);
tree.insert(10);
tree.insert(24);
tree.insert(35);
tree.insert(70);
tree.insert(4);
tree.insert(12);
tree.insert(18);
tree.insert(31);
tree.insert(44);
tree.insert(66);
tree.insert(90);
tree.insert(22);

//console.log(postOrder(tree));

// 6. Find the next commanding officer

function bfs(values) {
  values = values || [];
  const queue = [this];

  while (queue.length) {
    var node = queue.shift();
    values.push(node.value);

    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return values;
}

// 7. Max profit
// The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the company on a particular day, and sell the shares on a subsequent day, write an algorithm to work out what the maximum profit you could make would be.
function maxProfit(tree) {
  let min = tree[0];
  let max = tree[tree.length - 1];

  for (let i = 0; i < tree.length; i++) {
    if (min > tree[i]) {
      min = tree[i];
    }
    if (max < tree[i]) {
      max = tree[i];
    }
  }
  let profit = max - min;
  return profit;
}

const test = [128, 97, 121, 123, 98, 97, 105];

// console.log(maxProfit(test));


