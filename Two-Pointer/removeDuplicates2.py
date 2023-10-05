from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        n = len(nums)
        low = 0
        i = 0

        while i < n - 1:
            if nums[i] == nums[i + 1]:
                nums[low] = nums[i]
                low += 1
                nums[low] = nums[i + 1]
                low += 1
                j = i + 2
                while j < n and nums[j] == nums[i]: j += 1
                i = j
            else:
                nums[low] = nums[i]
                low += 1
                i += 1
        
        if i == n - 1:
            nums[low] = nums[i]
            low += 1
        
        return low
            