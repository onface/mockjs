/*
    ## Contact
*/

module.exports = {
    // China mobile phone number
    cmobile: function () {
        var prefix = [
            130,131,132,155,156,186,185,176,134,135,
            136,137,138,139,150,151,152,157,158,159,
            182,183,184,188,187,147,178,133,153,180,
            181,189,177
        ]
        return parseInt(this.pick(prefix) + String(this.integer(0,99999999)).padStart('0'))
	}
}
