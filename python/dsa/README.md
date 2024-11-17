### deque

```python

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from typing import List, Optional
from collections import deque

class Solution:
    def bfsTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []
        
        res = []
        queue = deque([root])  # Initialize queue with the root node
        
        while queue:
            node = queue.popleft()  # Remove from front of the queue
            res.append(node.val)    # Process current node
            
            # Add left and right children to the queue if they exist
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        return res
```
