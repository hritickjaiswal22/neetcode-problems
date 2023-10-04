from typing import List

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        unorderedMap = {}

        for num in nums:
            if(unorderedMap.get(num) == None) : unorderedMap.__setitem__(num,True)
            else : return True
        
        return False

