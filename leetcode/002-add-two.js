/*
  You are given two non-empty linked lists representing two non-negative integers.
  The digits are stored in reverse order and each of their nodes contain a single digit. 
  Add the two numbers and return it as a linked list.

  You may assume the two numbers do not contain any leading zero, 
  except the number 0 itself.

  Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
  Output: 7 -> 0 -> 8
*/

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    let head,
        current,
        carry = 0;
    
    while (l1 !== null || l2 !== null) {
        const l1Val = (l1 ? l1.val : 0);
        const l2Val = (l2 ? l2.val : 0);
        const total = l1Val + l2Val + carry;

        carry = Math.floor(total / 10);
        
        const nextNode = new ListNode(total % 10);
        
        if (head === undefined) {
            head = nextNode;
            current = head;
        }
        else {            
            current.next = nextNode;
            current = current.next;
        }

        l1 = (l1 ? l1.next : null);
        l2 = (l2 ? l2.next : null);
        
        if (carry !== 0) {
            const nextNode = new ListNode(carry);
            current.next = nextNode;
        }
    }
    return head;
};
