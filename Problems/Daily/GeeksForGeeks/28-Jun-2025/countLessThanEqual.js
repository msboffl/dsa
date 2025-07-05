// 1. Brute Force Approach
function countLessEqualBrute(a, b) {
    var ans = [];
    for (var i = 0; i < a.length; i++) {
        var count = 0;
        for (var j = 0; j < b.length; j++) {
            if (b[j] <= a[i])
                count++;
        }
        ans.push(count);
    }
    return ans;
}
// 2. Sorting Approach
function countLessEqualSort(a, b) {
    function binarySearch(b, element) {
        var ans = -1;
        var left = 0;
        var right = b.length - 1;
        while (left <= right) {
            var mid = Math.floor(left + (right - left) / 2);
            if (b[mid] <= element) {
                ans = mid;
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        return ans + 1;
    }
    var ans = [];
    b.sort(function (x, y) { return x - y; });
    for (var i = 0; i < a.length; i++) {
        var element = a[i];
        var count = binarySearch(b, element);
        ans.push(count);
    }
    return ans;
}
var a = [4, 8, 7, 5, 1];
var b = [4, 48, 3, 0, 1, 1, 5];
// console.log(countLessEqualBrute(a, b));
console.log(countLessEqualSort(a, b));
