// const event = new Promise((resolve, reject)=>{
//     var name = "Pedo";
//     if(name == "Pedro"){
//         resolve(name);
//     }
//     else {
//         reject("That wasnt the name niga");
//     }
// });

// event.then((name)=>{
//     console.log(name);
// }).catch((err)=>{
//     console.log(err);
// });


// let lun = document.querySelector('.child');

// lun.addEventListener('click', ()=>{
//     console.log("did u just click this u little niga");
// })

const obj = {
    name: "ajay",
    sayhi(){
        console.log(this.name);
    }
};

obj.sayhi();

obj.wow = function(){
    let ooo = "ajay func";
    console.log(this.ooo);
}
obj.wow();