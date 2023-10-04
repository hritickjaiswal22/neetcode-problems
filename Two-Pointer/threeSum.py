# Do REVISE THIS IS HARD

from typing import List

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        i = 0
        result = []

        nums.sort()

        while(i < n - 2):
            pairs = self.twoSum(nums,i + 1,n - 1,-1 * nums[i])

            for pair in pairs:
                pair.insert(0,nums[i])
                result.append(pair)
            
            j = i
            while(j < n - 2 and nums[j] == nums[i]): j += 1

            i = j
        
        return result


    def twoSum(self,nums: List[int],start : int,end : int,target : int) -> List[List[int]] :
        low = start
        high = end
        result = []

        while(low < high):
            sum = nums[low] + nums[high]

            if sum == target :
                result.append([nums[low],nums[high]])
                
                j = low
                while(j < high and nums[j] == nums[low]) : j+= 1
                low = j

                k = high
                while(low < k and nums[k] == nums[high]) : k -= 1
                high = k

            elif sum > target : high -= 1
            else : low += 1
        
        return result