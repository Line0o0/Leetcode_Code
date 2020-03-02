class Solution(object):
    def validateStackSequences(self, pushed, popped):
        """
        :type pushed: List[int]
        :type popped: List[int]
        :rtype: bool
        """
        stack=[]
        topop=0
        for push in pushed:
            stack.append(push)
            while stack!=[] and topop!=len(popped) and stack[-1]==popped[topop]:
                stack.pop()
                topop+=1
        return topop==popped


class Solution(object):
    def validateStackSequences(self, pushed, popped):
        """
        :type pushed: List[int]
        :type popped: List[int]
        :rtype: bool
        """
        stack = []
        index = 0
        for push in pushed:
            stack.append(push)
            while index < len(popped) and stack and stack[-1] == popped[index]:
                stack.pop()
                index += 1
        if stack:
            return stack[::-1] == popped[index:]
        return True


sol = Solution()
push = [1,2,3,4,5]
pop = [4,3,5,1,2]
if sol.validateStackSequences(push, pop) == True:
    print("Yes!")
else:
    print("No!")
