from typing import List
# class Solution(object):
#     def findDuplicate(self, nums):
#         # 抽屉原理
#         n = len(nums)-1
#         left = 1
#         right = n
#         mid = (left+right) >> 1  # 二进制向右移动一位 相当于除以二并向下取整
#         while(left < right):
#             cnt = 0
#             for i in nums:
#                 if i <= mid and i >= left:
#                     cnt += 1
#             if cnt > (mid-left+1):
#                 right = mid
#             else:
#                 left = mid+1  # cnt没问题，说明mid这个抽屉也没问题，所以跳过mid
#             mid = (left+right) >> 1
#         return left


class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        size = len(nums)
        left = 1
        right = size - 1

        while left < right:
            mid = (left + right) >> 1

            cnt = 0
            for num in nums:
                if num <= mid:
                    cnt += 1
            # 根据抽屉原理，小于等于 4 的数的个数如果严格大于 4 个，
            # 此时重复元素一定出现在 [1, 4] 区间里

            if cnt > mid:
                # 重复的元素一定出现在 [left, mid] 区间里
                right = mid
            else:
                # if 分析正确了以后，else 搜索的区间就是 if 的反面
                # [mid + 1, right]
                left = mid + 1
        return left


sol = Solution()
array = [3, 1, 2, 4, 5, 8, 9, 7, 5, 6]
dup = sol.findDuplicate(array)
print(dup)
