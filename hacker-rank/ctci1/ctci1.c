#include <stdio.h>
#include <stdlib.h>

int
main() {
    int n; // Number of integers in array
    int k; // Number of left rotations
    
    scanf("%d %d", &n, &k); // Read input from stdin and assign

    int *a = malloc(sizeof(int) * n); // Create array

    int rotations = k % n;

    // Assign numbers to array
    for (int a_i = 0; a_i < n; a_i++) {
        scanf("%d", &a[(a_i + (n - rotations)) % n]); 
    }
    
    for (int b = 0; b < n; b++) {
        printf("%d ", a[b]);
    } 
    printf("\n");

    return 0;
}
