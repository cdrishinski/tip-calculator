function tipCalculation (){
    let bill = document.getElementById("bill").value;
    let tip = document.getElementById("tip").value;
    let partySize = document.getElementById("party-size").value;
    let total;

    // create error handling if bill is blank
    if (bill == '') {
        return alert("Please enter a Bill Amount")
    }

    // create error handling if service section is blank
    if (tip == '') {
        return alert("Please enter how your service was");
    }
    // create calculation of tip size
    total = (bill * tip )/ partySize;

    // post answer to id="answered-section"

    document.getElementById("phrase-section").innerHTML = "Tip between all parties is -" ;
    document.getElementById("answered-section").innerHTML = "$" + total.toFixed(2) + " each";

}