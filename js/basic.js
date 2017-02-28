window.onload=function () {
	var tpyyxw=$('#tpyyxw');
	var nbMenulist=$(".nb-menulist")[0];	
	var nbInfo=$(".nb-info")[0];
	var nbInfoChild1=children(nbInfo)[0];
	var loginMenu=$('.login-menu')[0];
	/*
		菜单的子菜单显示隐藏
	*/
	addEvent(tpyyxw,'mouseover',function(){
		changeDisplay(nbMenulist);
	})
	addEvent(tpyyxw,'mouseout',function(){
		changeDisplay(nbMenulist);
	})
	addEvent(nbMenulist,'mouseover',function(){
		changeDisplay(nbMenulist);
	})
	addEvent(nbMenulist,'mouseout',function(){
		changeDisplay(nbMenulist);
	})
	addEvent(nbInfoChild1,'mouseover',function(){
		changeDisplay(loginMenu);
	})
	addEvent(nbInfoChild1,'mouseout',function(){
		changeDisplay(loginMenu);
	})
	addEvent(loginMenu,'mouseover',function(){
		changeDisplay(loginMenu);
	})
	addEvent(loginMenu,'mouseout',function(){
		changeDisplay(loginMenu);
	})
	/*
		main01的图片切换
	*/
	// 通过ID获取到这个元素
	var picsTitle=$('#pics-title');
	//通过children函数获取到它的子元素
	var picsChilds=children(picsTitle);
	var num=1;
	//通过ID获取到ul左侧图片
	var pics=$('#pics');	
	var interId=setInterval(changeSelect,1000);
	//对ul的子元素进行循环
	for (var i = 0; i < picsChilds.length; i++) {
		addEvent(picsChilds[i],'mouseover',function(evt){
			var target=getTarget(evt);
			clearInterval(interId);	
			for (var j = 0; j < picsChilds.length; j++) {
				if(picsChilds[j].innerText==target.innerText){
					target.style.backgroundPosition='0 -54px';
					target.firstChild.nodeType==1?target.firstChild.style.color='#d6d1ff':target.style.color='#d6d1ff';
					pics.src='images/scroll'+(j+1)+'.jpg';
				}else{
					picsChilds[j].style.backgroundPosition='0 0';
					picsChilds[j].firstChild.style.color='#aba65d';
				}				
			}			
		})
		addEvent(picsChilds[i],'mouseout',function(evt){
			var target=getTarget(evt);
			for (var j = 0; j < picsChilds.length; j++) {	
				if(target==picsChilds[j]){
					num=j+1;
				}		
			}
			interId=setInterval(changeSelect,1000);
		})
	}
	function changeSelect(){
		for (var i = 0; i < picsChilds.length; i++) {
			if(i==(num-1)){
				picsChilds[i].style.backgroundPosition='0 -54px';
				picsChilds[i].firstChild.style.color='#d6d1ff';
				pics.src='images/scroll'+num+'.jpg';
			}else{
				picsChilds[i].style.backgroundPosition='0 0';
				picsChilds[i].firstChild.style.color='#aba65d';
			}
		}
		num==4?num=1:num++;
	}
	/*
		main02的菜单切换
	*/
	var pagination=$('#pagination');
	var pagins=children(pagination);
	var pagContent=$('#pagContent');
	var pagChilds=children(pagContent);
	for (var i = 0; i < pagins.length; i++) {		
		addEvent(pagins[i],'mouseover',function(evt){
			var target=getTarget(evt);
			empty(pagContent);
			var str='';
			for (var i = 0; i < 15; i++) {
				// var li=document.createElement('li');
				// li.innerHTML='<i>10/17</i><a href="###">'+target.innerText+'</a>'
				// pagContent.appendChild(li);
				str+='<li><i>10/17</i><a href="###">'+target.innerText+'</a></li>'
			}	
			pagContent.innerHTML=str;
		})
	}
	/*
		魔兽世界职业的菜单切换
	*/
	var main05LeftMenu=$('.main05-left-menu')[0];
	var leftMenuChilds=children(main05LeftMenu);
	var main05RightContent=$('.main05-right-content')[0];
	for (var i = 0; i < leftMenuChilds.length; i++) {		
		addEvent(leftMenuChilds[i],'mouseover',function(evt){
			empty(main05RightContent);
			var target=getTarget(evt);
			var str='';
			for (var i = 0; i < leftMenuChilds.length; i++) {
				if(leftMenuChilds[i]==target){
					target.style.borderWidth='1px 0 1px 1px';
					leftMenuChilds[i].style.backgroundImage='url(images/cs02.jpg)';
			}else{
				leftMenuChilds[i].style.borderWidth='1px 1px 1px 0';
				leftMenuChilds[i].style.backgroundImage='url(images/cs01.jpg)';
		}
			for (var i = 0; i < 15; i++) {
				// var li=document.createElement('li');
				// li.innerHTML='<i>01/26</i><a href="###">'+target.innerText+'</a>';
				// main05RightContent.appendChild(li);
				str+='<li><i>01/26</i><a href="###">'+target.innerText+'</a></li>'
			}
			main05RightContent.innerHTML=str;
		}
	})
}

function changeDisplay(obj){
	obj.style.display=='block'?obj.style.display='none':obj.style.display='block';
}
function empty(obj){
	var childs=children(obj);
	for (var i = 0; i < childs.length; i++) {
		obj.removeChild(childs[i]);
	}
}


function addEvent(obj,type,fn){
	if(obj.addEventListener){
		obj.addEventListener(type,fn,false);
	}else if(obj.attachEvent){
		obj.attachEvent('on'+type,fn);
	}
}
function removeEvent(obj,type,fn){
	if(obj.removeEventListener){
		obj.removeEventListener(type,fn,false);
	}else if(obj.detachEvent){
		obj.detachEvent('on'+type,fn);
	}
}
function children(obj){
	var nodes=obj.childNodes;
	var arr=[];
	for (var i = 0; i < nodes.length; i++) {
		if(!(nodes[i].nodeType==3&&/^\s+$/.test(nodes[i].nodeValue))){
			arr.push(nodes[i]);
		}
	}
	return arr;
}
function getTarget(evt){
	if(evt){
		return evt.currentTarget||window.event.srcElement;
	}else if(window.event){
		return window.event.srcElement;
	}
}
function $(biaoji){
	var substr1=biaoji.substring(0,1);
	var substr2=biaoji.substring(1);
	if(substr1=='#'){
		return document.getElementById(substr2);
	}else if(substr1=='.'){
		var doc=document.getElementsByTagName('*');
		var arr=[];
		for (var i = 0; i < doc.length; i++) {
			if(doc[i].className==substr2){
				arr.push(doc[i]);
			}
		}
		return arr;
	}else if(substr1=='_'){
		return document.getElementsByName(substr2);
	}else if(substr1=='&'){
		return document.getElementsByTagName(substr2);
	}
}

