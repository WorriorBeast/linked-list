# linked-list

A linked list is a basic data structure thats acts like an array. The head is the starting node which points to
the next node and that node points to the next node and so on. The simplest of linked lists one point in one
direction, thus you can only traverse in one direction from the head until reaching null. Linked lists can become
more intricate by having a pointer that points to its previous node as well. In this practice, the linked list
only has a next reference pointing to the next node. In order to understand how to handle, edit, return select
node, and as a string representing the data structure, I added methods to the linked list class.

Objective:

1. Create LinkedList class to represent the entire linked list
2. Create Node class containing a value property and a nextNode property, set both as null by default
3. Add the following methods to linked list class:
   -  append(value) adds a new node containing value to the end of the list
   -  prepend(value) adds a new node containing value to the start of the list
   -  size returns the total number of nodes in the list
   -  firstNode returns the first node in the list
   -  tail returns the last node in the list
   -  at(index) returns the node at the given index
   -  pop removes the last element from the list
   -  contains(value) returns true if the passed in value is in the list and otherwise returns false
   -  find(value) returns the index of the node containing value, or null if not found
   -  toString represents the LinkedList objects as strings, so you can print them out and preview them in the
      console. The format should be: ( value ) -> ( value ) -> ( value ) -> null

Optional Objective:

1. insertAt(value, index) that inserts a new node with the provided value at the given index
2. removeAt(index) that removes the node at the given index

What I learned:

Before I started creating the data structure I was aware traversing through has a time complexity of O(n). After
writing the first method it became clear the reason is there is no direct reference to any node in the linked
list. Instead I have to traverse one by one until the condition is met or the end is reached. After the first
method it was a breeze figuring out how to implement the other methods. The optional objective was not as simple as
the other methods. Some trial and error made me realize I needed a reference for the previous node. This exercise
was not that complex, but I did learn how to traverse and edit a linked list.
