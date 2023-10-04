from typing import List

class Solution:
    def nextGreaterElement(self, n: int) -> int:
        arr = [int(x) for x in str(n)]

        return self.nextPermutation(arr)
    
    def nextPermutation(self, nums: List[int]) -> int:
        n = len(nums)

        if n == 1: return -1

        flag = True
        for i,num in enumerate(nums):
            if i >= n - 1 : break

            if nums[i + 1] > nums[i]:
                flag = False
                break

        if flag == True :
            return -1
        
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

        s = [str(i) for i in nums]
        res = int("".join(s))

        if res > 2**31 -1 : return -1
        
        return res