/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        var left = 1
        var right = n
        var mid
        while (left < right) {
            mid = left + ((right - left) >> 1)//题目中有整数溢出的情况
            if (isBadVersion(mid) === false)
                left = mid + 1
            else
                right = mid
        }
        return left
    };
};

