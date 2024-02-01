function navAgregarMain(titulo, url) {
    return `<a class="link-main" href="` + url + `">` + titulo + `</a>`;
}

function navAgregarSub(titulo, url, tipoAnterior) {
    let respuestaFinal = ``;
    if (tipoAnterior == tiposDeLink.header) {
        respuestaFinal += `<div class="grupo-de-sub-links">`;
    }
    respuestaFinal += `<a class="link-sub" href="` + url + `">` + titulo + `</a>`;
    return respuestaFinal;
}

function navAgregarHeader(titulo, tipoAnterior) {
    let respuestaFinal = ``;
    if (tipoAnterior == tiposDeLink.sub) {
        respuestaFinal += `</div>`;
    }
    respuestaFinal += `<h2 class="link-header">` + titulo + `</h2>`;
    return respuestaFinal;
}

function armarMenuPrincipal() {
    let menuPrincipal = ``;
    let tipoAnterior = tiposDeLink.main;
    for (const url of urls) {
        let urlNombre = url[0];
        let urlUrl = url[1];
        let urlTipo = url[2];
        if (urlNombre != "Home") {
            switch (urlTipo) {
                case tiposDeLink.main:
                    menuPrincipal += navAgregarMain(urlNombre, urlUrl);
                    break;
                case tiposDeLink.sub:
                    menuPrincipal += navAgregarSub(urlNombre, urlUrl, tipoAnterior);
                    break;
                case tiposDeLink.header:
                    menuPrincipal += navAgregarHeader(urlNombre, tipoAnterior);
                    break;
                default:
                // code block
            }
            tipoAnterior = urlTipo;
        }
    }
    document.getElementById("menuPrincipal").innerHTML = menuPrincipal;
}

armarMenuPrincipal();