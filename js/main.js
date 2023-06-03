const mx = document.querySelector('#mex');
const us = document.querySelector('#us');
const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

dataLayer = [];

if(!localStorage.getItem('cookies-aceptadas')){
	avisoCookies.classList.add('activo');
	fondoAvisoCookies.classList.add('activo');
} else {
	dataLayer.push({'event': 'cookies-aceptadas'});
}

botonAceptarCookies.addEventListener('click', () => {
	avisoCookies.classList.remove('activo');
	fondoAvisoCookies.classList.remove('activo');

	localStorage.setItem('cookies-aceptadas', true);

	dataLayer.push({'event': 'cookies-aceptadas'});
});




us.addEventListener('click', () => {
    const secUno = document.querySelector('#secUno');
    document.querySelector('#secUno').innerHTML = "";
    const secDos = document.querySelector('#secDos');
    document.querySelector('#secDos').innerHTML = "";
    const secTres = document.querySelector('#secTres');
    document.querySelector('#secTres').innerHTML = "";
    const secCuarto = document.querySelector('#secCuarto');
    document.querySelector('#secCuarto').innerHTML = "";
    const contacto = document.querySelector('#contacto');
    document.querySelector('#contacto').innerHTML = "";

    secUno.insertAdjacentHTML(

        'beforeend',
        `
        <p class="change" >We are a Mexican company, which seeks to be recognized for innovation in the creation of waterproofing, proposing to sell alternatives that make a difference, thus placing as a general objective a positive environmental, social and economic impact, as well as going from hand in hand with a speech that spreads the importance of consuming products that generate the least environmental impact.</p> 
        `
    );

    secDos.insertAdjacentHTML(

        'beforeend',

        `
        <h3>What is Nopally?</h3>
        <p class="change">Nopally is our star product, waterproofing where the main ingredient is the use of nopal, made from eco-technologies. Where with the help of the mucilage produced from the manipulation of the cactus that works as an adherent and the other components of the formula, they make this waterproofing cover all the needs of the consumer, likewise becoming a product that is friendly to the environment, without causing alterations..</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/CkJaDi2Sydc?start=13" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `

    );

    secTres.insertAdjacentHTML(

        'beforeend',

        `
        <h3>Benefits</h3>
        <p class="change">The benefits that our waterproofing contains are multiple, since by containing an organic product it provides us with multiple benefits such as: it protects from cold, environmental humidity, water, insects, as well as helps regulate the internal temperature of construction and complies one hundred percent with its main function, which is to be waterproof. But it is also important to recognize that there are more benefits than these, but also by consuming it, we are part of a social change, since we give preference to Mexican products, which are seeking to innovate and give it the importance it deserves. being responsible with the products we usually buy and their environmental impact.</p>
        
        `
    );

    secCuarto.insertAdjacentHTML(

        'beforeend',

        `
        <h3 class="mt-3"">Products</h3>
        
        <div class="hstack gap-3 m-3">
            <input class="form-control me-auto" type="text" placeholder="Add your item here..." aria-label="Add your item here...">
            <button type="button" class="btn btn-secondary"><i class="bi bi-search"></i></button>
            <div class="vr"></div>
            <button type="button" class="btn btn-outline-danger"><i class="bi bi-trash3"></i></button>
          </div>
        <div class="hstack gap-3">
            <div class="p-2 ms-4 mt-3">
                <img src="./img/brochas.png" alt="">
                <p style="text-align: center;">Natural Bristles </p>

            </div>
            <div class="p-2 mt-3">
                
                <img src="./img/artifi-removebg-preview.png" alt="">
                <p style="text-align: center;">Artificial Bristles </p>
            </div>
            <div class="p-2 mt-3">
                
                <img src="./img/encalar-removebg-preview.png" alt="">
                <p style="text-align: center;">Whitewashing Brush
                </p>
            
            </div>
        </div>
        <div class="hstack gap-3">
            <div class="p-2 ms-4 mt-3" style="width: 15.3rem;">
                <img src="./img/productprin.png" style="margin-left: 1rem;" alt="">
                <p style="text-align: center;">Presentation 1.5 Liters </p>

            </div>
            <div class="p-2 mt-3" style="width: 15.3rem;">
                
                <img src="./img/productprin.png" style="margin-left: 1rem;" alt="">
                <p style="text-align: center;">Presentation 5 Liters </p>
            </div>
            <div class="p-2 mt-3" style="width: 15.3rem;">
                
                <img src="./img/productprin.png" style="margin-left: 1rem;" alt="">
                <p style="text-align: center;">Presentation 10 Liters </p>
            
            </div>
        </div> 
        <div class="hstack gap-3">
            <div class="p-2 ms-4 mt-3">
                <img src="./img/rodilloAcri-removebg-preview.png" alt="">
                <p style="text-align: center;">Acrylic Roller </p>

            </div>
            <div class="p-2 mt-3">
                
                <img src="./img/rodilloFelpa-removebg-preview.png" alt="">
                <p style="text-align: center;">Plush Roller </p>
            </div>
            <div class="p-2 mt-3">
                
                <img src="./img/felpa-removebg-preview.png" alt="">
                <p style="text-align: center;">
                Felt for Roller </p>
            
            </div>
        </div> 
        <br>
        <div class="vstack gap-2 col-md-5 mx-auto">
            <button type="button" class=" btn-cart "><i class="bi bi-cart-check"></i></button>
        </div>  

        <br>
        `
    )

    contacto.insertAdjacentHTML(

        'beforeend',

        `
      <div class="content-rigth">
      <h4 class="ms-2">Contact</h4>
      <div class="input-group mb-3 ms-2">
          <span class="input-group-text" id="basic-addon1">@</span>
          <input type="text" class="form-control" placeholder="Enter your name" aria-label="Username"
              aria-describedby="basic-addon1">
      </div>

      <div class="input-group mb-3 ms-2">
          <input type="text" class="form-control" placeholder="Enter your email" aria-label="Recipient's username"
              aria-describedby="basic-addon2">
          <span class="input-group-text" id="basic-addon2">@example.com</span>
      </div>

      <div class="input-group mb-3 ms-2">
          <input type="text" class="form-control" placeholder="Enter your phone number" aria-label="Recipient's username" aria-describedby="button-addon2">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="bi bi-send-fill"></i></button>
        </div>
  </div>

  <div class="col-xl-4 content-left">
      
      <h4>Social Networks</h4>
      <ul class="social-footer">
          <li> <a href="https://www.facebook.com/?stype=lo&jlou=Afddcacb6vL9S5oxyxn8DkRd-m3h_k1wAPywQiL1A5sQCFYoW-maCDWRcg1h7iqzgIIWdeMPc_N0AuFtBAsyK4YO42O7orageR9fMBUEUvXZ8Q&smuh=30929&lh=Ac-tF2DkFH7DAyy_fQI"> <i class="bi bi-facebook icon"> </i> </a> </li>
          <li><a href="https://www.instagram.com/accounts/login/"><i class="bi bi-instagram icon"></i></a></li>
          <li><a href="https://twitter.com/?lang=es"><i class="bi bi-twitter icon"></i></a></li>
          <li>  <a href="https://github.com/AlejandroAngeles9803"><i class="bi bi-github icon"> </i> </a> </li>
      </ul>
  </div>      
      `

    )
});

