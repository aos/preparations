# Daily Coding Problem #1
# Given a list of numbers and a number 'k', return whether any two numbers from
# from the list add up to 'k'
# Example: [10, 15, 3, 7], k: 17 => true (10 + 7 == 17)


def two_sum(nums, k):
    s = set()
    for i in nums:
        if (k - i) in s:
            return True
        s.add(i)

    return False


nums_test = [10, 15, 1, 7]
k_test = 16
print(two_sum(nums_test, k_test))
