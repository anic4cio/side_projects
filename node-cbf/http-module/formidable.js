import http from'http'
import formidable from'formidable'
import fs from'fs'

const port = 3000

const server = http.createServer((req, res) => {
  if (req.url === '/fileupload') {
    const form = new formidable.IncomingForm()
    form.parse(req, (err, fields, files) => {
      const oldpath = files.filetoupload.filepath
      const newpath = './' + files.filetoupload.originalFilename
      fs.rename(oldpath, newpath, (err) => {
        if (err) throw err
        res.write('File uploaded and moved!')
        res.end()
      })
    })
  } else {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">')
    res.write('<input type="file" name="filetoupload"><br>')
    res.write('<input type="submit" value="Upload">')
    res.write('</form>')
    return res.end()
  }
})

server.listen(port)
