var mon=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];



function set() {
    
	//message.innerText = "ok";
	var gg=(((new Date()).getFullYear()).toString()).substring(2,4);
	var y="http://codeforces.com/contests";
	var x="http://www.codechef.com/contests";
	 var z="http://community.topcoder.com/tc?module=Static&d1=calendar&d2="+mon[(new Date()).getMonth()]+"_"+gg;
	var xhr = new XMLHttpRequest();
 xhr.open("GET",x, true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
   
   displayzz(xhr.responseText);
	
  }
}
xhr.send();
	
 var xyz = new XMLHttpRequest();
 xyz.open("GET",y, true);	
xyz.onreadystatechange = function() {
  if (xyz.readyState == 4) {
  
	 display(xyz.responseText);
	//return(str1+str2);
  }
}
xyz.send();

var abc = new XMLHttpRequest();
 abc.open("GET",z, true);	
abc.onreadystatechange = function() {
  if (abc.readyState == 4) {
  
	 displayTc(abc.responseText);
	//return(str1+str2);
  }
}
abc.send();	


	
}
function display(tex){
var tt=tex.search("Past contests");
var sex=tex.substring(0,tt);
  var doc = document.createElement("div");
doc.innerHTML = sex;
var pp=[];
var tt=doc.getElementsByTagName("td");

for(var i=0;i<tt.length;i++){
if(i%5==0){
pp.push(tt[i].innerHTML);
i+=3;
//pp.push(tt[i].innerHTML);
if(((tt[i].innerHTML).search("title"))==-1){
pp.push((tt[i].innerHTML).match(/\d{2}\:\d{2}\:\d{2}/g));
}
else{
pp.push((tt[i].innerHTML).match(/(\d days)|(\d weeks)/g));
}
}
}

//var kk=tt[0].childNodes[0].nodeValue;

var div = document.createElement('div');
var img = document.createElement('img');
      img.src = "codef.png";
     // img.setAttribute('alt', kittens[i].getAttribute('title'));
      document.body.appendChild(img);
for(var i=0;i<pp.length;i+=2){
var div = document.createElement('div');   
div.innerHTML = '<h4>'+pp[i]+'</h4>\<p>Time to start : '+pp[i+1]+'</p>';
 document.body.appendChild(div);


}
var link="http://codeforces.com/contests";
var div = document.createElement('div');   
div.innerHTML = '<a href="'+link+'" target="_blank">Visit</a>';
 document.body.appendChild(div);
 
 if(pp.length==0){
var div = document.createElement('div');   
div.innerHTML = '<h3>No Recent Contests</h3>';
document.body.appendChild(div);

}
 
 var div = document.createElement('div');   
div.innerHTML = '<hr style="height:2px;border:none;color:#333;background-color:#333;" />';
 document.body.appendChild(div);

//return str;
}

function displayzz(tex){
var tt=tex.search("Past Contests");
var xx=tex.search("Future Contests");
var sex=tex.substring(xx,tt);
  var doc = document.createElement("div");
doc.innerHTML = sex;
var aa=[];
var tt=doc.getElementsByTagName("td");

for(var i=0;i<tt.length;i++){
if(i%4!==1){
aa.push(tt[i].innerHTML);

}

}
var img = document.createElement('img');
      img.src = "codec.png";
     // img.setAttribute('alt', kittens[i].getAttribute('title'));
      document.body.appendChild(img);
//var kk=tt[0].childNodes[0].nodeValue;

for(var i=0;i<aa.length;i+=3){
var div = document.createElement('div');
     // img.src = this.constructKittenURL_(kittens[i]);
     // img.setAttribute('alt', kittens[i].getAttribute('title'));
	 var link="http://www.codechef.com/"+aa[i];
     
div.innerHTML= '<h4>'+aa[i]+'</h4>\<p>Time to Start : '+aa[i+1]+'</p>\<p>Time To End : '+aa[i+2]+'</p>\
               <a href="'+link+'" target="_blank">Visit</a>';
								
 document.body.appendChild(div);


}
if(aa.length==0){
var div = document.createElement('div');   
div.innerHTML = '<h3>No Recent Contests</h3>';
document.body.appendChild(div);

}

var div = document.createElement('div');   
div.innerHTML = '<hr style="height:2px;border:none;color:#333;background-color:#333;" />';
 document.body.appendChild(div);
}

function returnTheParentNode(htmlStr)
{
var myCont = document.createElement('DIV'); // create a div element
myCont.innerHTML = htmlStr; // create its children with the string
return myCont;  // return the parent div

}



function displayTc(tex){

var doc=document.createElement("div");
doc.innerHTML=tex;
var ss=[];
var kk=doc.getElementsByTagName("td");
/*
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

*/
var today = new Date();
var dd = today.getDate();
//var dd=25;
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();




for(var i=0;i<kk.length;i++){
var tt=kk[i].innerHTML;
//alert(tt.length);
if((kk[i].className).search("value")!=-1  && (kk[i].innerHTML).length>20){
var dt=tt.substr(0,2).trim();

if(dt>=dd){
var str=tt;
var newElem = returnTheParentNode(str);
var anchors = newElem.getElementsByTagName('A');
/* anchors has all the a tags of the html string */
    
   //   var aHTML = getHTML(anchors[i]);
  // alert(anchors[0].innerHTML);
 ss.push(anchors[0].innerHTML);     
if((anchors[0].getAttribute("href")).search("http")==-1){
ss.push("http://community.topcoder.com/"+anchors[0].getAttribute("href"));
}
else  ss.push(anchors[0].getAttribute("href")); 	  
	  ss.push(dt+'/'+mm+'/'+yyyy);
	  ss.push((str).match(/\d{2}\:\d{2}/g));
    


//var zz=tt.substring(xx,yy);
//ss.push(zz);
}
}

}
//alert(ss);
var img = document.createElement('img');
      img.src = "tc.png";
     // img.setAttribute('alt', kittens[i].getAttribute('title'));
      document.body.appendChild(img);
//var kk=tt[0].childNodes[0].nodeValue;

for(var i=0;i<ss.length;i+=4){
var div = document.createElement('div');
     // img.src = this.constructKittenURL_(kittens[i]);
     // img.setAttribute('alt', kittens[i].getAttribute('title'));
     
div.innerHTML= '<h4>\<a href="'+ss[i+1]+'" target="_blank">'+ss[i]+'</a>\</h4>\<p>Date :'+ss[i+2]+'<p>Time :'+ss[i+3]+'</p>';
								
 document.body.appendChild(div);


}
if(ss.length==0){
var div = document.createElement('div');   
div.innerHTML = '<h3>No Recent Contests</h3>';
document.body.appendChild(div);

}
var div = document.createElement('div');   
div.innerHTML = '<hr style="height:2px;border:none;color:#333;background-color:#333;" />';
 document.body.appendChild(div);
}

document.addEventListener('DOMContentLoaded', function () {
  set();
});










