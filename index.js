function submitData (name, email) {
    return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({name, email})
})
    .then(res => res.json())
    .then(data => {
        let newId = data.id;
        document.body.append(newId);
        console.log(submitData)
    })
    .catch(error => {
        const errorMessage = document.createElement('div');
        errorMessage.textContent = error.message;
        document.body.append(errorMessage);
        console.error('Error', error);
    });


    }
