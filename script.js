function insert_Row() {
    //Write your code here
	let table=document.getElementById("sampleTable")

	let extraRow=table.insertRow(0)

	let cell1=extraRow.insertCell()
	let cell2=extraRow.insertCell()

	cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
  
  
}
