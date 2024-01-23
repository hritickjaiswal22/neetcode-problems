import heapq
from typing import List

class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        heapq.heapify(nums)
        
        while(len(nums) > k):
            heapq.heappop(nums)

        self.heap = nums
        self.k = k



    def add(self, val: int) -> int:
        heapq.heappush(self.heap,val)

        while(len(self.heap) > self.k):
            heapq.heappop(self.heap)

        return self.heap[self.k - 1]
        


# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)