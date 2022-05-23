//store the products array in localstorage as "products"

function productDemo(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}

function fun(){
    event.preventDefault()
    let form=document.getElementById("products")

    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;

    form.type.value=""; 
    form.desc.value="";   
    form.price.value="";
    form.image.value="";

    let res=new productDemo(type,desc,price,image);
    console.log(res);

    var dataarr=JSON.parse(localStorage.getItem("products")) || [];

    dataarr.push(res);
    console.log(dataarr);

    console.log(type,desc,price,image)

    localStorage.setItem("products",JSON.stringify(dataarr))
}

