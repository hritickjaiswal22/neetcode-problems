import heapq as hq
from typing import List

class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        if(n == 0):
            return len(tasks)
      
        temp = [0] * 26
        heap = []
        result = 0
        cooldown = n + 1

        for task in tasks:
            temp[ord(task) - 65] += 1

        for val in temp:
            if (val > 0):
                hq.heappush(heap,-1 * val)

        temp = []

        while (len(heap) > 0 or len(temp) > 0):
            wasInserted = False

            if (len(heap) > 0):
                result += 1
                cooldown -= 1
                val = hq.heappop(heap)
                wasInserted = True
                
                if(val + 1 != 0):
                  temp.append(val + 1)

            if(len(temp) > 0 and cooldown > 0 and wasInserted == False) :
                cooldown -= 1
                result += 1
            
            if (cooldown == 0):
                cooldown = n + 1
                while(len(temp) > 0):
                      hq.heappush(heap,val + 1)
        
        return result