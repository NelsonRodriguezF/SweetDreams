window.addEventListener("load", function(){
    const enlace1 = document.querySelector(".enlaceBogota")
    const enlace2 = document.querySelector(".enlaceSanAndres")
    const enlace3 = document.querySelector(".enlaceMedellin")
    const enlace4 = document.querySelector(".enlaceTunja")
    const enlace5 = document.querySelector(".enlaceCali")

    enlace1.addEventListener("click", function() {
        let bogota = document.querySelector(".bogota")
        let image = document.querySelector(".c-image")

        image.style.display = "none";
        bogota.style.display = "block"
        }
    )

    enlace2.addEventListener("click", function() {
        let sanandres = document.querySelector(".sanandres")
        let image = document.querySelector(".c-image")

        image.style.display = "none";
        sanandres.style.display = "block"
        }
    )

    enlace3.addEventListener("click", function() {
        let medellin = document.querySelector(".medellin")
        let image = document.querySelector(".c-image")

        image.style.display = "none";
        medellin.style.display = "block"
        }
    )

    enlace4.addEventListener("click", function() {
        let tunja = document.querySelector(".tunja")
        let image = document.querySelector(".c-image")

        image.style.display = "none";
        tunja.style.display = "block"
        }
    )

    enlace5.addEventListener("click", function() {
        let cali = document.querySelector(".cali")
        let image = document.querySelector(".c-image")

        image.style.display = "none";
        cali.style.display = "block"
        }
    )
})