# Daily Coding Problem #2
# Given an array of integers, return a new array such that each element at
# index 'i' of the new array is the product of all the numbers in the original
# array except the one at 'i'
# Example: [1, 2, 3, 4, 5] => [120, 60, 40, 30, 24]
# [3, 2, 1] => [2, 3, 6]


from functools import reduce


def with_division(nums):
    total = reduce(lambda x, y: x * y, nums)
    return [total // x for x in nums]


def without_division(nums):
    tots = []
    for index, num in enumerate(nums):
        t = 1
        for j, n in enumerate(nums):
            if index == j:
                continue
            t *= n
        tots.append(t)
    return tots


test_nums = [1, 2, 3, 4, 5]
test_two = [3, 2, 1]
print(with_division(test_nums))
print(with_division(test_two))
print(without_division(test_nums))
print(without_division(test_two))
