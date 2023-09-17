const boardService = require('./board.service')

exports.getList = (req, res) => {
  const result = boardService.fetchAll()
  res.render('board/list.html', {list: result,})
}

exports.getWrite = (req, res) => {
  res.render('board/write.html')
}

exports.postWrite = (req, res) => {
  const result = boardService.create(req.body)
  res.redirect(`/boards/view?id=${result.id}`)
}

exports.getView = (req, res) => {
  const { id } = req.query
  const result = boardService.specifyView(id)
  res.render(`board/view.html`, {...result})
}

exports.getModify = (req, res) => {
  const { id } = req.query
  const result = boardService.specify(id)
  res.render('board/modify.html', {...result})
}

exports.postModify = (req, res) => {
  const { id } = req.query
  boardService.modify(id, req.body)
  res.redirect(`/boards/view?id=${id}`)
}

exports.postDelete = (req, res) => {
  const { id } = req.query
  boardService.delete(id)
  res.redirect('/boards/list')
}