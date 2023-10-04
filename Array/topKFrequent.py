# first we store the frequency of numbers in a hash then to find 
# key : freq
# then to find the top k elements with highest freuency we can 

# 1 sort hash  
# 2 use max heap to find top k elements
# the above approach will lead to nlog(n)
# OR
# use BUCKET SORT AND create an array of size n + 1
# and each index of the array will store a LIST 
# list consists of element whose frequecy was index 

# e.g.
# [1,1,1,2,2,3,4,4,4]

# {
#     1 : 3,
#     2:2,
#     3:1
#     4 : 3
# }

# then bucket = [,[3],[2],[1,4],[],[],[]]
# no pick up k frequent elements

from typing import List

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}
        freq = [[] for i in range(len(nums) + 1)]

        for n in nums:
            count[n] = 1 + count.get(n, 0) # default value via get
        for n, c in count.items():
            freq[c].append(n)

        res = []
        for i in range(len(freq) - 1, 0, -1):
            for n in freq[i]:
                res.append(n)
                if len(res) == k:
                    return res

        # O(n)