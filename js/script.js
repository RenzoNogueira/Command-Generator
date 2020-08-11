window.onload = _ => {
    document.querySelector("#go_to").addEventListener("click", function () {
        target = document.querySelector("#go_to_command").value
        window.location.href = `#${target}`;
    })
}