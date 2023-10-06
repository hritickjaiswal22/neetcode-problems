# we re-used post fix space as container to  store result

from typing import List

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        postfix = [1] * n
        prod = 1
        i = n - 1

        postfix[i] = nums[i]
        i -= 1

        while(i >= 0) :
            postfix[i] = postfix[i + 1] * nums[i]
            i -= 1
        
        i = 0
        while(i < n - 1):
            postfix[i] = prod * postfix[i + 1]
            prod = prod * nums[i]
            i += 1
        postfix[i] = prod

        return postfix