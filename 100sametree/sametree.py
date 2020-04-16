# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution(object):
    def isSameTree(self, p, q):
        """
        :type p: TreeNode
        :type q: TreeNode
        :rtype: bool
        """
        ppre=self.preorderTravelsal(p)
        pin=self.inorderTravelsal(p)
        qpre=self.preorderTravelsal(q)
        qin=self.inorderTravelsal(q)
        return ppre,qpre,pin,qin


    def preorderTravelsal(self,root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        if not root:
            return []
        result=[]
        stack=[root]
        while stack:
            cur_node=stack.pop()
            result.append(cur_node.val)
            if cur_node.right:
                stack.append(cur_node.right)
            if cur_node.left:
                stack.append(cur_node.left)
    
    def inorderTravelsal(self,root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        if not root:
            return []
        result=[]
        stack=[]
        p_node=root
        if p_node or stack:#这里的p_node应该只是为了使第一次遍历能够成立，因此此时stack为空
            while p_node:
                stack.append(p_node)
                p_node=p_node.left
            cur_node=stack.pop()
            result.append(cur_node.val)
            if cur_node.right:
                p_node=cur_node.right
        return result


p=TreeNode(10)
p1=TreeNode(5)
p2=TreeNode(15)
p.left=p1
p.right=p2

q=TreeNode(10)
q1=TreeNode(5)
# q2=TreeNode(None)
# q3=TreeNode(None)
q4=TreeNode(15)
q.left=q1
q1.right=q4

sol=Solution()
ppre,qpre,pin,qin=sol.isSameTree(p,q)
print("END")