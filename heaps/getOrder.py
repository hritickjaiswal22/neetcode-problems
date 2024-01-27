import heapq as hq
from typing import List

class MyHeap: 
  # constructor 
    def __init__(self,enqueueTime,processingTime,index):
        self.enqueueTime = enqueueTime
        self.processingTime = processingTime
        self.index = index
  
   # very very imp
   # override the comparison operator 
    def __lt__(self, nxt): 
        if(self.processingTime != nxt.processingTime): 
            return self.processingTime < nxt.processingTime
        
        return self.index < nxt.index

class Solution:
    def getOrder(self, tasks: List[List[int]]) -> List[int]:
        sortedList = []
        heap = []
        result = []
        i = 0

        for i in range(len(tasks)):
            sortedList.append((tasks[i][0],tasks[i][1],i))

        sortedList = sorted(sortedList, key=lambda x: (x[0], x[1]))

        i = 0
        hq.heappush(heap,MyHeap(sortedList[0][0],sortedList[0][1],sortedList[0][2]))
        i = 1

        while (len(heap) > 0):
            obj = hq.heappop(heap)

            result.append(obj.index)

            while(i < len(sortedList) and obj.enqueueTime + obj.processingTime >= sortedList[i][0]):
                hq.heappush(heap,MyHeap(sortedList[i][0],sortedList[i][1],sortedList[i][2]))
                i += 1
        
        return result
    
print(Solution().getOrder(
    [[19,13],[16,9],[21,10],[32,25],[37,4],[49,24],[2,15],[38,41],[37,34],[33,6],[45,4],[18,18],[46,39],[12,24]]
))

# [[19,13],[16,9],[21,10],[32,25],[37,4],[49,24],[2,15],[38,41],[37,34],[33,6],[45,4],[18,18],[46,39],[12,24]]

