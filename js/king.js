function Game(obj){ 
	 this.obj = obj;
	 this.time = null;
	 this.left = 0;
}
Game.prototype.skill = {
	"87":function(){
		this.obj.src ='images/7490881c38cfba5ef724e4ba.gif'; //w
	},
	"65":function(){
		this.obj.src ='images/retreat.gif';       //a
		this.time = setInterval(function(){
			this.left -= 5;
			this.obj.style.left = this.left + "px";
		}.bind(this),1000/60)
	},
	"83":function(){
		this.obj.src ='images/stand.gif';   //s
	},
	"68":function(){
		this.obj.src = 'images/advance.gif';  //d
		this.time = setInterval(function(){
			this.left += 5;
			this.obj.style.left = this.left + "px";
		}.bind(this),1000/60)
	}
}
Game.prototype.stop = function(){
	clearInterval(this.time);
	this.obj.src ='images/stand.gif';
}
Game.prototype.active = function(keycode){
	if(this.skill[keycode]){
		this.skill[keycode].call(this);
	}
}
var imgMC = document.getElementById("mc");
var person = new Game(imgMC);

document.onkeydown = key;
function key(ev){
	//w:87,a:65,s:83,d:68
	person.active(ev.keyCode);
	this.onkeyup = function(){
		person.stop();
		this.onkeydown = key;
	}
	this.onkeydown = null;
}

