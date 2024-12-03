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

	prepend(value) {
		let newNode = new Node(value);

		newNode.next = this.head;
		this.head = newNode;
	}

	size() {
		let size = 1;
		let current = this.head;

		if (this.head == null) {
			return 0;
		} else {
			while (current.next) {
				current = current.next;
				size++;
			}
			return size;
		}
	}

	firstNode() {
		return this.head;
	}

	tail() {
		let current = this.head;

		while (current.next) {
			current = current.next;
		}
		return current;
	}

	at(index) {
		if (index <= 0) return 'Index does not exist';

		let current = this.head;

		for (let i = 1; i < index; i++) {
			if (current.next == null) return 'Index does not exist';

			current = current.next;
		}
		return current;
	}
}

export { LinkedList };
