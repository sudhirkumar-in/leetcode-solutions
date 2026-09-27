function decodeMessage(key: string, message: string): string {
    let freq = new Map();

    let i = 0;
    for (const k of key) {
        if(k == ' ') continue;
        
        if (!freq.has(k)) {
            const chCode = 'a'.charCodeAt(0) + i;
            const ch = String.fromCharCode(chCode)
            freq.set(k, ch);
            i++;
        }
    }
    console.log(freq)
    let res = ''
    for (const m of message) {
        res += freq.get(m) ?? ' ';
    }
    return res;
};