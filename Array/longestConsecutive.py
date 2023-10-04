from typing import List

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        unorderedMap = {}
        result = 1

        for num in nums:
            unorderedMap[num] = False
        
        for num in nums:
            if num - 1 in unorderedMap: unorderedMap[num] = True

        for num in unorderedMap:
            if unorderedMap[num] == False:
                count = 1
                val = num + 1

                while unorderedMap.get(val) == True:
                    count += 1
                    val += 1
                
                result = max(result,count)

        return result