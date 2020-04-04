// Complete the insertNodeAtHead function below.
//Objetivo do desafio é inserir um novo nó no começo da lista encadeada e retornar o começo
//link do desafio -> https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list/problem?h_r=next-challenge&h_v=zen

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtHead(head, data) {
    let newNode = new SinglyLinkedListNode(data)

    if(!head)
        return newNode
    else newNode.next = head

    return newNode  
}