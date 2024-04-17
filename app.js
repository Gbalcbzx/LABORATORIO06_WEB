const { name } = require('ejs');
const express = require('express');
const app = express();

// Configurar el motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));


//doctores
app.get('/doctores', (req, res) => {
  res.render('doctores.ejs', { name1: 'Patsy Delgado Cubas',
  name2: 'Gabriel Chavezs Benites',
  name3: 'Miguel Fernandez Rios',
  name4: 'David Ruiz Torres',
  texto1:'Veterinaria con un enfoque holístico en la salud animal, experta en medicina alternativa y terapias complementarias.',
  texto2: 'Veterinario con una pasión innata por la vida silvestre, siempre lleva consigo su cámara para capturar momentos únicos en la naturaleza.',
  texto3:'Veterinario equino con manos firmes y un espíritu tranquilo, conocido por su habilidad para calmar a los caballos más nerviosos.',
  texto4: 'Veterinario de pequeños animales con un sentido del humor contagioso, capaz de tranquilizar a las mascotas más temerosas con su calidez y paciencia',
  n1: '958031820',
  n2: '958031999',
  n3: '999031820',
  n4: '999031820',
  locacion: 'Trujillo',
  telefono:'95803166', 
  correo: 'guao@tecsup.edu.pe'
});
});

// Configurar EJS como motor de plantillas para una ruta específica
app.engine('ejs', require('ejs').renderFile);

// Ruta para renderizar la plantilla EJS
app.get('/index', (req, res) => {
  res.render('index.ejs', { name: 'Usuario EJS' });

  
});

app.get('/service', (req, res) => {
    res.render('service.ejs', { 
        titulo: 'Nuestros Servicios', 
        Servicio1: 'Spa de Mascotas', 
        Servicio2: 'Vacunas', 
        Servicio3: 'Emergencias',
        descripcionS1: 'Servicio especializado en el cuidado y bienestar de tus mascotas. Nuestro spa ofrece tratamientos de lujo que incluyen baños relajantes, masajes terapéuticos y sesiones de peluquería. Tu mascota se sentirá mimada y rejuvenecida después de una visita a nuestro spa.',
        descripcionS2: 'En nuestro centro médico, nos tomamos muy en serio la salud de tus mascotas. Ofrecemos un completo programa de vacunación para prevenir enfermedades comunes y proteger la salud de tus queridos compañeros. Nuestro equipo de veterinarios altamente calificados garantiza la seguridad y eficacia de cada vacuna administrada.',
        descripcionS3: 'Nuestro equipo está disponible las 24 horas del día, los 7 días de la semana, para atender cualquier emergencia que pueda surgir con tus mascotas. Ya sea un accidente, una enfermedad repentina o cualquier otra situación urgente, puedes confiar en nosotros para brindar atención médica inmediata y de calidad a tu mascota. Su bienestar es nuestra prioridad.',
        boton: 'Te esperamos'   
    });
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
