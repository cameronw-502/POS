//function getName() {
//    companyName = prompt("What is the company name?");
//    document.getElementById("name"). innerHTML = companyName;
//}

var total_tran = 0;
var authorization = false;
var rb = 0;

function b1() {
    document.getElementById("tran").innerHTML = "Chicken Nuggets---$5.99"; 
    total_tran = total_tran + 5.99;
    rb = 5.99;
    getTotal();
    tax();
    grandTotal();
    
}
function b2() {
    document.getElementById("tran").innerHTML = "Chicken Sandwich---$7.59"; 
    total_tran = total_tran + 7.59;
    rb = 7.59;
    getTotal();
    tax();
    grandTotal();
    
}
function b3() {
    document.getElementById("tran").innerHTML = "Cheese Burger---$9.25"; 
    total_tran = total_tran + 9.25;
    rb = 9.25;
    getTotal();
    tax();
    grandTotal();
    
}
function b11() {
    document.getElementById("tran").innerHTML = "Fries---$2.25"; 
    total_tran = total_tran + 2.25;
    rb = 2.25;
    getTotal();
    tax();
    grandTotal();
    
}
function b12() {
    document.getElementById("tran").innerHTML = "Salad---$12.00"; 
    total_tran = total_tran + 12.00;
    rb = 12.00;
    getTotal();
    tax();
    grandTotal();
    
}
function b13() {
    document.getElementById("tran").innerHTML = "Ice Cream---$2.00"; 
    total_tran = total_tran + 2.00;
    rb = 2.00;
    getTotal();
    tax();
    grandTotal();
    
}
function b14() {
    document.getElementById("tran").innerHTML = "Chilli---$2.25"; 
    total_tran = total_tran + 2.25;
    rb = 2.25;
    getTotal();
    tax();
    grandTotal();
    
}
function b15() {
    document.getElementById("tran").innerHTML = "Pizza---$17.99"; 
    total_tran = total_tran + 17.99;
    rb = 17.99;
    getTotal();
    tax();
    grandTotal();
    
}
function b16() {
    document.getElementById("tran").innerHTML = "Soup---$1.99"; 
    total_tran = total_tran + 1.99;
    rb = 1.99;
    getTotal();
    tax();
    grandTotal();
    
}
function b17() {
    document.getElementById("tran").innerHTML = "Small Drink---$1.00"; 
    total_tran = total_tran + 1.00;
    rb = 1.00;
    getTotal();
    tax();
    grandTotal();
    
}
function b18() {
    document.getElementById("tran").innerHTML = "Medium Drink---$1.25"; 
    total_tran = total_tran + 1.25;
    rb = 1.25;
    getTotal();
    tax();
    grandTotal();
    
}
function b19() {
    document.getElementById("tran").innerHTML = "Large Drink---$1.50"; 
    total_tran = total_tran + 1.50;
    rb = 1.50;
    getTotal();
    tax();
    grandTotal();
    
}
function voidTrans() {
    document.getElementById("tran").innerHTML = "Void"; 
    total_tran = total_tran - total_tran;
    getTotal();
    tax();
    grandTotal();
    
}

function overrideAdd() {
    document.getElementById("tran").innerHTML = "Override"; 
    
    
        var amount = parseInt(prompt("Amount added to transaction: "));
        total_tran = total_tran + amount;
        getTotal();
        tax();
        grandTotal();
        
    }
    

function overrideSub() {
    document.getElementById("tran").innerHTML = "Override"; 
    
        var amount = parseInt(prompt("Amount subtracted from transaction: "));
        total_tran = total_tran - amount;
    
    getTotal();
    tax();
    
    grandTotal();
    
}
function discount() {
    document.getElementById("tran").innerHTML = "Discount Override"; 
    managerAuth();
    if (authorization === true) {
        var amount = parseInt(prompt("Discount Percentage: "));
        total_tran = total_tran * amount;
    }
    getTotal();
    tax();
    grandTotal();
    
    
    
}
function quantity() {
    document.getElementById("tran").innerHTML = "Quantity";
    var q = parseInt(prompt("Enter quantity")) - 1;
    var qTran = q * rb;
    total_tran = total_tran + qTran;
    getTotal();
    tax();
    
    grandTotal();
}
function eraseLast() {
    document.getElementById("tran").innerHTML = "Clear Last Action";
    total_tran = total_tran - rb;
    alert("Subtracted $" + rb + " from total");
    getTotal();
    tax();
    
    grandTotal();
    
}

function managerOp(){
    managerAuth();
    if (authorization === true) {
        hidden(true);
    }
}
function mgrClose(){
    hidden(false);
}

function taxExempt(){
    tax(false);
}

function getTotal() {
    var totalRounded = Math.round(total_tran * 100) / 100;
   return document.getElementById("total").innerHTML = "$" + totalRounded;
    
}
function getTotal2() {
    var totalRounded = Math.round(total_tran * 100) / 100;
   return totalRounded;
    
}

function tax(boolean) {    
        if (boolean = true) {
            var totalTax = total_tran * 0.07;   
            var totalTaxRounded = Math.round(totalTax * 100) / 100;
        }
        if (boolean = false) {
            var totalTaxRounded = 0;
        }
    document.getElementById("tax").innerHTML = "$" + totalTaxRounded; 
    
}
function tax2() {    
    var totalTax = total_tran * 0.07;   
    var totalTaxRounded = Math.round(totalTax * 100) / 100;
    return document.getElementById("tax").innerHTML =  +totalTaxRounded; 
}
function discountsTotal(){
    var totalDiscount = Math.round(discount() * 100) / 100;
   return totalDiscount;
}
function grandTotal(){
    var grand = getTotal2() + tax2();
    document.getElementById("grand").innerHTML = "$" + Math.round(grand * 100) / 100;
}

function managerAuth() {
    var employeeID = prompt("Enter manager employee id");
    if (employeeID = 12345) {
        var employeePass = prompt("Enter your employee password");
        if (employeePass === "password"){
            alert("Access Granted");
            authorization = true;
        }else {
            alert("Incorrect Password");
            authorization = false;
            
        }
        }
            document.getElementById("name").innerHTML =  authorization;
        }

function hidden(boolean) {
    if (boolean === true) {
        document.getElementById("toggle").style.visibility = "visible";
    } else {
        document.getElementById("toggle").style.visibility = "hidden";
    }
    
}
    
    
