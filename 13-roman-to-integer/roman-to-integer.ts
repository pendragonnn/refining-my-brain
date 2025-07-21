function convertRomanToInt(x: string): number {
    const romanToIntMap = new Map<string, number>([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000]
    ])

    return romanToIntMap.get(x)
}

function romanToInt(s: string): number {

    if(s.length == 0) {
        return 0;
    }

    let result: number = 0
    let nextNumber: number
    let currentNumber: number = 0

    // IV
    for(let i: number = 0; i < s.length; i++) {
        currentNumber= convertRomanToInt(s[i])
        // looping 1: currentNumber = 1 
        nextNumber = -1

        // looping 1: i = 0
        // looping 1: s.length = 2
        if(i+1 <= s.length - 1) {
            // looping 1: i+1 = 1, s.length - 1 = 1 ==> true
            nextNumber = convertRomanToInt(s[i+1])
            // looping 1: nextNumber = 5
        }

        if(nextNumber > currentNumber) {
            currentNumber = nextNumber - currentNumber
            i++
        }

        result += currentNumber
    }

    return result
};