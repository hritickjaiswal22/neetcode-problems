from typing import List

class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        people.sort()
        low = 0
        high = len(people) - 1
        result = 0

        while low < high:
            if people[low] + people[high] <= limit:
                result += 1
                low += 1
                high -= 1
            else:
                result += 1
                high -= 1
        
        if low == high: result += 1

        return result