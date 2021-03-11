let obj={
    "chapter 1":1,
    "chapter 2":25,
    "chapter 3":47,
    "chapter 4" : 50
}
//finding key using value
let dataOfKeys=Object.keys(obj)//converting object to array
console.log(dataOfKeys)

let dataOfValues=Object.values(obj)
console.log(dataOfValues)



function nearestChapter(pageNo){
    let findKey=dataOfKeys.find(key=>obj[key]===pageNo) //finding the keyname using value passed in the function
    // console.log("closest chapter is " +findKey)

    //finding the nearest page no
   let closestChapter=dataOfValues.reduce(function(prev,curr){
 return Math.abs(curr-pageNo) < Math.abs(prev-pageNo)?curr:prev 
   })
   console.log("closest chapter is is" +closestChapter)

}

nearestChapter(51)

//task

//it should return key
//need to convert object to array
//value will be passed and output shoud be the key