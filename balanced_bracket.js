function isBalanced(s) {
    const input = s.split('');

    const bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    let stack = [];
    for (const char of input) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            const last = stack.pop();
            if (bracketMap[last] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isBalanced("([)]"))
