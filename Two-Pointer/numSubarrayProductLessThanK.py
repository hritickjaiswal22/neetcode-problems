from typing import List

class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        n = len(nums)
        i = -1
        j = 0
        prod = 1
        result = 0

        while j < n:
            prod = prod * nums[j]
            if prod >= k:
                if nums[j] >= k:
                    prod = 1
                    i = j
                    j += 1
                    continue
                i += 1
                prod = prod // nums[i]
                prod = prod // nums[j]
                continue
            result += j - i
            j += 1
        
        return result