# TRYAGAIN

from typing import List

class Solution:
    def threeSumMulti(self, arr: List[int], target: int) -> int:
        n = len(arr)
        result = 0

        arr.sort()

        for i,val in enumerate(arr):
            if(i >= n - 2) : break
            
            sum = self.twoSum(arr,i + 1,len(arr) - 1,target - arr[i])
            result += sum
        
        return result

    def twoSum(self,arr: List[int], start : int,end : int, target: int)-> int:
        low = start
        high = end
        result = 0

        while low < high:
            sum = arr[low] + arr[high]

            if sum == target:
                i = low

                while i < high and arr[i] == arr[low]:
                    j = high

                    while i < j and arr[j] == arr[high]:
                        result += 1
                        j -= 1
                    
                    i += 1
                
                low = i
                

            elif sum > target : high -= 1
            else : low += 1
        
        return result
                

