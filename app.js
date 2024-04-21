const { name } = require('ejs');
const express = require('express');
const app = express();

// Configurar el motor de plantillas
app.set('views', './views');

app.use(express.static('public'));

// Index
app.get('/', (req, res) => {
  const slider = [
    {
      titulo : 'Petology',
      subTitulo: 'Amor y cuidado para tus mascotas',
      tex: 'nuestro compromiso es combinar el amor por las mascotas con la excelencia veterinaria, asegurando que tus compañeros peludos reciban la mejor atención posible.'

    },
    {
      titulo : 'Petology',
      subTitulo: 'Salud y felicidad para tu amigo peludo',
      text: 'En Petology, cada cola que menea es una señal de nuestra dedicación a proporcionar atención integral para mantener sonrisas peludas en cada hogar'
    },
    {
      titulo : 'Petology',
      subTitulo: 'Cuidando sonrisas peludas',
      text: 'Cada cola que menea es una señal de nuestra dedicación a proporcionar atención integral para mantener sonrisas peludas en cada hogar'
    },
    {
      titulo : 'Petology',
      subTitulo: 'Amor en cada visita',
      text: 'Nuestro objetivo es llenar cada visita con amor y cuidado, creando vínculos duraderos con tus adorables amigos peludos'
    }
  ]
  res.render('index.ejs', { slider, text2: 'Nuestros engreídos', locacion: 'Trujillo',
  telefono:'95803166', 
  correo: 'guao@tecsup.edu.pe'});
});

// Doctores
app.get('/doctores', (req, res) => {
  const doctores = [
    { 
      name: 'Patsy Delgado Cubas',
      texto: 'Veterinaria con un enfoque holístico en la salud animal, experta en medicina alternativa y terapias complementarias.',
      telefono: '958031820',
    },
    { 
      name: 'Gabriel Chavezs Benites',
      texto: 'Veterinario con una pasión innata por la vida silvestre, siempre lleva consigo su cámara para capturar momentos únicos en la naturaleza.',
      telefono: '958031999',
    },
    { 
      name: 'Miguel Fernandez Rios',
      texto: 'Veterinario equino con manos firmes y un espíritu tranquilo, conocido por su habilidad para calmar a los caballos más nerviosos.',
      telefono: '999031820',
    },
    { 
      name: 'David Ruiz Torres',
      texto: 'Veterinario de pequeños animales con un sentido del humor contagioso, capaz de tranquilizar a las mascotas más temerosas con su calidez y paciencia',
      telefono: '999031820',
    },
    { 
      name: 'Cesar',
      texto: 'jusjsjsjsjsjjssj',
      telefono: '999999999',
    },
  ];

  res.render('doctores.ejs', { doctores ,
    locacion: 'Trujillo',
    telefono:'95803166', 
    correo: 'guao@tecsup.edu.pe'});
});

//dogs
app.get('/pets', (req, res) => {
  res.render('pet.ejs', { 
    locacion: 'Trujillo',
    telefono: '95803166', 
    correo: 'guao@tecsup.edu.pe',
    pets: [
      {
        img: "images/g-1.png"
      },
      {
        img: 'images/g-2.png'
      },
      { 
        img: 'images/g-3.png'
      },
      { 
        img: 'images/g-4.png'
      },
      { 
        img: 'images/g-5.png'
      }
    ]
  });
});


//servicio
app.get('/service', (req, res) => {
  const service =[
    {
      Servicio : 'Spa de Mascotas', 
      descripcion : 'Servicio especializado en el cuidado y bienestar de tus mascotas. Nuestro spa ofrece tratamientos de lujo que incluyen baños relajantes, masajes terapéuticos y sesiones de peluquería. Tu mascota se sentirá mimada y rejuvenecida después de una visita a nuestro spa.',
    },
    {
      Servicio : 'Vacunas',
      descripcion :'En nuestro centro médico, nos tomamos muy en serio la salud de tus mascotas. Ofrecemos un completo programa de vacunación para prevenir enfermedades comunes y proteger la salud de tus queridos compañeros. Nuestro equipo de veterinarios altamente calificados garantiza la seguridad y eficacia de cada vacuna administrada.',
    },
    {
      Servicio: 'Emergencias',
      descripcion : 'Nuestro equipo está disponible las 24 horas del día, los 7 días de la semana, para atender cualquier emergencia que pueda surgir con tus mascotas. Ya sea un accidente, una enfermedad repentina o cualquier otra situación urgente, puedes confiar en nosotros para brindar atención médica inmediata y de calidad a tu mascota. Su bienestar es nuestra prioridad.',
    }
  ]
    res.render('service.ejs', { service, boton: 'Te esperamos', titulo: 'Nuestros servicios',  locacion: 'Trujillo',
    telefono:'95803166', 
    correo: 'guao@tecsup.edu.pe'});
});

//contacto
app.get('/contact', (req, res) => {
  res.render('contact.ejs', {
    title: 'Contáctanos',
    description: 'Completa todos los campos del formulario.',locacion: 'Trujillo',
    telefono:'95803166', 
    correo: 'guao@tecsup.edu.pe'
  });
})

// Configurar EJS como motor de plantillas para una ruta específica
app.engine('ejs', require('ejs').renderFile);

app.get('/buy', (req, res) => {
  res.render('buy.ejs');
})


// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Aplicación web dinámica ejecutándose en el puerto 3000');
});
