class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        arr1  = [0 for _ in range(26)]
        arr2  = [0 for _ in range(26)]

        for char in s :
            arr1[ord(char) - 97] += 1

        for char in t:
            arr2[ord(char) - 97] += 1

        for i,val in enumerate(arr1):
            if(arr1[i] != arr2[i]) : return False
        
        return True


# The unicode value of a char in python is ord(char)
# count = [0] * 26