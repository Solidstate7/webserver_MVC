const Board = require('./board.entity')

const data = []

const latestId = () => {
  const [latestRow] = data.slice(-1)
  if (!latestRow) return 1
  return latestRow.id + 1
}

exports.findAll = () => {
  return data
}

exports.findOne = (id_num) => {
  const [board] = data.filter(row => row.id === id_num)
  return board
}

exports.incrementHit = (id) => {
  const index = data.findIndex(row => row.id === id)
  if(index === -1) return false
  data[index].hit += 1
}

exports.create = (title, writer, content) => {
  const id = latestId()
  const board = new Board(id, title, writer, content)
  data.push(board)

  return board
}

exports.update = (id_num, new_row) => {
  const index = data.findIndex(row => row.id === id_num)
  if (index === -1) return null
  data[index] = {...data[index], ...new_row}
  return data[index]
}

exports.delete = (id_num) => {
  const index = data.findIndex(row => row.id === id_num)
  if (index === -1) return false
  data.splice(index, 1)
  return true
}