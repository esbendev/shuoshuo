# la idea es usar esto para generar las diferentes
# páginas necesarias para que funcione el quiz...

# antes tenía todos los scripts en un quiz.html
# y estaba haciendo un montón de requests innecesarios.

import os
from natsort import natsorted

# CONSTANTES
tituloQuiz = ""
subtituloQuiz = ""
pathQuizActual = ""
pathDeDatos = "./datos/"
pathDeQuiz = "./quiz/"

contenidoHTMLQuiz = """<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\">
    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">
    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>
    <link href=\"https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300&family=Roboto:wght@100;400&display=swap\" rel=\"stylesheet\">
    <title>Quiz</title>
    <link rel=\"stylesheet\" href=\"../quiz-style.css\">
</head>
<body>
    <header>
        <nav>
            <a href=\"../index.html\">back</a>
        </nav>
    </header>
    <main>
        <header class=\"quiz-info\">
            <h1 class=\"titulo-quiz\" id=\"titulo-quiz\">{tituloQuiz}</h1>
            <h2 class=\"subtitulo-quiz\" id=\"subtitulo-quiz\">{subtituloQuiz}</h2>
            <div class=\"tarjeta-actual\" id=\"tarjeta-actual\">
                <p></p>
            </div>
        </header>
        <div class=\"parte-1\">
            <div class=\"caracteres\" id=\"caracteres\">
                <p></p>
            </div>
            <div class=\"pinyin\" id=\"pinyin\">
                <p></p>
            </div>
            <div class=\"definicion\" id=\"definicion\">
                <p></p>
            </div>
        </div>
        <div class=\"input\">
            <input type=\"text\" class=\"inputUsuario\" id=\"inputUsuario\" onkeydown=\"verTecla(event)\">
        </div>
        <div class=\"botones\">
            <!-- <button class=\"boton-\"></button> -->
            <button class=\"botones_boton boton_no-se\" id=\"boton_no-se\" onclick=\"noSe()\">I don't know</button>
            <button class=\"botones_boton boton_chequear\" id=\"boton_chequear\" onclick=\"chequear()\">Check</button>
            <button class=\"botones_boton boton_siguiente esconder_boton\" id=\"boton_siguiente\" onclick=\"clickEnSiguiente()\">Next</button>
        </div>
    </main>
    <script src=\"../scripts/datosGenerales.js\"></script>
    <!-- quiz actual -->
    <script src=\"{pathQuizActual}\"></script>
<script src=\"../scripts/logica.js\"></script>
</body>
</html>"""

contenidoHTMLIndex = """<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\">
    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">
    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>
    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap\" rel=\"stylesheet\">
    <title>Chinese Practice</title>
    <link rel=\"stylesheet\" href=\"index-style.css\">
</head>
<body>
    <!-- cargar menu con js usando lista de páginas -->
    <main>
        <nav id=\"menuPrincipal\" class=\"menuPrincipal\">
        {linksDelNavIndex}
        </nav>
    </main>
    <footer>With ❤️ by <a href=\"https://esbendev.com\">@esbendev</a></footer>
    <script src=\"./scripts/datosGenerales.js\"></script>
</body>
</html>
"""


def borrar_quizes_actuales():
    listaDeArchivos = os.listdir(pathDeQuiz)
    for nombreArchivo in natsorted(listaDeArchivos):
        # for nombreArchivo in sorted(listaDeArchivos):
        os.remove(os.path.join(pathDeQuiz, nombreArchivo))


def ordenarPorNumero(item):
    # item = item.replace("/","").replace("quiz","").replace(".html","").replace("-sentences","").replace("-vocab","").replace("lesson","")
    # print("{item}".format(item=item))
    return item
    # primerItem = item[0].replace("/","").replace("quiz","").replace(".js","").replace("-sentences","").replace("-vocab","").replace("lesson","")
    # segundoItem = item[1].replace("/","").replace("quiz","").replace(".js","").replace("-sentences","").replace("-vocab","").replace("lesson","")
    # print("{primerItem},{segundoItem}".format(primerItem=primerItem,segundoItem=segundoItem))
    # print("{item}".format(item=item))
    # if (primerItem.isdigit() and segundoItem.isdigit()):
    #     if (primerItem>segundoItem):
    #         print("{primerItem}>{segundoItem}".format(primerItem=primerItem,segundoItem=segundoItem))
    #         return (primerItem,segundoItem)
    #     else:
    #         print("{primerItem}<{segundoItem}".format(primerItem=primerItem,segundoItem=segundoItem))
    #         return (segundoItem,primerItem)
    # else:
    #     print("no son digitos")
    #     return False


