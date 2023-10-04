from typing import List

class Solution:
    def bagOfTokensScore(self, tokens: List[int], power: int) -> int:
        n = len(tokens)

        if n == 0 : return 0

        low = 0
        high = n - 1
        score = 0

        tokens.sort()

        while low < high:
            if power >= tokens[low]:
                score += 1
                power -= tokens[low]
                low += 1
            else:
                if score < 1 : break
                else :
                    score -= 1
                    power += tokens[high]
                    high -= 1
        
        if power >= tokens[low] : score += 1

        return score