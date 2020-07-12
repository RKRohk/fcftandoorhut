var pdf = require('html-pdf')
var fs = require('fs')
const { table } = require('console')
var options = { width:'80mm' , border:'5mm', zoomFactor:0.7,header:{height:'60mm',contents:'<div style="text-align:center;"><h1>Tandoor Hut</h1><h3>Near SBI ATM,<br>Godhna Road ARA(Bhojpur)<br>Bihar-802302</h3></div>'}}

var html = ""

function getPdf(data) {
      
      var table = '<table style="width:100%;text-align:left"> <tr> <th style="width:10%">S.No</th> <th style="width:60%">Item</th> <th style="width:10%">Qty</th> <th style="width:20%">Amount</th> </tr>'
      data.data.forEach(item => {
          table += `<tr> <td>${item.sno}</td> <td>${item.item}</td> <td>${item.qty}</td> <td>${item.price}</td> </tr>`
      })
      
      table +='</table>'

      html = table
      
      return html
}

module.exports = getPdf