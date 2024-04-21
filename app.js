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

  // Testimonios
  const testimonios = [
    {
      nombre: 'María González',
      texto: 'Desde que llevo a mi perro al Centro Veterinario Petology, mi mascota ha estado mucho más feliz y saludable. El personal es increíblemente amable y atento, y siempre me brindan excelentes recomendaciones para el cuidado de mi compañero peludo. ¡Definitivamente recomiendo este lugar!',
      imagen: 'images/client.jpg'
    },
    {
      nombre: 'Carlos Pérez',
      texto: 'Gracias a los expertos en Petology, mi perro pudo superar sus problemas de salud y ahora está más enérgico que nunca. Su atención y cuidado han marcado una gran diferencia en la vida de mi mascota. ¡Son los mejores veterinarios que he conocido!',
      imagen: 'images/client.jpg'
    },
    {
      nombre: 'Pedro Sánchez',
      texto: 'Petology es el lugar perfecto para el cuidado de tu perro. Siempre que llevo a mi mascota, recibe el mejor trato y atención posible. Estoy muy agradecido por el profesionalismo y la pasión que muestran hacia los animales. ¡Altamente recomendado!',
      imagen: 'images/client.jpg'
    }
  ];
  
  res.render('buy.ejs', { testimonios: testimonios });
});

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
