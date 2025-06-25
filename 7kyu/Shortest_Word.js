findShort = s => 
    s.split(" ")
    .reduce((short, word) => (word.length < short.length) ? short = word : short)
    .length