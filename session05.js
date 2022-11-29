// Creando elementos HTML desde JS
const $root = document.getElementById('root');

const $form = document.createElement('form');

// LABEL

const $div1 = document.createElement('div');
const $div2 = document.createElement('div');
const $div3 = document.createElement('div');
const $div4 = document.createElement('div');
$div1.classList.add('mb-3')
$div2.classList.add('mb-3')
$div3.classList.add('mb-3')
$div4.classList.add('mb-3')

const $labelnombre = document.createElement('label');
$labelnombre.setAttribute('for','nombre');
$labelnombre.textContent = 'Nombres:';
$labelnombre.classList.add('form-label');
$div1.append($labelnombre)  

const $inputnombre = document.createElement('input');
$inputnombre.setAttribute('type','text')
$inputnombre.setAttribute('name','nombre')
$inputnombre.setAttribute('id','nombre')
$inputnombre.classList.add('form-control');

$div1.append($inputnombre)
$form.append($div1)

const $labelhoras = document.createElement('label');
$labelhoras.setAttribute('for', 'horas');
$labelhoras.textContent = 'Cantidad de Horas';
$labelhoras.classList.add('form-label');

$div2.append($labelhoras)

const $inputhoras = document.createElement('input');
$inputhoras.setAttribute('type', 'number');
$inputhoras.setAttribute('name', 'numero');
$inputhoras.setAttribute('id', 'horas');
$inputhoras.classList.add('form-control');

$div2.append($inputhoras)
$form.append($div2)


const $labelcategoria = document.createElement('label');
$labelcategoria.textContent = 'Elige tu categoria:'
$labelcategoria.classList.add('form-label');

$div3.append($labelcategoria)

const $divcheck1 = document.createElement('div')
$divcheck1.classList.add('form-check')
const $divcheck2 = document.createElement('div')
$divcheck2.classList.add('form-check')
const $divcheck3 = document.createElement('div')
$divcheck3.classList.add('form-check')
const $divcheck4 = document.createElement('div')
$divcheck4.classList.add('form-check')
const $divcheck5 = document.createElement('div')
$divcheck5.classList.add('form-check')
const $divcheck6 = document.createElement('div')
$divcheck6.classList.add('form-check')
const $divcheck7 = document.createElement('div')
$divcheck7.classList.add('form-check')

const $inputcategoria1 = document.createElement('input');
const $textoRadio1 = document.createElement('span');

$textoRadio1.textContent = 'A';
$inputcategoria1.setAttribute('type', 'radio')
$inputcategoria1.setAttribute('name', 'categoria')
$inputcategoria1.setAttribute('value', '40')
$inputcategoria1.classList.add('form-check-input')
$divcheck1.append($inputcategoria1)
$divcheck1.append($textoRadio1)
$div3.append($divcheck1)


const $inputcategoria2 = document.createElement('input');
const $textoRadio2 = document.createElement('span');
$textoRadio2.textContent = 'B';
$inputcategoria2.setAttribute('type', 'radio')
$inputcategoria2.setAttribute('name', 'categoria')
$inputcategoria2.setAttribute('value', '35')
$inputcategoria2.classList.add('form-check-input')
$divcheck2.append($inputcategoria2)
$divcheck2.append($textoRadio2)

$div3.append($divcheck2)

const $inputcategoria3 = document.createElement('input');
const $textoRadio3 = document.createElement('span');
$textoRadio3.textContent = 'C';
$inputcategoria3.setAttribute('type', 'radio')
$inputcategoria3.setAttribute('name', 'categoria')
$inputcategoria3.setAttribute('value', '30')
$inputcategoria3.classList.add('form-check-input')
$divcheck3.append($inputcategoria3)
$divcheck3.append($textoRadio3)
$div3.append($divcheck3)

$form.append($div3);

const $labelanios = document.createElement('label');
$labelanios.textContent = 'Elige tus años de servicio:';
$labelanios.classList.add('form-label');

$div4.append($labelanios)