# QUIZES
def armar_quizes():
    listaDeArchivos = os.listdir(pathDeDatos)
    # for nombreArchivo in sorted(listaDeArchivos, key=ordenarPorNumero):
    for nombreArchivo in natsorted(listaDeArchivos):
        if nombreArchivo.endswith(".js"):
            pathQuizActual = "." + pathDeQuiz + nombreArchivo
            pathDatosActual = "." + pathDeDatos + nombreArchivo
            print(pathQuizActual)
            with open(
                os.path.join(pathDeQuiz, pathQuizActual.replace(".js", ".html")), "w"
            ) as archivoQuiz:
                partesDelTitulo = separar_titulo_de_subtitulo(
                    nombreArchivo.replace(".js", "")
                )

                if len(partesDelTitulo) == 2:
                    tituloQuiz = transformar_en_titulo(partesDelTitulo[0])
                    subtituloQuiz = transformar_en_titulo(partesDelTitulo[1])
                    # tipoQuiz = transformar_en_titulo(partesDelTitulo[2])
                    archivoQuiz.write(
                        contenidoHTMLQuiz.format(
                            tituloQuiz=tituloQuiz,
                            subtituloQuiz=subtituloQuiz,
                            pathQuizActual=pathDatosActual,
                        )
                    )
                # else:
                #     tituloQuiz = transformar_en_titulo(partesDelTitulo[0])
                #     subtituloQuiz = ""
                # print(contenidoHTML + pathQuizActual + contenidoParte2)


# INDEX PAGE
def armar_index():
    listaDeQuizesCreados = os.listdir(pathDeQuiz)
    templateDeLinkHeader = '<h2 class="link-header">{tituloSeccion}</h2>'
    templateInicioGrupoSubs = '<div class="grupo-de-sub-links">'
    templateFinGrupoSubs = "</div>"
    templateDeLinkSub = (
        '<a class="link-sub" href="quiz/{nombreDelArchivo}">{tituloQuiz}</a>'
    )
    linksDelNavIndex = ""
    tituloAnterior = ""
    listaDeLinksCategorizados = []
    categorias = {}
    menuCompleto = ""
    for nombreArchivo in natsorted(listaDeQuizesCreados):
        # for nombreArchivo in sorted(listaDeQuizesCreados,key=ordenarPorNumero):
        seccion = nombreArchivo.split("-")[0]
        if seccion not in categorias:
            categorias[seccion] = []
        categorias[seccion].append(nombreArchivo)

    for seccion in categorias:
        print(seccion)
        tituloSeccion = transformar_en_titulo(seccion)
        menuCompleto += templateDeLinkHeader.format(tituloSeccion=tituloSeccion)
        menuCompleto += templateInicioGrupoSubs
        for pathCompletoArchivo in categorias[seccion]:
            print(pathCompletoArchivo)
            partesDelTitulo = separar_titulo_de_subtitulo(
                pathCompletoArchivo.replace(".html", "")
            )

            if len(partesDelTitulo) == 2:
                tituloQuiz = transformar_en_titulo(partesDelTitulo[0])
                subtituloQuiz = transformar_en_titulo(partesDelTitulo[1])
                menuCompleto += templateDeLinkSub.format(
                    nombreDelArchivo=pathCompletoArchivo, tituloQuiz=subtituloQuiz
                )

        menuCompleto += templateFinGrupoSubs
    with open("./index.html", "w") as archivoIndex:
        archivoIndex.write(contenidoHTMLIndex.format(linksDelNavIndex=menuCompleto))
    # for nombreArchivo in sorted(listaDeQuizesCreados):
    #     partesDelTitulo = separar_titulo_de_subtitulo(nombreArchivo.replace(".html",""))

    #     if (len(partesDelTitulo) == 3):
    #         tituloQuiz = transformar_en_titulo(partesDelTitulo[0])
    #         subtituloQuiz = transformar_en_titulo(partesDelTitulo[1])
    #         tipoQuiz = transformar_en_titulo(partesDelTitulo[2])

    # else:
    #     tituloQuiz = transformar_en_titulo(partesDelTitulo[0])
    #     subtituloQuiz = ""


def separar_titulo_de_subtitulo(quiz_actual):
    return quiz_actual.split("-")


def transformar_en_titulo(titulo):
    titulo = titulo[0].upper() + titulo[1:]
    return titulo


borrar_quizes_actuales()
armar_quizes()
armar_index()
