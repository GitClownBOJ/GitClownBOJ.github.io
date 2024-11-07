#include <stdio.h>

char *function_strcat(char *dest, char *src) {
    char *ptr = dest;
    while (*ptr != '\0') {
        ptr++;
    }
    while (*src != '\0') {
        *ptr++ = *src++;
    }
    *ptr = '\0';
    return dest;
}

int main(void) {
    char dest[50] = "I made this file ";
    char src[100] = "only for Collin.";
    printf("Before function: %s\n", dest);
    function_strcat(dest, src);
    printf("After function: %s\n", dest);
    return 0;
}