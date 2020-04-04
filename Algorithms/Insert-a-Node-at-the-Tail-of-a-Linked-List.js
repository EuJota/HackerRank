// Complete the insertNodeAtTail function below.
//objetivo do desafio é inserir um novo nó no fim de uma lista encadeada e retorar o começo da lista
//link do desafio - https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {
    let newNode = new SinglyLinkedListNode(data)
    let current = head

    if(!head)
        return newNode

    while(current.next !== null)
        current = current.next

    current.next = newNode
    return head
}