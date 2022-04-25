function hasMOreVowles(word) {
    let vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u',];
    let wordSplit = word.toLowerCase().split('');
    let moreVowels = word.length / 2;
    

    for(let i = 0; i < word.length; i++) {
      let letters = wordSplit[i];
      if(vowels.includes(letters)){
          vowelsCount++
      }
    }

if(vowelsCount > moreVowels){
    return true
}
    return false
}
console.log(hasMOreVowles('OOlo'))