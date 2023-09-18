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
  if (!result) res.send("You cannot fetch nonexistent entities")
  res.render(`board/view.html`, {...result})
}

exports.getModify = (req, res) => {
  const { id } = req.query
  const result = boardService.specify(id)
  res.render('board/modify.html', {...result})
}

exports.postModify = (req, res) => {
  const { id } = req.query
  const modified = boardService.modify(id, req.body)
  if (!modified) res.send("You cannot modify nonexistent entities")
  res.redirect(`/boards/view?id=${id}`)
}

exports.postDelete = (req, res) => {
  const { id } = req.query
  const deleted = boardService.delete(id)
  if (!deleted) res.send("You cannot delete nonexistent entities")
  res.redirect('/boards/list')
}