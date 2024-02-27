import heapq as hq
from typing import List
import sys

class TwitterUser:
    def __init__(self,userId: int):
        self.userId = userId
        self.tweets = []

class Tweet:
    def __init__(self, userId: int, tweetId: int,index : int):
        self.userId = userId
        self.tweetId = tweetId
        self.index = index
    
    # very very imp
    # override the comparison operator 
    def __lt__(self, nxt): 
        return self.index < nxt.index

class Twitter:

    def __init__(self):
        self.users = {}
        self.followerMap = {}
        self.tweetCount = sys.maxsize

    def postTweet(self, userId: int, tweetId: int) -> None:
        if(self.users.get(userId) != None):
            pass
        else:
            self.users[userId] = TwitterUser(userId)

        temp = self.tweetCount
        hq.heappush(
                self.users.get(userId).tweets,
                Tweet(userId, tweetId,temp)
        )
        self.tweetCount -= 1

        if(self.followerMap.get(userId) != None):
            userFollwersDict = self.followerMap.get(userId)

            for user in userFollwersDict:
                if(self.users.get(user) != None):
                    hq.heappush(
                        self.users.get(user).tweets,
                        Tweet(userId, tweetId,temp)
                    )

    def getNewsFeed(self, userId: int) -> List[int]:
        temp = []
        result = []

        if(self.users.get(userId) != None):
            tweets = self.users.get(userId).tweets

            while(len(tweets) > 0 and len(temp) < 10):
                tweet = hq.heappop(tweets)
                
                if(tweet.userId == userId or tweet.userId in self.followerMap.get(userId)):
                    temp.append(tweet)

            while(len(temp) > 0):
                tweet = temp.pop()
                result.append(tweet.tweetId)
                hq.heappush(tweets,tweet)
            
            return result
        else:
            return []

    def follow(self, followerId: int, followeeId: int) -> None:
        if(self.followerMap.get(followeeId) == None):
            self.followerMap[followeeId] = {}
        
        followeeMap = self.followerMap.get(followeeId)
        followeeMap[followerId] = True

    def unfollow(self, followerId: int, followeeId: int) -> None:
        if(self.followerMap.get(followeeId) != None):
            followeeMap = self.followerMap.get(followeeId)
            followeeMap.pop(followerId,None)

# Your Twitter object will be instantiated and called as such:
# obj = Twitter()
# obj.postTweet(userId,tweetId)
# param_2 = obj.getNewsFeed(userId)
# obj.follow(followerId,followeeId)
# obj.unfollow(followerId,followeeId)