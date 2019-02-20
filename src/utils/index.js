export const padLeft = n => {
  return n < 10 ? '0' + n : n
}

export const padItemId = n => {
  return 'i' + (n + '').padStart(4, 0)
}

export const range = (size, startAt = 0) => {
  const arr = []
  for (let i = 0; i < size; i++) {
    arr[i] = startAt + i
  }
  return arr
}

export const parseToYearAndMonth = str => {
  const date = str ? new Date(str) : new Date()
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1
  }
}

export const newDate = () => {
  const date = new Date()
  return `${date.getFullYear()}-${padLeft(date.getMonth() + 1)}-${date.getDate()}`
}
