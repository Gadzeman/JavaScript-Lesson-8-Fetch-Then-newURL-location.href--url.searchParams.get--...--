

let target = document.getElementById("target")

fetch("https://jsonplaceholder.typicode.com/users")
    .then (response => {return response.json()})
    .then (users => {
        for (const user of users) {

            let p = document.createElement("p")
            p.classList.add("item")
            p.innerText = user.id + " --> " + user.name + " - "
            target.appendChild(p)

            let a = document.createElement("a")
            a.innerText = "Details"
            a.href = `userDetails.html?data=${JSON.stringify(user)}`
            p.appendChild(a)

        }
    })
