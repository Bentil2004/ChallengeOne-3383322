class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let node = this.root;
      for (const char of word) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.isEndOfWord = true;
    }
  
    search(word) {
      const node = this._findNode(word);
      return node !== null && node.isEndOfWord;
    }
  
    startsWith(prefix) {
      return this._findNode(prefix) !== null;
    }
  
    _findNode(prefix) {
      let node = this.root;
      for (const char of prefix) {
        if (!node.children[char]) {
          return null;
        }
        node = node.children[char];
      }
      return node;
    }
  }

  const commands = ["Trie", "insert", "search", "search", "startsWith", "insert", "search"];
  const inputs = [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]];
  const output = [];
  
  let trie = null;
  
  commands.forEach((command, i) => {
    if (command === "Trie") {
      trie = new Trie();
      output.push(null);
    } else if (command === "insert") {
      trie.insert(inputs[i][0]);
      output.push(null);
    } else if (command === "search") {
      output.push(trie.search(inputs[i][0]));
    } else if (command === "startsWith") {
      output.push(trie.startsWith(inputs[i][0]));
    }
  });
  
  console.log("Output:", output);
  