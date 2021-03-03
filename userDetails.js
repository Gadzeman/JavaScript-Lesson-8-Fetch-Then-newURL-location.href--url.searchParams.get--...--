

let url = new URL(location.href)
console.log(url)

let data = url.searchParams.get("data")
console.log(data)

let user = JSON.parse(data)
console.log(user)


let div = document.createElement("div")
div.innerText = `${user.id} ${user.name} ${user.email} ${user.company.name}`

document.body.appendChild(div)