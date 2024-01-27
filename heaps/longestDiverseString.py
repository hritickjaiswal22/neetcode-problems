import heapq as hq
from typing import List

class MyHeap: 
  # constructor 
    def __init__(self,char,value): 
        self.char = char
        self.value = -1 * value
  
   # very very imp
   # override the comparison operator 
    def __lt__(self, nxt): 
        return self.value < nxt.value 

class Solution:
    def longestDiverseString(self, a: int, b: int, c: int) -> str:
        heap = []
        result = ""

        if(a != 0):
            hq.heappush(heap,MyHeap("a",a))
        if(b != 0):
            hq.heappush(heap,MyHeap("b",b))
        if(c != 0):
            hq.heappush(heap,MyHeap("c",c))

        while(True):
            isInserted = False
            temp = []

            while(len(heap) > 0):
                rLen = len(result)
                obj = hq.heappop(heap)

                if (rLen >= 2 and result[rLen - 1] == obj.char and result[rLen - 2] == obj.char):
                    pass
                else:
                    result = result + obj.char
                    obj.value = obj.value + 1
                    isInserted = True

                if(obj.value != 0):
                    temp.append(obj)
                
                if(isInserted):
                    break
            
            if(isInserted == False):
                break

            while(len(temp) > 0):
                hq.heappush(heap,temp.pop())
        
        return result


                



