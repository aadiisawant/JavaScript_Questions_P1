const insert = document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
    document.getElementById('hide').removeAttribute("hidden")
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <tr>
            <td>${e.key === " " ? "Space" : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>        
    `
    insert.querySelector('table').innerHTML +=newRow.innerHTML;
})