const $radioanios1 = document.createElement('input');
const $textoAnio1 = document.createElement('span');
$textoAnio1.textContent = '1 - 3 años'
$radioanios1.setAttribute('type', 'radio')
$radioanios1.setAttribute('name', 'anios')
$radioanios1.setAttribute('value', '0.15')
$radioanios1.classList.add('form-check-input')

$divcheck4.append($radioanios1);
$divcheck4.append($textoAnio1)
$div4.append($divcheck4)

const $radioanios2 = document.createElement('input');
const $textoAnio2 = document.createElement('span');
$textoAnio2.textContent = '4 - 7 años'
$radioanios2.setAttribute('type', 'radio')
$radioanios2.setAttribute('name', 'anios')
$radioanios2.setAttribute('value', '0.2')
$radioanios2.classList.add('form-check-input')

$divcheck5.append($radioanios2)
$divcheck5.append($textoAnio2)
$div4.append($divcheck5)

const $radioanios3 = document.createElement('input');
const $textoAnio3 = document.createElement('span');
$textoAnio3.textContent = '8 - 12 años'
$radioanios3.setAttribute('type', 'radio')
$radioanios3.setAttribute('name', 'anios')
$radioanios3.setAttribute('value', '0.3')
$radioanios3.classList.add('form-check-input')

$divcheck6.append($radioanios3)
$divcheck6.append($textoAnio3)
$div4.append($divcheck6)

const $radioanios4 = document.createElement('input');
const $textoAnio4 = document.createElement('span');
$textoAnio4.textContent = '13 años a más...'
$radioanios4.setAttribute('type', 'radio')
$radioanios4.setAttribute('name', 'anios')
$radioanios4.setAttribute('value', '0.35')
$radioanios4.classList.add('form-check-input')

$divcheck7.append($radioanios4)
$divcheck7.append($textoAnio4)

$div4.append($divcheck7)
$form.append($div4)

const $btnsubmit = document.createElement('button');
$btnsubmit.textContent = 'Enviar';
$btnsubmit.classList.add('btn', 'btn-primary', 'w-100', 'my-2')
// $btnsubmit.setAttribute('type','submit')
$form.append($btnsubmit)

$root.append($form)
// 

$btnsubmit.addEventListener('click', (e) => {
    e.preventDefault()
    let nombres = $inputnombre.value;
    let valorCategorias = 0;
    let valorbonificacion = 0;
    let cantHoras = $inputhoras.value;
    let bonificacion = 0;
    let sueldoBasico = 0;
    let sueldoNeto = 0;
    let letracategoria = ''
    let textAnios = ''

    if( $inputcategoria1.checked ) {
        valorCategorias = $inputcategoria1.value;
        letracategoria = 'A'
    }
    if( $inputcategoria2.checked ) {
        valorCategorias = $inputcategoria2.value;
        letracategoria = 'B'
    }
    if( $inputcategoria3.checked ) {
        valorCategorias = $inputcategoria3.value;
        letracategoria = 'C'
    }

    if($radioanios1.checked) {
        valorbonificacion = $radioanios1.value;
        textAnios = '1-3'
    } else if($radioanios2.checked) {
        valorbonificacion = $radioanios2
        textAnios = '4-7'
    } else if($radioanios3.checked) {
        valorbonificacion = $radioanios3
        textAnios = '8-12'
    } else {
        valorbonificacion = $radioanios4
        textAnios = '13-m'
    }

   
    sueldoBasico = cantHoras * valorCategorias;
    bonificacion = sueldoBasico * valorbonificacion;
    sueldoNeto = (sueldoBasico + bonificacion) * 0.8;

    let mensaje = `
    <p>${nombres} de Categoria ${letracategoria} y con ${textAnios} de servicio recibirá:</p>
    <p> Sueldo Básico: S/ ${sueldoBasico}</p>
    <p> Bonificación por Años de servicio: S/ ${bonificacion}</p>
    <p> Sueldo Neto: S/ ${sueldoNeto} (80% del sueldo bruto total.)
    `

    const div = document.createElement('div')
    div.style.color = 'white'
    div.style.padding = '10px'
    div.classList.add('my-3','bg-secondary', 'text-light', 'rounded')

    div.innerHTML = mensaje
    $root.append(div);

})


