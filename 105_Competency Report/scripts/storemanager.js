const Store_key = "users";

function saveUser(user) {
    //load the old data
    let oldData=readUser();// getting localstorage info
    oldData.push(user);
    let val = JSON.stringify(oldData);
    localStorage.setItem(Store_key, val)// =>JSON

}
function readUser() {
    let data = localStorage.getItem(Store_key);
    console.log(data);
    if (!data) //is not data?
     {
         //if you get here it means is empty
          return [];// creating the array
     }
    else {
        //we have data
        let list = JSON.parse(data); //pasing JSON to Obj
        return list; // return the list of Obj
    }
}
