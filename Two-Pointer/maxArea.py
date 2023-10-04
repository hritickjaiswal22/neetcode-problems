from typing import List

class Solution:
    def maxArea(self, height: List[int]) -> int:
        n = len(height)
        low = 0
        high = n - 1
        result = 0

        while low < high :
            result = max(result,min(height[low],height[high]) * (high - low))

            if height[low] <= height[high]: low += 1
            else : high -= 1
        
        return result
