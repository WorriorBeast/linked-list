class Node {
	constructor(data = null, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	append(value) {
		if (this.head == null) {
			this.head = new Node(value);
		} else {
			let current = this.head;

			while (current.next) {
				current = current.next;
			}

			current.next = new Node(value);
		}
	}
}

export { LinkedList };
