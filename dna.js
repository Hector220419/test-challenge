/*
    2. Write a function that takes in a DNA string (for example 'CTAGGGTA') and returns a new string with any non-canonical DNA base values removed. Canonical base values are single characters: 'C', 'T', 'A', and 'G' only. Make the function case sensitive - meaning 'c' (lower case) should be removed from the string, but 'C' (upper case) is a good value and should remain. If the DNA string is empty, just return an empty string.
*/

function dnaNonCanonical(dna){
    let array1 = dna.toUpperCase().split('');
    let array2;
    let string = '';
    if(array1.length > 0){
        array2 = array1.filter((value, i) => array1.indexOf(value) === i);
        string = array2.toString().replace(/,/g,'');
        return string;
    }
    else{
        return string;
    }
}

module.exports = {dnaNonCanonical};
