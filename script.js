function copyToClipboard(id) {
    const text = document.getElementById(id).textContent;
    navigator.clipboard.writeText(text).then(() => {
        showToast("¡Copiado!");
    }).catch(err => {
        console.error("Error al copiar: ", err);
    });
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000); // Desaparece luego de 2 segundos
}

function copyEmail() {
    const email = "victoriavielmaromero@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        showToast("¡Correo copiado!");
    }).catch(err => {
        console.error("Error al copiar el correo: ", err);
    });
}
