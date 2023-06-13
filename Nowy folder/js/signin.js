let loginData = {};
function signin(e) {
    e.preventDefault();
    loginData = {
        "username": document.getElementById("username").value,
        "password": document.getElementById("password").value,
    };
    console.log(loginData);

    postLogin()
        .then((response) => {
            console.log(response);
        })
    then(() => {
        document.location.href = "/";
         })
        .catch((error) => {
            console.log(error);
        });

}
let postLogin = function () {
    return new Promise(function (resolve, reject) {
        fetch(serverURL + 'signin', {
            "headers": {
                "content-type": "application/json",
            },
            "body": JSON.stringify(loginData),
            "method": "POST",

        })
            .then(response => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                if (data.errors) {
                    reject(data.errors) // Error
                } else {
                    resolve(data)  //sucsess

                }
            })



    })
}

