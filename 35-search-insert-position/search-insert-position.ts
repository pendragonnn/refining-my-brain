function searchInsert(nums: number[], target: number): number {
    const index = nums.indexOf(target)

    if(index !== -1) {
        return index
    } else {
        nums.push(target)
        nums.sort((a, b) => a - b)

        const index = nums.indexOf(target)

        return index
    }

   
};