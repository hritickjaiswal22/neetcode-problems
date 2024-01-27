import heapq as hq
from typing import List

class MyHeap: 
  # constructor 
    def __init__(self,num): 
        self.num = num
  
   # very very imp
   # override the comparison operator 
    def __lt__(self, nxt): 
        # return self.value < nxt.value 
        if(len(self.num) != len(nxt.num)):
            return len(self.num) < len(nxt.num)
        
        for i in range(len(self.num)):
            num1 = int(self.num[i])
            num2 = int(nxt.num[i])

            if(num1 < num2):
                return True
            elif(num2 < num1):
                return False
            else:
                pass

        return False

class Solution:
    def kthLargestNumber(self, nums: List[str], k: int) -> str:
        heap = []

        for num in nums:
            hq.heappush(heap,MyHeap(num))

            if(len(heap) > k):
                hq.heappop(heap)
        
        return hq.heappop(heap)