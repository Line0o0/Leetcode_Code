class Solution(object):
    def validateStackSequences(self, pushed, popped):
        """
        :type pushed: List[int]
        :type popped: List[int]
        :rtype: bool
        """
        if len(pushed) == 0:
            return True
        if len(popped) != len(pushed):
            return False
        instk=-1
        topop=0
        while(topop != len(popped)):
            if instk==-1:
                while(True):
                    try:
                        idx = pushed.index(popped[topop])
                    except ValueError:
                        return False
                    instk = idx-1
                    pushed.pop(idx)
                    topop += 1
                    if instk!=-1 or topop==len(popped):
                        break
            elif pushed[instk] == popped[topop]:
                pushed.pop(instk)
                instk -= 1
                topop += 1
            else:
                try:
                    idx = pushed.index(popped[topop])
                except ValueError:
                    return False
                if idx<instk:
                    return False
                else:
                    instk=idx-1
                    pushed.pop(idx)
                    topop+=1               
        return True


sol = Solution()
push = [1,2,3,4,5]
pop = [4,5,3,2,1]
if sol.validateStackSequences(push, pop) == True:
    print("Yes!")
else:
    print("No!")
