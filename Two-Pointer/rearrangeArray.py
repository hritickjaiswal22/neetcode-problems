# THIS IS A VERY TRICKY QUESTION
# If arr[i] is equal to the average of its neighbors then of course one neighbor will be larger and one smaller.
# For Ex:-
# arr[i] = (arr[i-1]+arr[i+1])/2, then
# arr[i-1] < arr[i] < arr[i+1] or
# arr[i-1] > arr[i] > arr[i+1]

# Just break this situation.

# WE CAN DO THIS MY MAKING SURE NEIGHBOURS ARE ALWAYS SMALLER THAN ELEMENT
# SIMPLE BUT TRICKY

from typing import List

class Solution:
    def rearrangeArray(self, nums: List[int]) -> List[int]:
        n = len(nums)
        result = [0] * n
        j = 0
        k = 0

        nums.sort()

        while j < n:
            result[j] = nums[k]
            j += 2
            k += 1
        
        j = 1
        
        while k < n:
            result[j] = nums[k]
            j += 2
            k += 1
        
        return result

