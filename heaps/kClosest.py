import heapq as hq
from typing import List
import math

class MyHeap: 
  # constructor 
    def __init__(self,point): 
        self.point = point
        self.distance =  -1 * math.sqrt(point[0] * point[0] + point[1] * point[1])
  
   # very very imp
   # override the comparison operator 
    def __lt__(self, nxt): 
        return self.distance < nxt.distance 

class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        heap = []

        for point in points:
            heap.append(MyHeap(point))

        hq.heapify(heap)

        while(len(heap) > k) :
            hq.heappop(heap)
        
        result = []

        for obj in heap:
            result.append(obj.point)

        return result