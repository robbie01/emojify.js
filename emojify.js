/*
   emojify.js 1.0.0
   by robbie0630
   
   Description:
     converts text into Discord-compatible emojis
   
   PLANNED FEATURES:
   * needs more ES2015
   * needs more ES2016
   * test if argument is a string
   * convert numbers to emojis using a dictionary
   * instead of using the join(' ') kludge, check for regional_indicator conflicts with flag emojis
*/

function emojify(str) {
	return Array.prototype.map.call(str, (e, i, a) => {
		if (/[aA][bB]/.test(e+a[i+1])) {
			return ':ab:';
        } else if (/[oO]/.test(e)) {
			return ':o2:';
        } else if (/[bB]/.test(e)) {
            return ':b:'
        } else if (/[a-zA-Z]/.test(e)) {
			return ':regional_indicator_' + e.toLowerCase() + ':'
    	} else {
			return e;
        }
    }).join(' ');
}