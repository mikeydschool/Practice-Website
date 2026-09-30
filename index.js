function clicked() {
    document.title = document.querySelector("Input").value;
}
function loading()
{
    if (localStorage.getItem("local")) {
        let local = JSON.parse(localStorage.getItem("local"));
        document.querySelector("#local").innerText = local;
    }
    if (sessionStorage.getItem("session")){
        let session = JSON.parse(sessionStorage.getItem("session"));
        document.querySelector("#session").innerText = session;
    }
}
function addLocal()
{
    let local = JSON.parse(localStorage.getItem("local"));
    local++;
    localStorage.setItem("local", JSON.stringify(local));
    document.querySelector("#local").innerText = local;
}
function addSession()
{
    let session = JSON.parse(sessionStorage.getItem("session"));
    session++
    sessionStorage.setItem("session", JSON.stringify(session));
    document.querySelector("#session").innerText = session;
}
