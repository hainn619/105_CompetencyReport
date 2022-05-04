function displayUser() {
    // travel the array
    // get each user
    //display the users

    // append the user on the html table
    let tmp = "";
    let data = readUser();
    let rowdata = $('tbody');
    if (data.length > 0) {
        console.log("we have data")
        for (let i = 0; i < data.length; i++) {
            let client = data[i];
            console.log(client);
            tmp += `<tr>
            <td>${client.fistname}</td>
            <td>${client.lastname}</td>
            <td>${client.gender}</td>           
            <td>${client.email}</td>
            <td>${client.address}</td>
            <td>${client.phone}</td>
            <td>${client.payment}</td>
        </tr>`
        }
        console.log(tmp);
       $("#tbody1").append(tmp);
    }

}
function init() {
    console.log("Listing User")
    displayUser();
    // let users= readUser(); // read the function on the storemager
    // displayUser(users)

}
window.onload = init;