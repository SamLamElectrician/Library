function updateForm(){
    if(document.getElementById("status").value.length == 0)
{
    alert("Please enter a reading status")
} else {
    let book = document.getElementById("bookTitle").value
    let author = document.getElementById("author").value
    let status = document.getElementById("status").value
    let table = document.getElementById("results")
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML= book;
    cell2.innerHTML= author;        
    cell3.innerHTML= status; 
    };
}