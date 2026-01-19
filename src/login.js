// LoginCRM - Módulo de Autenticación v1.0
function validarAcceso(usuario, password) {
    const credencialesCorrectas = {
        user: "admincrm@gmail.com",
        pass: "Luis2026"
    };

    if (usuario === credencialesCorrectas.user && password === credencialesCorrectas.pass) {
        console.log("Acceso concedido al sistema CRM.");
        return true;
    } else {
        console.log("Credenciales inválidas.");
        return false;
    }
}

//uso para la Baseline
validarAcceso("admincrm@gmail.com", "Luis2026");