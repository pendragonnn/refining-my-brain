function containsDuplicate(nums: number[]): boolean {
    
   const sortedArray = nums.sort((a, b) => a - b)

   for(let i: number = 0; i < sortedArray.length - 1; i++) {
        if(sortedArray[i] == sortedArray[i + 1]) {
            return true
        }
   }

   return false

};