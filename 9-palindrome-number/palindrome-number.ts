function isPalindrome(x: number): boolean {
    const fromNumber = x.toString()

    let left = 0
    let right = fromNumber.length - 1

    while(left < right) {
        if(fromNumber[right] != fromNumber[left]) {
            return false
        }

        right--
        left++
    }

    return true
};