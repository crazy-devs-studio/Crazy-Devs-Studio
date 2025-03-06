$(document).ready(function(){
    $('.game-carousel').slick({
        infinite: true,          // Carrossel infinito
        slidesToShow: 3,         // Número de slides visíveis
        slidesToScroll: 1,       // Número de slides a rolar por vez
        autoplay: true,          // Reprodução automática
        autoplaySpeed: 3000,     // Intervalo de transição (3 segundos)
        arrows: true,            // Setas de navegação
        dots: true,              // Pontos de navegação
        responsive: [            // Configurações responsivas
            {
                breakpoint: 768, // Para telas menores que 768px
                settings: {
                    slidesToShow: 2, // Mostra 2 slides
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480, // Para telas menores que 480px
                settings: {
                    slidesToShow: 1, // Mostra 1 slide
                    slidesToScroll: 1
                }
            }
        ]
    });
});