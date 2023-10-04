import math


class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        high = math.floor(math.sqrt(c))
        low = 0

        while low <= high:
            if low*low + high*high == c : return True
            elif low*low + high*high > c : high -= 1
            else : low += 1
        
        return False