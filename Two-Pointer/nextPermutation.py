from typing import List

class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        n = len(nums)

        if n == 1: return

        flag = True
        for i,num in enumerate(nums):
            if i >= n - 1 : break

            if nums[i + 1] > nums[i]:
                flag = False
                break

        if flag == True :
            nums.reverse()
            return
        
        k = 0
        for i,num in enumerate(nums):
            if i >= n - 1 : break

            if nums[i + 1] > nums[i]:
                k = i
        
        swapIndex = k + 1
        j = k + 1

        while j < n:
            if nums[j] > nums[k] : swapIndex = j
            j += 1
        
        temp = nums[k]
        nums[k] = nums[swapIndex]
        nums[swapIndex] = temp

        l = k + 1
        m = n - 1

        while l < m :
            temp = nums[l]
            nums[l] = nums[m]
            nums[m] = temp

            l += 1
            m -= 1
        
        return
        


        