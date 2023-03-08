const h1s = document.querySelectorAll('h1')
//for (let h1 of h1s)
  //  h1.style.color = 'green'

h1s.forEach(h1 => h1.style.color = 'green')

let matrix = [
    [1, 2, 3],          // <tr> <td>1</td> <td>2</td> <td>3</td> </tr>
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
]
const table = document.querySelector('table')
/*
let content = ""
for (let i = 0; i < matrix.length; i++){
    content += "<tr>"
    for (let j = 0; j < matrix[i].length; j++)
        content += "<td>" + matrix[i][j] + "</td>"
    content += "</tr>"
}
table.innerHTML = content */

table.innerHTML = matrix.map(row => '<tr>' + 
    row.map(elem => '<td>' + elem + '</td>').join('')
+ '</tr>').join('')

/*
for (let i = 0; i < matrix.length; i++){
    let tr = document.createElement("tr")
    for (let j = 0; j < matrix[i].length; j++){
        let td = document.createElement("td")
        td.innerText = matrix[i][j]
        tr.appendChild(td)
    }
    table.appendChild(tr)
}*/