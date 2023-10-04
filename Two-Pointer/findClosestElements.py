from typing import List
import sys

class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        n = len(arr)
        minDiff = sys.maxsize
        minIndex = -1
        left = []
        right = []

        for i,num in enumerate(arr):
            if abs(num - x) < minDiff:
                minIndex = i
                minDiff = abs(num - x)

        i = minIndex - 1
        j = minIndex + 1
        k = k - 1

        while k > 0:
            if i >= 0 and (j >= n or abs(x - arr[i]) <= abs(x - arr[j])):
                left.append(arr[i])
                i -= 1
            elif j < n and (i < 0 or abs(x - arr[j]) < abs(x - arr[i])):
                right.append(arr[j])
                j += 1
            k -= 1


        result = []
        left.reverse()

        for val in left:
            result.append(val)
        result.append(arr[minIndex])
        for val in right:
            result.append(val)

        return result




        