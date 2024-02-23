function ConfirmEdit() {
    let text;
    if (confirm("Are you sure you want to edit this customer?") == true) {
    } else {
    }
    document.getElementById("demo").innerHTML = text;
}

function ConfirmDelete() {
    let text;
    if (confirm("Are you sure you want to delete this customer?") == true) {
    } else {
    }
    document.getElementById("demo").innerHTML = text;
}