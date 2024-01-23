import heapq as hq
from typing import List

class MyHeap: 
  # constructor 
    def __init__(self,tweetId,index): 
        self.tweetId = tweetId
        self.index = -1 * index
  
   # very very imp
   # override the comparison operator 
    def __lt__(self, nxt): 
        return self.index < nxt.index 
    
class TwitterUser:
    def __init__(self):
        self.tweets = []

class Twitter:

    def __init__(self):
        self.tweetCount = 1
        self.users = {}
        self.followedBy = {}

    def postTweet(self, userId: int, tweetId: int) -> None:
        temp = self.tweetCount
        self.tweetCount += 1

        if (userId in self.users):
            pass
        else :
            newUser = TwitterUser()
            self.users[userId] = newUser

        hq.heappush(self.users[userId].tweets,MyHeap(tweetId,temp))

        obj = self.followedBy[userId]

        if(obj != None):
            for followee in obj:
                if(self.users[followee] != None):
                    hq.heappush(self.users[followee].tweets,MyHeap(tweetId,temp)) 

    def getNewsFeed(self, userId: int) -> List[int]:
        if(self.users[userId] == None): 
            return []
        
        result = []
        count = 0
        temp = []

        while(len(self.users[userId].tweets) or count < 10):
            tweetObj = hq.heappop(self.users[userId].tweets)
            temp.append(tweetObj)
            result.append(tweetObj.tweetId)
            count += 1
        
        while(len(temp) > 0):
            obj = temp.pop()
            hq.heappush(self.users[userId].tweets,obj)
        
        return result

    def follow(self, followerId: int, followeeId: int) -> None:
        obj = self.followedBy[followeeId]

        if(obj != None):
            obj[followerId] = True
        else :
            temp = {}
            temp[followerId] = True
            self.followedBy[followeeId] = temp

    def unfollow(self, followerId: int, followeeId: int) -> None:
        del self.followedBy[followeeId][followerId]


# Your Twitter object will be instantiated and called as such:
# obj = Twitter()
# obj.postTweet(userId,tweetId)
# param_2 = obj.getNewsFeed(userId)
# obj.follow(followerId,followeeId)
# obj.unfollow(followerId,followeeId)