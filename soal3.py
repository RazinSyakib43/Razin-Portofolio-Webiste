def test(n, lastResult):
    i = n
    r = ""
    isFound = ""
    while i >= 0:
        j = i
        isFound = "0"
        while j >= 0:
            if (i + j) % (n*n) == 0:
                isFound = "1"
                break
            j -= 1
        r += isFound
        i -= 1

    lastResult += r
    n -= 1

    if n > 0:
        return test(n, lastResult)
    else:
        return lastResult

result = test(2, "1")
print(result)
