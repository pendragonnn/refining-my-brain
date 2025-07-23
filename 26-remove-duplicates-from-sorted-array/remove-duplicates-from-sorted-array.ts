function removeDuplicates(nums: number[]): number {
    if(nums.length == 0) {
        return 0
    }

    for(let i: number = 0; i < nums.length - 1; i++) {
        if(nums[i] == nums[i + 1]) {
            nums.splice(i, 1)
            i--
        }
    }

    return nums.length
};