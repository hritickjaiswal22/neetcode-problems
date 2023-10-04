from typing import List

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        low = 0
        high = len(numbers) - 1

        while(low < high):
            sum = numbers[low] + numbers[high]
            if sum == target : return [low + 1,high + 1]
            elif sum > target : high -= 1
            else : low += 1
        