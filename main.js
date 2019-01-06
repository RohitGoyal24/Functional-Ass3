Num1 = [1, 3, 4, 5, 8, 4];
function MapThis(array, callback){
    let t = array.map(function(x){
        return x * 3;
    })
   function callback(){
       return t; 
   }
   return callback(); 
}
console.log(MapThis(Num1));
