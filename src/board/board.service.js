const boardRepository = require('./board.repository')

exports.create = (data) => {
  const {title, writer, content} = data
  const result = boardRepository.create(title, writer, content)
  return result
}

exports.specifyView = (id) => {
  const id_num = parseInt(id)
  const result = boardRepository.findOne(id_num)
  boardRepository.incrementHit(id_num)
  return result
}

exports.specify = (id) => {
  const id_num = parseInt(id)
  const result = boardRepository.findOne(id_num)
  return result
}

exports.fetchAll = () => {
  const result = boardRepository.findAll()
  return result
}

exports.modify = (id, new_row) => {
  const id_num = ~~id
  const updated = boardRepository.update(id_num, new_row)
  return updated
}

exports.delete = (id) => {
  const id_num = ~~id
  const deleted = boardRepository.delete(id_num)
  return deleted
}