//your JS code here. If required.

let btn=document.getElementById('btn');

function myPromise(value,time) {
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			res(value);
		},time);
	})
}

btn.addEventListener('click',async ()=>{
	let v=document.querySelector('#text');
	let d=document.querySelector('#delay');
	let text=v.value;
	let delay=d.value;
	v.value='';
	d.value='';
	let result=await myPromise(text,delay);
	let output=document.querySelector('#output')
	output.textContent=result;
	
})