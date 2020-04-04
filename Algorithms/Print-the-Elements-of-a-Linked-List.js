//Desafio de estrutura de dados: printar os elementos de uma lsita encadeada
//link do desafio-> https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem

// Complete the printLinkedList function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function printLinkedList(head) {

    while(head){
        console.log(head.data)
        head = head.next
    }
}