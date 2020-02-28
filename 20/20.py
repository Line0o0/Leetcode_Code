class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        stack=[]
        d={'{':'}','(':')','[':']'}
        s=s.strip().replace(' ','')
        for i in s:
            if i in d:
                stack.append(i)
            else:
                if len(stack)==0 or d[stack.pop()]!=i:
                    return False
        return stack==[]
        

sol = Solution()
if sol.isValid('{({})}')==False:
    print("No!")
else:
    print("Yes!")





