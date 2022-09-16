const joke = document.getElementById("joke");
const btnjoke = document.getElementById("btnjoke")
const getjokedata = async() => {
    const res = await fetch("https://icanhazdadjoke.com", {
        method: "GET",
        headers: {
            Accept: 'application/json'
        }
    })
    const data = await res.json();
    console.log(data);
    joke.innerText = data.joke
        //console.log(Object.keys(data));
        // const keys = Object(data);
        // Object.keys(data).forEach((element) => {
        //     // console.log(element.recordings);
        //     console.log(data.element);

    // });
}
getjokedata();
btnjoke.addEventListener("click", getjokedata)