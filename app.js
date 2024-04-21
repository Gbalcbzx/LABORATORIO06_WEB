const { name } = require('ejs');
const express = require('express');
const app = express();

// Configurar el motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

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
app.get('/pets', (req, res)=>{
  res.render('pet.ejs', {pets: 
    [
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
      },
      {
        img: 'https://estaticos-cdn.prensaiberica.es/clip/823f515c-8143-4044-8f13-85ea1ef58f3a_16-9-discover-aspect-ratio_default_0.jpg'
      },
      {
        img: 'https://t1.ea.ltmcdn.com/es/posts/5/6/2/10_caracteristicas_de_los_perros_24265_600_square.jpg'
      },
      {
        img: 'https://media.tycsports.com/files/2023/11/10/644591/perros_862x485.webp'
      },
      {
        img: 'https://imgmedia.elpopular.pe/640x358/elpopular/original/2021/05/21/60a8112b578f8721394ccaef.webp'
      },
      {
        img: 'https://images.hola.com/imagenes/mascotas/20210324186573/perros-gatos-felices-necesidades/0-933-512/veterinario-a.jpg'
      },
      {
        img: 'https://i.pinimg.com/originals/3e/a0/18/3ea0181962706fae49bee9b69f31446c.jpg'
      },
      {
        img: 'https://img.freepik.com/fotos-premium/corriendo-gatos-felices_257123-13846.jpg'
      },
      {
        img: 'https://www.mascotas.com/cms/revista/Revista_6109d6fc0934f_03082021.jpg'
      },
      {
        img: 'https://es.onlyfresh.com/cdn/shop/articles/dog-g6aa17498a_1920_1024x1024.jpg?v=1659454762'
      },
      {
        img: 'https://s1.elespanol.com/2021/11/11/curiosidades/mascotas/626448862_214582604_1024x576.jpg'
      },
      {
        img: 'https://purina.com.pe/sites/default/files/2022-10/purina-brand-que-sabes-de-los-perros-poodle.jpg'
      }
    ]  
})
})

// Configurar EJS como motor de plantillas para una ruta específica
app.engine('ejs', require('ejs').renderFile);

// Ruta para renderizar la plantilla EJS
app.get('/', (req, res) => {
  res.render('index.ejs', { name: 'Usuario EJS' });

  
});

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
    res.render('service.ejs', { service, boton: 'Te esperamos', titulo: 'Nuestros servicios'});
});

app.get('/contact', (req, res) => {
  res.render('contact.ejs', {
    title: 'Contáctanos',
    description: 'Completa todos los campos del formulario.'
  });
})

app.get('/buy', (req, res) => {
  res.render('buy.ejs');
})

app.get('/perfil/:id', (req, res) => {
    const userId = req.params.id;
    // Aquí puedes buscar los datos del usuario en una base de datos, por ejemplo
    const user = { id: userId, nombre: 'Usuario ' + userId };
    res.render('perfil', { user: user });
  });


// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Aplicación web dinámica ejecutándose en el puerto 3000');
});
