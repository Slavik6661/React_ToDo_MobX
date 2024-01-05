 const cheackEnternet=()=>{
   if(navigator.onLine){
    return true
   }
   else {
    alert('Нет интернет-соединения');
    return false
  } 
}
export default cheackEnternet
