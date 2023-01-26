#include <stdio.h>

int test(int n)
{
    if (n >= 10)
    {
        return test(n - 1);
    }
    else
    {
        return 2 * n - 1;
    }
}

int main()
{
    int result = test(99);
    printf("%d\n", result);
    return 0;
}
