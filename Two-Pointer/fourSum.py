from typing import List

class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        n = len(nums)
        result = []
        i = 0

        nums.sort()

        while (i < n - 3):
            j = i + 1

            while(j < n - 2):
                pairs = self.twoSum(nums,j + 1,n - 1,target - nums[i] - nums[j])

                for pair in pairs:
                    pair.insert(0,nums[j])
                    pair.insert(0,nums[i])
                    result.append(pair)
                
                k = j
                while(k < n - 2 and nums[k] == nums[j]): k += 1

                j = k
            
            l = i
            while(l < n - 3 and nums[l] == nums[i]): l += 1
            i = l
        
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