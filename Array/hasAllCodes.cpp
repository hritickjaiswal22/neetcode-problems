#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    bool hasAllCodes(string s, int k)
    {
        if (k >= s.length())
            return false;

        map<string, bool> hash;

        for (int i = 0; i <= s.length() - k; i++)
        {
            string temp = s.substr(i, k);

            hash[temp] = true;
        }

        if (hash.size() == pow(2, k))
            return true;

        return false;
    }
};