/*

Check Balanced: 

Implement a function to check if a binary tree is balanced.
For the purposes of this question, a balanced tree is defined 
to be a tree such that the heights of the two subtrees of any 
node never differ by more than one.

*/

function checkBalanced(root) {
  return getHeight(root) !== -1;

  function getHeight(root) {
    if (!root) return 0;

    let left = getHeight(root.left);
    let right = getHeight(root.right);
    
    if (left == -1 || right == -1 || Math.abs(left - right) > 1) {
      return -1;
    }
    return 1 + Math.max(left, right);
  }
}