// Laboratorio4_IsaacQuinapallo
// Página en común: Home de Instagram
// Ejemplo de Uso de Objetos en Arreglos
// Perfil de Usuario
const user = {
    username: "isaac_quinapallo", //Objetos
    fullName: "Isaac Quinapallo", //Objetos
    suggestions: [ //Arreglo que contiene objetos
      { username: "instagram", type: "Populares" },
      { username: "joys_pz42", followersInCommon: ["odaliz_balseca", "2 más"] },
      { username: "steve_04a05", followersInCommon: ["dydan._.mor", "2 más"] },
      { username: "s___ofiaaa", followersInCommon: ["lenincollahuazo", "1 más"] },
      { username: "mishu_msc", followersInCommon: ["danny.md15", "2 más"] }
    ]
  };

//Publicaciones
  const posts = [
    {
      profilePic: "upper.ec", //Objetos
      username: "upper.ec", //Objetos
      timePosted: "4 h", //Objetos
      likes: 41, //Objetos
      content: "¡El tamaño NO importa! 📦 Con Upper, puedes traer desde lo más pequeño hasta lo más grande sin preocuparte por un pedido ...", //Objetos
      comments: [ //Arreglo que contiene Objetos
        { username: "user1", comment: "¡Me encanta!" },
        { username: "user2", comment: "Lo voy a probar" }
      ]
    },
    {
      profilePic: "upper.ec", //Objetos
      username: "upper.ec", //Objetos
      timePosted: "5 días", //Objetos
      likes: 131, //Objetos
      content: "¡Atención! 🔔 Ahora las notificaciones llegan directo a tu app 📲", //Objetos
      comments: [ //Arreglo que contiene objetos
        { username: "user3", comment: "Excelente servicio" }
      ]
    }
  ];
  
//Publicidad
const ads = [
    {
      profilePic: "camaradecomercio927", //Objetos
      name: "Camara de Comercio Exterior", //Objetos
      type: "Publicidad", //Objetos
      likes: 720, //Objetos
      content: "🎯 ¿Quieres saber cómo invertir en publicidad en redes sociales sin arriesgar tu dinero? Este taller intensivo es para...", //Objetos
      comments: [ //Arreglo que contiene objetos
        { username: "user4", comment: "Interesante" },
        { username: "user5", comment: "Me apunto!" }
      ]
    }
  ];
  
