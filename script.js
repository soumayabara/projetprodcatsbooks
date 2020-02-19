class Element {
	constructor(pname,img,desc,next = null,prev = null){
		this.pname=pname;
        this.img=img;
        this.desc=desc;
		this.next=next;
		this.prev=prev;
	}
}

class Stack {
	constructor(){
		this.length=0;
		this.head=null;
		this.tail=null;
		this.pointer = null;

	}

	addFirst(pname,img,desc){
		if (this.head==null) {
			this.head=this.tail=this.pointer=new Element(pname,img,desc);
		}
		else {
			let tmp = this.head;
			this.head = new Element(pname,img,desc);
			tmp.prev = this.head;
			this.head.next = tmp;

		}

	}


	dispElement(){
		if(this.head){
			return' <div class="pic1"> <img src="'+this.head.img+'" width="100%"> <h3>'+this.head.pname+'</h3> <p>'+this.head.desc+' <br></p> <p><a href="#" class="seemore1">See More</a></p> </div>';
	}



}
}


let stack = new Stack();


// STACK

function empiler(){
	stack.addFirst(document.getElementById("pname").value,document.getElementById("imglink").value,document.getElementById("desc").value);
	printElement();


}



function printElement(){
	document.getElementById("test").innerHTML += stack.dispElement();
}

// Splitting({
// 	target: '.tiler',
// 	by: 'cells',
// 	rows: 3,
// 	columns: 3,
// 	image: true
//   });


