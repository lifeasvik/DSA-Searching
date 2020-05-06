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

// 3. Find a book
const library = [
  { dewey: "001", title: "Book 1" },
  { dewey: "002", title: "Book 2" },
  { dewey: "003", title: "Book 3" },
  { dewey: "004", title: "Book 4" },
  { dewey: "005", title: "Book 5" }
];

function deweySearch(dewey, title, books) {
  books.forEach(book => {
    //console.log(book.title);
    if (book.dewey === dewey && book.title === title) {
      console.log("Book", book);
      // return book;
    }
  });
}

//deweySearch("002", "Book 2", library);

// 5. Implement different tree traversals

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

// 7. Max Profit
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