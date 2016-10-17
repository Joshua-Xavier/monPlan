function addTable(semesters, units) {
    var myTableDiv = document.getElementById("tableLoc");

    var table = document.createElement('TABLE');
    table.setAttribute('class','pure-table pure-table-horizontal')
    table.border = '1';

    var tableHead = document.createElement('THEAD');
    table.appendChild(tableHead)
    var tr = document.createElement('TR');

    for(var u = 0; u < units + 1; u++) {
      if(u > 0) {
        var th = document.createElement('th');
        th.appendChild(document.createTextNode("Unit " + u));
        tr.appendChild(th);
      } else {
        var th = document.createElement('th');
        th.appendChild(document.createTextNode("Semester"));
        tr.appendChild(th);
      }
    }
    tableHead.appendChild(tr)

    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    for (var i = 0; i < semesters; i++) {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);

        for (var j = 0; j < units+1; j++) {
            if(j > 0) {
              var td = document.createElement('TD');
              td.appendChild(document.createTextNode("Sesmester " + (i+1) + ", Unit " + j));
              tr.appendChild(td);
            } else {
              var td = document.createElement('TD');
              td.appendChild(document.createTextNode("Semester " + j));
              tr.appendChild(td);
            }
        }
    }
    myTableDiv.appendChild(table);
}
