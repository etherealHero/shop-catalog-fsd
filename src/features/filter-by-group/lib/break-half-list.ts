export const breakHalfList = (title: string): [string, string] => {
  const titleList = title.split(" ")

  if (titleList.length == 2) {
    return [titleList[0], titleList[1]]
  }

  let cutFrom = 0

  titleList.reduce((prev, word, idx) => {
    if (prev <= title.length / 2) cutFrom = idx
    return prev + word.length
  }, 0)

  const leftSide = titleList.slice(0, cutFrom).join(" ")
  const rightSide = titleList.slice(cutFrom).join(" ")

  return [leftSide, rightSide]
}
