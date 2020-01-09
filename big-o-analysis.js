// n^2
const testA = [4,8,5,9,1];
const testB = [10,1,4,2,1];

const quadraticComplexity = (nums) => {
    let maxSum = 0;

    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            maxSum = Math.max(maxSum,nums[i] + nums[j]);
        }
    }

    return maxSum;
}

function logComplexity(nums){
    nums = nums.sort((a,b)=> a - b);
    return nums[nums.length - 2] + nums[nums.length-1];
}

const linearComplexity = (nums) => {
    let largestNum = 0;
    let secondLargestNum = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > largestNum) {
            secondLargestNum = largestNum;
            largestNum = nums[i];
        } else if(nums[i] > secondLargestNum) {
            secondLargestNum = nums[i]
        }
    }

    return largestNum + secondLargestNum;
}

console.log(quadraticComplexity(testA));
console.log(quadraticComplexity(testB));
console.log(logComplexity(testA));
console.log(linearComplexity(testA));
console.log(linearComplexity(testB));