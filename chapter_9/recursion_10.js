// Write a recursive function that returns all anagrams of a string (even if the anagrams aren’t words themselves). 
// For example, the anagrams of cat are cat, cta, act, atc, tac, tca.

findAnagrams = string => {
  if (string.length <= 1) return [string] // base case

  let anagrams = []
  for (let i = 0; i < string.length; i++) {
    const start = string[i]
    const nonStart = string.slice(0, i) + string.slice(i + 1)
    const nonStartAnagrams = findAnagrams(nonStart) // recursion
    nonStartAnagrams.forEach(anagram => anagrams.push(start + anagram))
  }
  return anagrams
}

console.log(findAnagrams('cat')) // [ 'cat', 'cta', 'act', 'atc', 'tca', 'tac' ]