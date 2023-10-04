# O(n) time and space complexity Solution is easy using suffix array

# Right Solution 
# from typing import List

# class Solution:
#     def trap(self, height: List[int]) -> int:
#         n = len(height)
#         lmax = height[0]
#         rmax = height[n - 1]
#         lpos = 1
#         rpos = n - 2
#         result = 0

#         while lpos <= rpos:
#             if height[lpos] >= lmax : 
#                 lmax = height[lpos]
#                 lpos += 1
#             elif height[rpos] >= rmax :
#                 rmax = height[rpos]
#                 rpos -= 1
#             elif rmax >= lmax and lmax > height[lpos]:
#                 result += lmax - height[lpos]
#                 lpos += 1
#             else :
#                 result += rmax - height[rpos]
#                 rpos -= 1
            
#         return result

# WHAT I ARRIVED AT ON MY OWN
# AND IT IS RIGHT !!!!!!!!!!!!!!!

from typing import List

class Solution:
    def trap(self, height: List[int]) -> int:
        n = len(height)
        lmax = height[0]
        rmax = height[n - 1]
        lpos = 1
        rpos = n - 2
        result = 0

        while lpos <= rpos:
            if lmax <= rmax:

                if lmax > height[lpos] : result += lmax - height[lpos]

                lmax = max(lmax,height[lpos])
                lpos += 1
            else :

                if rmax > height[rpos] : result += rmax - height[rpos]

                rmax = max(rmax,height[rpos])
                rpos -= 1
            
        return result