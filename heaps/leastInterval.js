// #include <iostream>
// #include <vector>
// #include <unordered_map>
// using namespace std;

// // Define a struct to hold character and frequency
// struct CharFrequency {
//     char character;
//     int frequency;

//     // Constructor for easy initialization
//     CharFrequency(char ch, int freq) : character(ch), frequency(freq) {}

//     // Overload '<' operator to define comparison for priority_queue
//     bool operator<(const CharFrequency& other) const {
//         // Higher frequency has higher priority
//         return frequency < other.frequency;
//     }
// };

// // Function to convert vector<char>& tasks into a priority queue of CharFrequency objects
// priority_queue<CharFrequency> getCharFrequencyPriorityQueue(const vector<char>& tasks) {
//     // Create an unordered_map to count frequency of each character
//     unordered_map<char, int> frequencyMap;

//     // Count frequencies of each character in tasks
//     for (char ch : tasks) {
//         frequencyMap[ch]++;
//     }

//     // Create a priority_queue to store CharFrequency objects (max heap by default)
//     priority_queue<CharFrequency> pq;

//     // Add CharFrequency objects to priority_queue
//     for (auto pair : frequencyMap) {
//         CharFrequency cf(pair.first, pair.second);
//         pq.push(cf); // Push CharFrequency into priority_queue
//     }

//     return pq;
// }

// class Solution {
// public:
//     int leastInterval(vector<char>& tasks, int n) {
//         priority_queue<CharFrequency> charFrequenciesPQ = getCharFrequencyPriorityQueue(tasks);
//         int result = 0;
//         int k = 0;
//         vector<CharFrequency> temp;
//         unordered_set<char> charSet;

//         while (!charFrequenciesPQ.empty() && !temp.empty()) {
//             if(charFrequenciesPQ.empty()) {
//                 result++;
//                 k++;
//             } else {
//             CharFrequency cf = charFrequenciesPQ.top();
//             charFrequenciesPQ.pop(); // Remove the top element

//             charSet

//             temp.push(cf)

//             }
//         }

//         return 0;
//     }
// };
