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


# Python Heaps (`heapq` Module)

## **Min-Heap**
A **min-heap** keeps the smallest element at the root.

### **Basic Operations**
```python
import heapq

data = [5, 1, 8, 3]
heapq.heapify(data)  # Convert to min-heap
print(data)  # [1, 3, 8, 5]

heapq.heappush(data, 2)  # Add element
print(data)  # [1, 2, 8, 5, 3]

smallest = heapq.heappop(data)  # Remove smallest
print(smallest)  # 1

heapq.heappushpop(data, 4)  # Push 4, then pop smallest
print(data)  # [3, 4, 8, 5]

heapq.heapreplace(data, 6)  # Replace smallest with 6
print(data)  # [4, 5, 8, 6]


