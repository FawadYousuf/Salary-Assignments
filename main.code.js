function par() {
	var salary;
	salary = document.getElementById("inpt").value;
	if (salary === "" || salary === " " ) {
		alert("Please Use Numerical Words");

	}
	if (salary === Number) {
		salary;		

	}
	var show = document.getElementById("get").innerHTML = salary;
	var salaryfourty;
	salaryfourty = +salary * 40 / 100;
	var rentall = document.getElementById("fourtyper").innerHTML = salaryfourty;
	var salaryTwenty;
	salaryTwenty = +salary * 20 / 100;
	var houseall = document.getElementById("twentyper").innerHTML = salaryTwenty;
	var netsalary;
	netsalary = +salary + salaryfourty + salaryTwenty;
	var fullsalary = document.getElementById("allplus").innerHTML = netsalary;
}