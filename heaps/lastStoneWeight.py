import heapq
from typing import List

class Solution:
    def maxHeapify(self,nums: List[int]) :
        for i in range(len(nums)):
            nums[i] = -1 * nums[i]
        
        heapq.heapify(nums)

        return nums
    
    def maxHeapPush(self,nums: List[int], val : int) :
        heapq.heappush(nums,-1 * val)

    def maxHeapPop(self,nums: List[int]):
        return -1 * heapq.heappop(nums)

    def lastStoneWeight(self, stones: List[int]) -> int:
        stones = self.maxHeapify(stones)

        while(len(stones) > 1):
            a = self.maxHeapPop(stones)
            b = self.maxHeapPop(stones)

            if(a != b):
                self.maxHeapPush(stones,a - b)
        
        if(len(stones) == 0) :
            return 0
        
        return stones[0] * -1
        
