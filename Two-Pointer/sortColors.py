from typing import List

class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        low = 0
        mid = 0
        high = n - 1

        while mid <= high:
            if nums[mid] == 2:
                self.swap(nums,mid,high)
                high -= 1
            elif nums[mid] == 1:
                mid += 1
            else :
                self.swap(nums,mid,low)
                low += 1
        
    def swap(self,nums: List[int],i : int,j : int)-> None:
        temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
        