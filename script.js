const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);



const getSum = () => 
{
	const prices=document.querySelectorAll('.price');
	let sum=0;

	 prices.forEach(function(priceElement) {
                sum += parseFloat(priceElement.textContent); 
            });
	
	const table=document.querySelector('table');
	const r = document.createElement("tr");
	r.id="ans";
	const totalcell=document.createElement("td");

	totalcell.colSpan=2;
	totalcell.textContent=`${sum}`;
	
	r.appendChild(totalcell);
	table.appendChild(r);

};

getSumBtn.addEventListener("click", getSum);

