function validChar(char){
    const charUpper = char.toUpperCase()
    if(charUpper === 'A' || charUpper === 'T' || charUpper === 'C' || charUpper === 'G') {
        return true
    }
    return false
}

module.exports = validChar