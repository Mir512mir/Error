


function signUp(e) {
    e.preventDefault();
    console.log('All w');
    let data = {
        "username": document.getElementById('email').value,
        "password": document.getElementById('psw').value,
        "confirm_password": document.getElementById('psw-repeat').value

    };
    console.log('Data', data);

    fetch(serverURL + 'signup', {
        "headers": {
            "content-type": "application/json",
        },
        "body": JSON.stringify(data),
        "method": "POST",
    })

        .then((response) => { 
            if (response.status == 200) {
                return response.json();
            } 
            if (response.status == 400) {
                throw Error('Во время запроса произошла ошибка "400", попробуйте позже')
            }
            
            throw Error('Произошла неизвестная ошибка');
        })
        .then((data) => {
            localStorage.setItem("id", data.id);
            localStorage.setItem("jwt", data.jwt);
        }).catch((error) => {
            alert(error);
        })

}
function errControl() {
       let users = JSON.parse(xhr.responseText);
         if (xhr.readyState == 4 && xhr.status == "200") {
           console.table(users);
         } else {
           console.error(users);
        }
    }