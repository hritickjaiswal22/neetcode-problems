from typing import List

class Solution:
    def minPairSum(self, nums: List[int]) -> int:
        max = 0
        low = 0
        high = len(nums) - 1

        nums.sort()

        while low < high:
            if nums[low] + nums[high] > max : max = nums[low] + nums[high]
            low += 1
            high -= 1
        
        return max