/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    
    const [a, b, c] = nums;

    if (a + b <= c || a + c <= b || b + c <= a) {
        return "none";
    }

    const uniqueSides = new Set(nums).size;

    switch (uniqueSides) {
        case 1:
            return "equilateral";
        case 2:
            return "isosceles";
        case 3:
            return "scalene";
    }
};