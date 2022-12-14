const dayOfTheProgrammer = (year: number): string => {
  const isJulian = year < 1918
  const isLeapYear = (y: number) => {
    if (isJulian) {
      return y % 4 === 0
    }
    return y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0)
  }
  const isLeap = isLeapYear(year)
  if (year === 1918) {
    return `26.09.${year}`
  }
  if (isLeap) {
    return `12.09.${year}`
  }
  return `13.09.${year}`
}
