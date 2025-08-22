function rgb(r, g, b) {
  const hexColor = num => 
    num < 0 ? '00' : num < 16 ? num.toString(16).repeat(2) : num < 255 ? num.toString(16) : 'FF'
  return `${hexColor(r)}${hexColor(g)}${hexColor(b)}`.toUpperCase()
}

console.log(rgb(0, 0, 0))