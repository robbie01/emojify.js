/*
   emojify.js 0.2.1
   by robbie0630
   
   Notes:
     Expect breaking changes
   
   Description:
     converts text into Discord-compatible emojis
   
   PLANNED FEATURES:
   * switch/case for readability
   * convert numbers to emojis using a dictionary
*/

function emojify(str) {
	if (typeof str === 'string') {
		return Array.prototype.map.call(str, (e, i, a) => {
			if (/[aA][bB]/.test(e+a[i+1])) {
				return ':ab:';
			} else if (/[oO]/.test(e)) {
				return ':o2:';
			} else if (/[aA]/.test(e)) {
				return ':a:';
			} else if (/[bB]/.test(e)) {
				if (/[aA]/.test(a[i-1])) {
					return;
				} else {
					return ':b:';
				}
			} else if (/[a-zA-Z]/.test(e)) {
				return ':regional_indicator_' + e.toLowerCase() + ':'
			} else {
				return e;
			}
		}).join('\u200C');
	} else {
		throw new TypeError('argument is not a string');
	}
}
