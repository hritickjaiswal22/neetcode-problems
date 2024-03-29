We can’t have fixed rules for using BFS or DFS. It totally depends on the problem we are trying to solve. But we can make some general intuition.

# We will prefer to use BFS when we know that our solution might lie closer to the starting point or if the graph has greater depths.

# We will prefer to use DFS when we know our solution might lie farthest from the starting point or when the graph has a greater width.

# If we have multiple starting points and the problem requires us to start traversing all those starting points parallelly then we can think of BFS as we can push all those starting points in the queue and start exploring them first.

# It’s generally a good idea to use BFS if we need to find the shortest distance from a node in the unweighted graph.

# We will be using DFS mostly in path-finding algorithms to find paths between nodes.
