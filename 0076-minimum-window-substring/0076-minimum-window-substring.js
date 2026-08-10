/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const need = new Map();
    const window = new Map();

    for (const ch of t) {
        need.set(ch, (need.get(ch) ?? 0) + 1);
    }

    let left = 0;
    let formed = 0;
    const required = need.size;

    let bestLen = Infinity;
    let bestStart = 0;

    for (let right = 0; right < s.length; right++) {

        const ch = s[right];

        if (need.has(ch)) {
            const count = (window.get(ch) ?? 0) + 1;
            window.set(ch, count);

            if (count === need.get(ch)) {
                formed++;
            }
        }

        while (formed === required) {

            const len = right - left + 1;

            if (len < bestLen) {
                bestLen = len;
                bestStart = left;
            }

            const leftCh = s[left];

            if (need.has(leftCh)) {
                const leftVal = window.get(leftCh);
                const newCount = leftVal - 1;

                window.set(leftCh, newCount);

                if (newCount < need.get(leftCh)) {
                    formed--;
                }
            }

            left++;
        }
    }

    return bestLen === Infinity
        ? ""
        : s.substring(bestStart, bestStart + bestLen);
};
/*
Complete mental algorithm

Memorize this:

1. Build need from t

2. right expands

3. Add s[right] to window

4. If this character just satisfied
   its required frequency:
       formed++

5. If:
       formed === required

   window is valid

6. While valid:
       record minimum
       remove s[left]
       if removing breaks a requirement:
           formed--
       left++

7. Continue expanding right

8. Return smallest window
🧠 The pattern in one picture
                 RIGHT
                   ↓
s:  A D O B E C O D E B A N C
    └─────────────┘
        WINDOW

       expand →
           │
           ↓
     become VALID
           │
           ↓
     record answer
           │
           ↓
     shrink LEFT
           │
           ↓
    still VALID?
      ↙       ↘
    YES        NO
     ↓          ↓
 shrink       expand right
 again
⭐ The 5 things to remember

If you forget everything else, remember these:

① need
What do I require?
② window
What do I currently have?
③ formed
How many requirements have I satisfied?
④ Valid
formed === required
⑤ Minimum window
while (formed === required) {
    update answer;
    remove left;
    left++;
}

*/