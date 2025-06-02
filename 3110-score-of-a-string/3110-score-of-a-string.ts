function scoreOfString(s: string): number {
    let score = 0;
    for (let i = 1; i < s.length; i++) {
       const diff = Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
        score += diff;
    }
    return score;
};