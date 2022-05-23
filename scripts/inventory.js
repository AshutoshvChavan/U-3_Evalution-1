
dataarr=JSON.parse(localStorage.getItem("products")) || []

display(dataarr);

function display (data){
    data.forEach(function(ele,index){
        var box=document.createElement("div");
        var a1=document.createElement(p);
        a1.innerText="Type:-"+ele.type;
        var a2=document.createEvent(p);
        a2.innerText="Desc:-"+ele.desc;
        var a3=document.createEvent(p);
        a3.innerText="Price $:-"+ele.price;
        var a4=document.createEvent(p);
        a4.setAttribute("src",ele.image)
        var btn=document.createElement("button")
        btn.innerText="Remove"
        btn.addEventListener("click",function(){
            remove(index);
        })
        box.append(a1,a2,a3,a4,btn);
        document.querySelector("#all_products").append(box)
    })
}

function remove(index){
    let data=JSON.parse(localStorage.getItem("products"));
    let newdata=data.filter(function(ele,i){
        if (i===index){
            let trash=json.parse(localStorage.getItem("trash")) || []
            trash.push(ele);
            localStorage.setItem("trash",JSON.stringify(trash));
        }
        else{
            return i !=index;
        }
    })
    localStorage.setItem("products",JSON.stringify(newdata));

    display();
}