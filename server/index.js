const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app =  express()
const cors = require('cors');

const db = mysql.createPool({
  host: 'localhost',
  user: 'dzul',
  password: '1',
  database: 'absenrfid'
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.put('/api/kartu', (req, res) => {
  const noKartu = req.query.nokartu
  const sqlSelect = 'SELECT nokartu from tmprfid'
  const result = db.query(sqlSelect, (err,result) => {
  })
  console.log(result)
  if (result === []){
    const sqlInsert = 'INSERT INTO tmprfid (nokartu) values (?)'
    db.query(sqlInsert, noKartu, (err, result) => {
      console.log(result)
    })
  } else {
    const sqlUpdate = 'update tmprfid set nokartu = ?'
    db.query(sqlUpdate, noKartu, (err, result) => {
      console.log(result)
    })
  }
})

app.get('/api/get', (req, res) => {
  const sqlSelect = 'SELECT nokartu FROM tmprfid'
  db.query(sqlSelect, (err, result) => {
    res.send(result)
  })
})

app.put('/api/update', (req,res) => {
  const nominal = req.body.nominal
  const noKartu = req.body.noKartu
  const sqlUpdate = 'update siswa set saldo = saldo + ? where nokartu = ?'
  db.query(sqlUpdate, [nominal, noKartu], (err, result) => {
    console.log(err)
  })
})

app.listen(3001, () => {
  console.log('app running on port 3001')
})