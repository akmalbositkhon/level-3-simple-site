var menuItems = ['Home','Contact', 'About', 'Galleries'];
var dropItem=['Mountains', 'Birds', 'Animals', 'Insects', 'Flowers', 'Forests', 'Oceans', 'Fishes', 'Beaches', 'Deserts'];
var firstColumn=['Home', 'Gallery', 'Contact'];
var secondColumn=['Mountains', 'Birds', 'Animals', 'Insects'];
var thirdColumn=[ 'Flowers', 'Forests', 'Oceans', 'Fishes'];
var fourthColumn=['Beaches', 'Deserts', 'Report'];
var first=document.getElementById('first-column');
var second=document.getElementById('second-column');
var third=document.getElementById('third-column');
var fourth=document.getElementById('fourth-column');
window.onload = function(){
	menuItems.forEach((item)=>{
		

		var div = document.createElement('div');
		var li = document.createElement('li');
		var a = document.createElement('a');
		var main = document.getElementById('mainNav');
		var drop = document.getElementById('dropdown');
		div.setAttribute('class', 'menuContainer');
		li.setAttribute('class', 'menuItem');
		a.setAttribute('href', (item.toLowerCase() === 'home') ? 'index.html' : item.toLowerCase() + '.html');
		if(item.toLowerCase()==='galleries'){
			div.appendChild(drop);
		}
		a.innerHTML = item;
		
		div.appendChild(li)
		li.appendChild(a);
		a.setAttribute('class', 'hre');
		a.setAttribute('style', 'text-decoration:none');
		main.appendChild(div);
	});
	dropItem.forEach((item)=>{
		var drop = document.getElementById('dropdown');
		var a = document.createElement('a');
		a.innerHTML=item;
		a.setAttribute('class', 'dropdownItem hre');
			a.setAttribute('style', 'text-decoration:none');
		a.setAttribute('href', (item.toLowerCase() === 'home') ? 'index.html' : item.toLowerCase() + '.html');
		drop.appendChild(a);
	});
		firstColumn.forEach((word)=>{ 
		var p = document.createElement('p'); //creating element <p>
		var a = document.createElement('a');	//creating element <a>	
		a.setAttribute('class', 'hre'); //setting class "hre" to element <a>
		a.setAttribute('href', (word.toLowerCase() === 'home') ? 'index.html' : word.toLowerCase() + '.html');//creating link for <a> element. if word (array word) of <a> is home, link of this a element is index.html, otherwise "word (in lower case)".html 
		a.innerHTML=word; // a element is equal to firstColumn array elements

		p.appendChild(a); // inserting a element in p element

		first.appendChild(p); // inserting p element in element with id
	});
	secondColumn.forEach((word)=>{
		var p = document.createElement('p');
		var a = document.createElement('a');		
		a.setAttribute('class', 'hre');
		a.setAttribute('href', (word.toLowerCase() === 'home') ? 'index.html' : word.toLowerCase() + '.html');
		a.innerHTML=word;

		p.appendChild(a);

		second.appendChild(p);
	});
	thirdColumn.forEach((word)=>{
		var p = document.createElement('p');
		var a = document.createElement('a');		
		a.setAttribute('class', 'hre');
		a.setAttribute('href', (word.toLowerCase() === 'home') ? 'index.html' : word.toLowerCase() + '.html');
		a.innerHTML=word;

		p.appendChild(a);

		third.appendChild(p);
	});
	fourthColumn.forEach((word)=>{
		var p = document.createElement('p');
		var a = document.createElement('a');		
		a.setAttribute('class', 'hre');
		a.setAttribute('href', (word.toLowerCase() === 'report') ? 'report.docx' : word.toLowerCase() + '.html');
		a.innerHTML=word;

		p.appendChild(a);

		fourth.appendChild(p);
	});
}