window.onload = () => {
    fetch("header.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;

            fetch("footer.html")
                .then(res => res.text())
                .then(data => {
                    document.getElementById("footer").innerHTML = data;
                });
        });
};




let bill = 0;
let fixedcharge = 120;
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2")
let ansInput = document.getElementById("bill");


function calculateBill() {
    let currentReading = Number(document.getElementById("current-reading").value);
    let previousReading = Number(document.getElementById("previous-reading").value);
    
    if (currentReading < previousReading) {
        alert("Error:current reading must be greater than previous reading!");
        return null;
    }
let unitsconsumed = currentReading - previousReading;



    if (unitsconsumed <= 100) {
        bill = 0 + fixedcharge;
    }
    else if (unitsconsumed <= 200) {
        bill = 2.25 + fixedcharge;
    }
    else if (unitsconsumed <= 400) {
        bill = 4.5 + fixedcharge;
    }
    else if (unitsconsumed <= 500) {
        bill = 6.0 + fixedcharge;
    }
    else if (unitsconsumed <= 600) {
        bill = 8.0 + fixedcharge;
    }
    else if (unitsconsumed <= 800) {
        bill = 9.0 + fixedcharge;
    } else if (unitsconsumed <= 1000) {
        bill = 10 + fixedcharge;
    }
    else {
        bill = 11 + fixedcharge;
    }
    return bill;

}
if(btn1 && btn2){
btn1.addEventListener("click",function () {
   
    result = calculateBill();
    ansInput.value = "this month EB bill is:" + result;
    ansInput.style.display = "block";
    
    // result.value="your this month EB bill is"+bill; 

})

btn2.addEventListener("click", () => {
    let currentReading = document.getElementById("current-reading");
    let previousReading = document.getElementById("previous-reading");
    currentReading.value = "";
    previousReading.value = "";
    ansInput.value = "";
    ansInput.style.display = "none";
})
}





