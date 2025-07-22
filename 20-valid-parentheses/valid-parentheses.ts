function isValid(s: string): boolean {
    const stack: string[] = []
    const bracketMap: {[key: string]: string} = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }


    // case example: "()]"
    for(const char of s) {
        // looping 1: char = "("
        // looping 2: char = ")"
        // looping 3: char = "]"
        if(char in bracketMap) {
            // looping 1: char = "(" ==> false
            // looping 2: char = ")" ==> true
            // looping 3: char = "]" ==> true
            const top = stack.pop() ?? "#"
            // looping 2: top = "("
            // looping 3: top = "#"
            if(top != bracketMap[char]) {
                // looping 3: (( top = "#")) != (( bracketMap[char] = "[")) ==> true
                return false
                // return false
            }
        } else {
            // looping 1: stack = ["("]
            stack.push(char)
        }
    }

    return stack.length === 0
};