mx.addEventListener('click', () => {

    const secUno = document.querySelector('#secUno');
    document.querySelector('#secUno').innerHTML = "";
    const secDos = document.querySelector('#secDos');
    document.querySelector('#secDos').innerHTML = "";
    const secTres = document.querySelector('#secTres');
    document.querySelector('#secTres').innerHTML = "";
    const secCuarto = document.querySelector('#secCuarto');
    document.querySelector('#secCuarto').innerHTML = "";
    const contacto = document.querySelector('#contacto');
    document.querySelector('#contacto').innerHTML = "";

    secUno.insertAdjacentHTML(

        'beforeend',
        `
        <p class="change" >Somos una empresa mexicana, que busca ser reconocida por la inovacion en la creacion de ipermeabilizantes, proponiendo el poner a la venta alternativas que hagan la diferencia, así colocando como objetivo prncipal el general un impacto ambiental, social y económico positivo, así como ir de la mano con un discurso que difundsa la imortancia de consuir productos que generen el menor impacto ambiental.</p>
        `
    );

    secDos.insertAdjacentHTML(

        'beforeend',

        `
        <h3>¿Qué es Nopally?</h3>
        <p class="change">Nopally es nuestro producto estrella, impermeabilizante donde el principal ingrdiente es el uso del nopal, realizado apartir de ecotecnias. Donde con la ayuda del mucilago producido a partir de la manipulación del nopal que funciona como adherente y los demas componentes de la formula, hacen que este impermeabilizante cubra todas las necesidades del consuidor así mismo logrando ser un producto amiganle con el ambiente, sin provocar alteraciones.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/CkJaDi2Sydc?start=13" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `

    );

    secTres.insertAdjacentHTML(

        'beforeend',

        `
        <h3>Beneficios</h3>
        <p class="change">El aprovechamien que contiene nuestro impermeabiliznate son multiples, ya que al contener un producto organico nos brinda multiples beneficios como lo podian ser: protege del frío, la humedad del ambiente, del agua, de los insectos, así como ayda a regular la temperatura intera de la construcción y cumple al cien por ciento con su principal función que es ser impermeable. Pero tambíen es importante reconocer que hay mas benefiios mas haya que estos, si no que tambien al consumirlo, hacemos parte de un cambio social, ya que le damos preferencia a productos mexicanos, que estan en la busqueda de innovar y darle la importancia que merece el ser reponsable con los productos que solemos adquirir y su impaco ambiental.</p>
        
        `
    );

    secCuarto.insertAdjacentHTML(

        'beforeend',

        `
        <h3 class="mt-3"">Productos</h3>
        
        <div class="hstack gap-3 m-3">
            <input class="form-control me-auto" type="text" placeholder="Busca tu producto..." aria-label="Add your item here...">
            <button type="button" class="btn btn-secondary"><i class="bi bi-search"></i></button>
            <div class="vr"></div>
            <button type="button" class="btn btn-outline-danger"><i class="bi bi-trash3"></i></button>
          </div>
        <div class="hstack gap-3">
            <div class="p-2 ms-4 mt-3">
                <img src="./img/brochas.png" alt="">
                <p style="text-align: center;">Cerdas Naturales </p>

            </div>
            <div class="p-2 mt-3">
                
                <img src="./img/artifi-removebg-preview.png" alt="">
                <p style="text-align: center;">Cerdas Artificiales </p>
            </div>
            <div class="p-2 mt-3">
                
                <img src="./img/encalar-removebg-preview.png" alt="">
                <p style="text-align: center;">Brocha para Encalar </p>
            
            </div>
        </div>
        <div class="hstack gap-3">
            <div class="p-2 ms-4 mt-3" style="width: 15.3rem;">
                <img src="./img//productprin.png" style="margin-left: 1rem;" alt="">
                <p style="text-align: center;">Presentación 1.5 Litros </p>

            </div>
            <div class="p-2 mt-3" style="width: 15.3rem;">
                
                <img src="./img//productprin.png" style="margin-left: 1rem;" alt="">
                <p style="text-align: center;">Presentación 5 Litros </p>
            </div>
            <div class="p-2 mt-3" style="width: 15.3rem;">
                
                <img src="./img//productprin.png" style="margin-left: 1rem;" alt="">
                <p style="text-align: center;">Presentación 10 Litros </p>
            
            </div>
        </div> 
        <div class="hstack gap-3">
            <div class="p-2 ms-4 mt-3">
                <img src="./img/rodilloAcri-removebg-preview.png" alt="">
                <p style="text-align: center;">Rodillo Acrilico </p>

            </div>
            <div class="p-2 mt-3">
                
                <img src="./img/rodilloFelpa-removebg-preview.png" alt="">
                <p style="text-align: center;">Rodillo de Felpa </p>
            </div>
            <div class="p-2 mt-3">
                
                <img src="./img/felpa-removebg-preview.png" alt="">
                <p style="text-align: center;">Felpa para Rodillo </p>
            
            </div>
        </div> 
        <br>
        <div class="vstack gap-2 col-md-5 mx-auto">
            <button type="button" class=" btn-cart "><i class="bi bi-cart-check"></i></button>
        </div>  

        <br>
        `
    )

    contacto.insertAdjacentHTML(

        'beforeend',

        `
      <div class="content-rigth">
      <h4 class="ms-2">Contacto</h4>
      <div class="input-group mb-3 ms-2">
          <span class="input-group-text" id="basic-addon1">@</span>
          <input type="text" class="form-control" placeholder="Ingresa tu nombre" aria-label="Username"
              aria-describedby="basic-addon1">
      </div>

      <div class="input-group mb-3 ms-2">
          <input type="text" class="form-control" placeholder="Ingresa tu correo electronico" aria-label="Recipient's username"
              aria-describedby="basic-addon2">
          <span class="input-group-text" id="basic-addon2">@example.com</span>
      </div>

      <div class="input-group mb-3 ms-2">
          <input type="text" class="form-control" placeholder="Ingresa tu número de telefono" aria-label="Recipient's username" aria-describedby="button-addon2">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="bi bi-send-fill"></i></button>
        </div>
      </div>

      <div class="col-xl-4 content-left">
      
      <h4>Redes sociales</h4>
      <ul class="social-footer">
          <li> <a href="https://www.facebook.com/?stype=lo&jlou=Afddcacb6vL9S5oxyxn8DkRd-m3h_k1wAPywQiL1A5sQCFYoW-maCDWRcg1h7iqzgIIWdeMPc_N0AuFtBAsyK4YO42O7orageR9fMBUEUvXZ8Q&smuh=30929&lh=Ac-tF2DkFH7DAyy_fQI"> <i class="bi bi-facebook icon"> </i> </a> </li>
          <li><a href="https://www.instagram.com/accounts/login/"><i class="bi bi-instagram icon"></i></a></li>
          <li><a href="https://twitter.com/?lang=es"><i class="bi bi-twitter icon"></i></a></li>
          <li>  <a href="https://github.com/AlejandroAngeles9803"><i class="bi bi-github icon"> </i> </a> </li>
      </ul>
      </div>
      `
    )
});

window.onscroll = function () {
    if (document.documentElement.scrollTop >= 300) {
        document.querySelector('.top-container').classList.add('show');


    } else {
        document.querySelector('.top-container').classList.remove('show');
    }

};

document.querySelector('.top-container').addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });


});

