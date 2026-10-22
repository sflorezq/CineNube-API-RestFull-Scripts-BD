db.createCollection("peliculas");

db.peliculas.insertMany(
    [
  {
    "titulo": "El padrino",
    "titulo_original": "El padrino",
    "tipo": "pelicula",
    "anio": 1972,
    "duracion_min": 175,
    "sinopsis": "Sinopsis de ejemplo de la película «El padrino».",
    "generos": [
      "Drama",
      "Crimen"
    ],
    "director": "Francis Ford Coppola",
    "reparto": [
      {
        "actor": "Andrés Valencia",
        "personaje": "Protagonista"
      },
      {
        "actor": "Valentina Ortiz",
        "personaje": "Antagonista"
      },
      {
        "actor": "Julián Cardona",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "16+",
      "MX": "16+"
    },
    "poster_url": "cdn/posters/el-padrino.jpg",
    "video_url": "cdn/videos/el-padrino/master.m3u8",
    "estadisticas": {
      "promedio": 2.0,
      "total_calificaciones": 1,
      "suma_puntajes": 2
    },
    "fecha_publicacion": {
      "$date": "2024-05-11T07:14:43Z"
    },
    "activa": true
  },
  {
    "titulo": "Cadena perpetua",
    "titulo_original": "Cadena perpetua",
    "tipo": "pelicula",
    "anio": 1994,
    "duracion_min": 142,
    "sinopsis": "Sinopsis de ejemplo de la película «Cadena perpetua».",
    "generos": [
      "Drama"
    ],
    "director": "Frank Darabont",
    "reparto": [
      {
        "actor": "Sofía Londoño",
        "personaje": "Protagonista"
      },
      {
        "actor": "Felipe Montoya",
        "personaje": "Antagonista"
      },
      {
        "actor": "Lucía Fernández",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/cadena-perpetua.jpg",
    "video_url": "cdn/videos/cadena-perpetua/master.m3u8",
    "estadisticas": {
      "promedio": 4.0,
      "total_calificaciones": 1,
      "suma_puntajes": 4
    },
    "fecha_publicacion": {
      "$date": "2025-03-06T02:08:01Z"
    },
    "activa": true
  },
  {
    "titulo": "El caballero oscuro",
    "titulo_original": "El caballero oscuro",
    "tipo": "pelicula",
    "anio": 2008,
    "duracion_min": 152,
    "sinopsis": "Sinopsis de ejemplo de la película «El caballero oscuro».",
    "generos": [
      "Acción",
      "Crimen",
      "Suspenso"
    ],
    "director": "Christopher Nolan",
    "reparto": [
      {
        "actor": "Daniela Cruz",
        "personaje": "Protagonista"
      },
      {
        "actor": "Andrés Valencia",
        "personaje": "Antagonista"
      },
      {
        "actor": "Valentina Ortiz",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "16+",
      "MX": "16+"
    },
    "poster_url": "cdn/posters/el-caballero-oscuro.jpg",
    "video_url": "cdn/videos/el-caballero-oscuro/master.m3u8",
    "estadisticas": {
      "promedio": 0.0,
      "total_calificaciones": 0,
      "suma_puntajes": 0
    },
    "fecha_publicacion": {
      "$date": "2026-08-28T23:08:44Z"
    },
    "activa": true
  },
  {
    "titulo": "Pulp Fiction",
    "titulo_original": "Pulp Fiction",
    "tipo": "pelicula",
    "anio": 1994,
    "duracion_min": 154,
    "sinopsis": "Sinopsis de ejemplo de la película «Pulp Fiction».",
    "generos": [
      "Crimen",
      "Drama"
    ],
    "director": "Quentin Tarantino",
    "reparto": [
      {
        "actor": "Andrés Valencia",
        "personaje": "Protagonista"
      },
      {
        "actor": "Valentina Ortiz",
        "personaje": "Antagonista"
      },
      {
        "actor": "Julián Cardona",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "16+",
      "MX": "16+"
    },
    "poster_url": "cdn/posters/pulp-fiction.jpg",
    "video_url": "cdn/videos/pulp-fiction/master.m3u8",
    "estadisticas": {
      "promedio": 0.0,
      "total_calificaciones": 0,
      "suma_puntajes": 0
    },
    "fecha_publicacion": {
      "$date": "2023-12-13T20:39:05Z"
    },
    "activa": true
  },
  {
    "titulo": "La lista de Schindler",
    "titulo_original": "La lista de Schindler",
    "tipo": "pelicula",
    "anio": 1993,
    "duracion_min": 195,
    "sinopsis": "Sinopsis de ejemplo de la película «La lista de Schindler».",
    "generos": [
      "Drama",
      "Historia"
    ],
    "director": "Steven Spielberg",
    "reparto": [
      {
        "actor": "Tomás Aguirre",
        "personaje": "Protagonista"
      },
      {
        "actor": "Camila Restrepo",
        "personaje": "Antagonista"
      },
      {
        "actor": "Mateo Herrera",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/la-lista-de-schindler.jpg",
    "video_url": "cdn/videos/la-lista-de-schindler/master.m3u8",
    "estadisticas": {
      "promedio": 0.0,
      "total_calificaciones": 0,
      "suma_puntajes": 0
    },
    "fecha_publicacion": {
      "$date": "2025-08-23T10:36:24Z"
    },
    "activa": true
  },
  {
    "titulo": "El señor de los anillos: El retorno del rey",
    "titulo_original": "El señor de los anillos: El retorno del rey",
    "tipo": "pelicula",
    "anio": 2003,
    "duracion_min": 201,
    "sinopsis": "Sinopsis de ejemplo de la película «El señor de los anillos: El retorno del rey».",
    "generos": [
      "Fantasía",
      "Aventura"
    ],
    "director": "Peter Jackson",
    "reparto": [
      {
        "actor": "Sofía Londoño",
        "personaje": "Protagonista"
      },
      {
        "actor": "Felipe Montoya",
        "personaje": "Antagonista"
      },
      {
        "actor": "Lucía Fernández",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/el-senor-de-los-anillos-el-retorno-del-rey.jpg",
    "video_url": "cdn/videos/el-senor-de-los-anillos-el-retorno-del-rey/master.m3u8",
    "estadisticas": {
      "promedio": 5.0,
      "total_calificaciones": 1,
      "suma_puntajes": 5
    },
    "fecha_publicacion": {
      "$date": "2024-10-15T09:39:43Z"
    },
    "activa": true
  },
  {
    "titulo": "Forrest Gump",
    "titulo_original": "Forrest Gump",
    "tipo": "pelicula",
    "anio": 1994,
    "duracion_min": 142,
    "sinopsis": "Sinopsis de ejemplo de la película «Forrest Gump».",
    "generos": [
      "Drama",
      "Romance"
    ],
    "director": "Robert Zemeckis",
    "reparto": [
      {
        "actor": "Tomás Aguirre",
        "personaje": "Protagonista"
      },
      {
        "actor": "Camila Restrepo",
        "personaje": "Antagonista"
      },
      {
        "actor": "Mateo Herrera",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/forrest-gump.jpg",
    "video_url": "cdn/videos/forrest-gump/master.m3u8",
    "estadisticas": {
      "promedio": 4.0,
      "total_calificaciones": 2,
      "suma_puntajes": 8
    },
    "fecha_publicacion": {
      "$date": "2025-04-30T23:53:28Z"
    },
    "activa": true
  },
  {
    "titulo": "El club de la pelea",
    "titulo_original": "El club de la pelea",
    "tipo": "pelicula",
    "anio": 1999,
    "duracion_min": 139,
    "sinopsis": "Sinopsis de ejemplo de la película «El club de la pelea».",
    "generos": [
      "Drama",
      "Suspenso"
    ],
    "director": "David Fincher",
    "reparto": [
      {
        "actor": "Felipe Montoya",
        "personaje": "Protagonista"
      },
      {
        "actor": "Lucía Fernández",
        "personaje": "Antagonista"
      },
      {
        "actor": "Santiago Rojas",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/el-club-de-la-pelea.jpg",
    "video_url": "cdn/videos/el-club-de-la-pelea/master.m3u8",
    "estadisticas": {
      "promedio": 4.0,
      "total_calificaciones": 2,
      "suma_puntajes": 8
    },
    "fecha_publicacion": {
      "$date": "2026-04-21T08:43:27Z"
    },
    "activa": true
  },
  {
    "titulo": "Origen",
    "titulo_original": "Origen",
    "tipo": "pelicula",
    "anio": 2010,
    "duracion_min": 148,
    "sinopsis": "Sinopsis de ejemplo de la película «Origen».",
    "generos": [
      "Ciencia ficción",
      "Acción"
    ],
    "director": "Christopher Nolan",
    "reparto": [
      {
        "actor": "Julián Cardona",
        "personaje": "Protagonista"
      },
      {
        "actor": "Daniela Cruz",
        "personaje": "Antagonista"
      },
      {
        "actor": "Andrés Valencia",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/origen.jpg",
    "video_url": "cdn/videos/origen/master.m3u8",
    "estadisticas": {
      "promedio": 5.0,
      "total_calificaciones": 1,
      "suma_puntajes": 5
    },
    "fecha_publicacion": {
      "$date": "2026-03-12T16:16:37Z"
    },
    "activa": true
  },
  {
    "titulo": "Matrix",
    "titulo_original": "Matrix",
    "tipo": "pelicula",
    "anio": 1999,
    "duracion_min": 136,
    "sinopsis": "Sinopsis de ejemplo de la película «Matrix».",
    "generos": [
      "Ciencia ficción",
      "Acción"
    ],
    "director": "Lana y Lilly Wachowski",
    "reparto": [
      {
        "actor": "Tomás Aguirre",
        "personaje": "Protagonista"
      },
      {
        "actor": "Camila Restrepo",
        "personaje": "Antagonista"
      },
      {
        "actor": "Mateo Herrera",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/matrix.jpg",
    "video_url": "cdn/videos/matrix/master.m3u8",
    "estadisticas": {
      "promedio": 4.0,
      "total_calificaciones": 1,
      "suma_puntajes": 4
    },
    "fecha_publicacion": {
      "$date": "2024-11-16T05:12:48Z"
    },
    "activa": true
  },
  {
    "titulo": "Buenos muchachos",
    "titulo_original": "Buenos muchachos",
    "tipo": "pelicula",
    "anio": 1990,
    "duracion_min": 145,
    "sinopsis": "Sinopsis de ejemplo de la película «Buenos muchachos».",
    "generos": [
      "Crimen",
      "Drama"
    ],
    "director": "Martin Scorsese",
    "reparto": [
      {
        "actor": "Mateo Herrera",
        "personaje": "Protagonista"
      },
      {
        "actor": "Isabela Mejía",
        "personaje": "Antagonista"
      },
      {
        "actor": "Tomás Aguirre",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "16+",
      "MX": "16+"
    },
    "poster_url": "cdn/posters/buenos-muchachos.jpg",
    "video_url": "cdn/videos/buenos-muchachos/master.m3u8",
    "estadisticas": {
      "promedio": 5.0,
      "total_calificaciones": 1,
      "suma_puntajes": 5
    },
    "fecha_publicacion": {
      "$date": "2023-01-04T22:30:20Z"
    },
    "activa": true
  },
  {
    "titulo": "Se7en",
    "titulo_original": "Se7en",
    "tipo": "pelicula",
    "anio": 1995,
    "duracion_min": 127,
    "sinopsis": "Sinopsis de ejemplo de la película «Se7en».",
    "generos": [
      "Crimen",
      "Suspenso"
    ],
    "director": "David Fincher",
    "reparto": [
      {
        "actor": "Tomás Aguirre",
        "personaje": "Protagonista"
      },
      {
        "actor": "Camila Restrepo",
        "personaje": "Antagonista"
      },
      {
        "actor": "Mateo Herrera",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "16+",
      "MX": "16+"
    },
    "poster_url": "cdn/posters/se7en.jpg",
    "video_url": "cdn/videos/se7en/master.m3u8",
    "estadisticas": {
      "promedio": 4.0,
      "total_calificaciones": 1,
      "suma_puntajes": 4
    },
    "fecha_publicacion": {
      "$date": "2023-05-06T09:35:47Z"
    },
    "activa": true
  },
  {
    "titulo": "El silencio de los inocentes",
    "titulo_original": "El silencio de los inocentes",
    "tipo": "pelicula",
    "anio": 1991,
    "duracion_min": 118,
    "sinopsis": "Sinopsis de ejemplo de la película «El silencio de los inocentes».",
    "generos": [
      "Suspenso",
      "Crimen"
    ],
    "director": "Jonathan Demme",
    "reparto": [
      {
        "actor": "Andrés Valencia",
        "personaje": "Protagonista"
      },
      {
        "actor": "Valentina Ortiz",
        "personaje": "Antagonista"
      },
      {
        "actor": "Julián Cardona",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "16+",
      "MX": "16+"
    },
    "poster_url": "cdn/posters/el-silencio-de-los-inocentes.jpg",
    "video_url": "cdn/videos/el-silencio-de-los-inocentes/master.m3u8",
    "estadisticas": {
      "promedio": 3.0,
      "total_calificaciones": 1,
      "suma_puntajes": 3
    },
    "fecha_publicacion": {
      "$date": "2024-03-22T05:05:28Z"
    },
    "activa": true
  },
  {
    "titulo": "La vida es bella",
    "titulo_original": "La vida es bella",
    "tipo": "pelicula",
    "anio": 1997,
    "duracion_min": 116,
    "sinopsis": "Sinopsis de ejemplo de la película «La vida es bella».",
    "generos": [
      "Drama",
      "Comedia"
    ],
    "director": "Roberto Benigni",
    "reparto": [
      {
        "actor": "Andrés Valencia",
        "personaje": "Protagonista"
      },
      {
        "actor": "Valentina Ortiz",
        "personaje": "Antagonista"
      },
      {
        "actor": "Julián Cardona",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "it",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/la-vida-es-bella.jpg",
    "video_url": "cdn/videos/la-vida-es-bella/master.m3u8",
    "estadisticas": {
      "promedio": 3.0,
      "total_calificaciones": 1,
      "suma_puntajes": 3
    },
    "fecha_publicacion": {
      "$date": "2024-11-29T12:20:50Z"
    },
    "activa": true
  },
  {
    "titulo": "Parásitos",
    "titulo_original": "Parásitos",
    "tipo": "pelicula",
    "anio": 2019,
    "duracion_min": 132,
    "sinopsis": "Sinopsis de ejemplo de la película «Parásitos».",
    "generos": [
      "Suspenso",
      "Drama",
      "Comedia"
    ],
    "director": "Bong Joon-ho",
    "reparto": [
      {
        "actor": "Camila Restrepo",
        "personaje": "Protagonista"
      },
      {
        "actor": "Mateo Herrera",
        "personaje": "Antagonista"
      },
      {
        "actor": "Isabela Mejía",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "ko",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/parasitos.jpg",
    "video_url": "cdn/videos/parasitos/master.m3u8",
    "estadisticas": {
      "promedio": 0.0,
      "total_calificaciones": 0,
      "suma_puntajes": 0
    },
    "fecha_publicacion": {
      "$date": "2026-06-19T16:33:16Z"
    },
    "activa": true
  },
  {
    "titulo": "El viaje de Chihiro",
    "titulo_original": "El viaje de Chihiro",
    "tipo": "pelicula",
    "anio": 2001,
    "duracion_min": 125,
    "sinopsis": "Sinopsis de ejemplo de la película «El viaje de Chihiro».",
    "generos": [
      "Animación",
      "Fantasía"
    ],
    "director": "Hayao Miyazaki",
    "reparto": [
      {
        "actor": "Daniela Cruz",
        "personaje": "Protagonista"
      },
      {
        "actor": "Andrés Valencia",
        "personaje": "Antagonista"
      },
      {
        "actor": "Valentina Ortiz",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "ja",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "TP",
      "MX": "TP"
    },
    "poster_url": "cdn/posters/el-viaje-de-chihiro.jpg",
    "video_url": "cdn/videos/el-viaje-de-chihiro/master.m3u8",
    "estadisticas": {
      "promedio": 0.0,
      "total_calificaciones": 0,
      "suma_puntajes": 0
    },
    "fecha_publicacion": {
      "$date": "2025-01-31T15:12:51Z"
    },
    "activa": true
  },
  {
    "titulo": "Interestelar",
    "titulo_original": "Interestelar",
    "tipo": "pelicula",
    "anio": 2014,
    "duracion_min": 169,
    "sinopsis": "Sinopsis de ejemplo de la película «Interestelar».",
    "generos": [
      "Ciencia ficción",
      "Drama"
    ],
    "director": "Christopher Nolan",
    "reparto": [
      {
        "actor": "Daniela Cruz",
        "personaje": "Protagonista"
      },
      {
        "actor": "Andrés Valencia",
        "personaje": "Antagonista"
      },
      {
        "actor": "Valentina Ortiz",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/interestelar.jpg",
    "video_url": "cdn/videos/interestelar/master.m3u8",
    "estadisticas": {
      "promedio": 4.0,
      "total_calificaciones": 2,
      "suma_puntajes": 8
    },
    "fecha_publicacion": {
      "$date": "2024-05-03T03:27:36Z"
    },
    "activa": true
  },
  {
    "titulo": "Gladiador",
    "titulo_original": "Gladiador",
    "tipo": "pelicula",
    "anio": 2000,
    "duracion_min": 155,
    "sinopsis": "Sinopsis de ejemplo de la película «Gladiador».",
    "generos": [
      "Acción",
      "Drama",
      "Historia"
    ],
    "director": "Ridley Scott",
    "reparto": [
      {
        "actor": "Mateo Herrera",
        "personaje": "Protagonista"
      },
      {
        "actor": "Isabela Mejía",
        "personaje": "Antagonista"
      },
      {
        "actor": "Tomás Aguirre",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/gladiador.jpg",
    "video_url": "cdn/videos/gladiador/master.m3u8",
    "estadisticas": {
      "promedio": 0.0,
      "total_calificaciones": 0,
      "suma_puntajes": 0
    },
    "fecha_publicacion": {
      "$date": "2024-09-09T01:20:17Z"
    },
    "activa": true
  },
  {
    "titulo": "Volver al futuro",
    "titulo_original": "Volver al futuro",
    "tipo": "pelicula",
    "anio": 1985,
    "duracion_min": 116,
    "sinopsis": "Sinopsis de ejemplo de la película «Volver al futuro».",
    "generos": [
      "Ciencia ficción",
      "Comedia",
      "Aventura"
    ],
    "director": "Robert Zemeckis",
    "reparto": [
      {
        "actor": "Valentina Ortiz",
        "personaje": "Protagonista"
      },
      {
        "actor": "Julián Cardona",
        "personaje": "Antagonista"
      },
      {
        "actor": "Daniela Cruz",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/volver-al-futuro.jpg",
    "video_url": "cdn/videos/volver-al-futuro/master.m3u8",
    "estadisticas": {
      "promedio": 0.0,
      "total_calificaciones": 0,
      "suma_puntajes": 0
    },
    "fecha_publicacion": {
      "$date": "2024-06-24T01:37:26Z"
    },
    "activa": true
  },
  {
    "titulo": "El resplandor",
    "titulo_original": "El resplandor",
    "tipo": "pelicula",
    "anio": 1980,
    "duracion_min": 146,
    "sinopsis": "Sinopsis de ejemplo de la película «El resplandor».",
    "generos": [
      "Terror",
      "Suspenso"
    ],
    "director": "Stanley Kubrick",
    "reparto": [
      {
        "actor": "Santiago Rojas",
        "personaje": "Protagonista"
      },
      {
        "actor": "Sofía Londoño",
        "personaje": "Antagonista"
      },
      {
        "actor": "Felipe Montoya",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "18+",
      "MX": "18+"
    },
    "poster_url": "cdn/posters/el-resplandor.jpg",
    "video_url": "cdn/videos/el-resplandor/master.m3u8",
    "estadisticas": {
      "promedio": 0.0,
      "total_calificaciones": 0,
      "suma_puntajes": 0
    },
    "fecha_publicacion": {
      "$date": "2026-06-04T17:38:31Z"
    },
    "activa": true
  },
  {
    "titulo": "Alien, el octavo pasajero",
    "titulo_original": "Alien, el octavo pasajero",
    "tipo": "pelicula",
    "anio": 1979,
    "duracion_min": 117,
    "sinopsis": "Sinopsis de ejemplo de la película «Alien, el octavo pasajero».",
    "generos": [
      "Terror",
      "Ciencia ficción"
    ],
    "director": "Ridley Scott",
    "reparto": [
      {
        "actor": "Isabela Mejía",
        "personaje": "Protagonista"
      },
      {
        "actor": "Tomás Aguirre",
        "personaje": "Antagonista"
      },
      {
        "actor": "Camila Restrepo",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "18+",
      "MX": "18+"
    },
    "poster_url": "cdn/posters/alien-el-octavo-pasajero.jpg",
    "video_url": "cdn/videos/alien-el-octavo-pasajero/master.m3u8",
    "estadisticas": {
      "promedio": 0.0,
      "total_calificaciones": 0,
      "suma_puntajes": 0
    },
    "fecha_publicacion": {
      "$date": "2026-03-04T19:46:27Z"
    },
    "activa": true
  },
  {
    "titulo": "Psicosis",
    "titulo_original": "Psicosis",
    "tipo": "pelicula",
    "anio": 1960,
    "duracion_min": 109,
    "sinopsis": "Sinopsis de ejemplo de la película «Psicosis».",
    "generos": [
      "Terror",
      "Suspenso"
    ],
    "director": "Alfred Hitchcock",
    "reparto": [
      {
        "actor": "Sofía Londoño",
        "personaje": "Protagonista"
      },
      {
        "actor": "Felipe Montoya",
        "personaje": "Antagonista"
      },
      {
        "actor": "Lucía Fernández",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "18+",
      "MX": "18+"
    },
    "poster_url": "cdn/posters/psicosis.jpg",
    "video_url": "cdn/videos/psicosis/master.m3u8",
    "estadisticas": {
      "promedio": 5.0,
      "total_calificaciones": 2,
      "suma_puntajes": 10
    },
    "fecha_publicacion": {
      "$date": "2025-09-17T15:49:48Z"
    },
    "activa": true
  },
  {
    "titulo": "Casablanca",
    "titulo_original": "Casablanca",
    "tipo": "pelicula",
    "anio": 1942,
    "duracion_min": 102,
    "sinopsis": "Sinopsis de ejemplo de la película «Casablanca».",
    "generos": [
      "Drama",
      "Romance"
    ],
    "director": "Michael Curtiz",
    "reparto": [
      {
        "actor": "Andrés Valencia",
        "personaje": "Protagonista"
      },
      {
        "actor": "Valentina Ortiz",
        "personaje": "Antagonista"
      },
      {
        "actor": "Julián Cardona",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/casablanca.jpg",
    "video_url": "cdn/videos/casablanca/master.m3u8",
    "estadisticas": {
      "promedio": 5.0,
      "total_calificaciones": 2,
      "suma_puntajes": 10
    },
    "fecha_publicacion": {
      "$date": "2026-01-28T07:34:06Z"
    },
    "activa": true
  },
  {
    "titulo": "Toy Story",
    "titulo_original": "Toy Story",
    "tipo": "pelicula",
    "anio": 1995,
    "duracion_min": 81,
    "sinopsis": "Sinopsis de ejemplo de la película «Toy Story».",
    "generos": [
      "Animación",
      "Comedia",
      "Aventura"
    ],
    "director": "John Lasseter",
    "reparto": [
      {
        "actor": "Santiago Rojas",
        "personaje": "Protagonista"
      },
      {
        "actor": "Sofía Londoño",
        "personaje": "Antagonista"
      },
      {
        "actor": "Felipe Montoya",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "TP",
      "MX": "TP"
    },
    "poster_url": "cdn/posters/toy-story.jpg",
    "video_url": "cdn/videos/toy-story/master.m3u8",
    "estadisticas": {
      "promedio": 3.0,
      "total_calificaciones": 1,
      "suma_puntajes": 3
    },
    "fecha_publicacion": {
      "$date": "2023-05-20T06:57:08Z"
    },
    "activa": true
  },
  {
    "titulo": "El rey león",
    "titulo_original": "El rey león",
    "tipo": "pelicula",
    "anio": 1994,
    "duracion_min": 88,
    "sinopsis": "Sinopsis de ejemplo de la película «El rey león».",
    "generos": [
      "Animación",
      "Drama",
      "Aventura"
    ],
    "director": "Roger Allers y Rob Minkoff",
    "reparto": [
      {
        "actor": "Sofía Londoño",
        "personaje": "Protagonista"
      },
      {
        "actor": "Felipe Montoya",
        "personaje": "Antagonista"
      },
      {
        "actor": "Lucía Fernández",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "TP",
      "MX": "TP"
    },
    "poster_url": "cdn/posters/el-rey-leon.jpg",
    "video_url": "cdn/videos/el-rey-leon/master.m3u8",
    "estadisticas": {
      "promedio": 4.0,
      "total_calificaciones": 1,
      "suma_puntajes": 4
    },
    "fecha_publicacion": {
      "$date": "2025-04-15T20:30:24Z"
    },
    "activa": true
  },
  {
    "titulo": "Titanic",
    "titulo_original": "Titanic",
    "tipo": "pelicula",
    "anio": 1997,
    "duracion_min": 195,
    "sinopsis": "Sinopsis de ejemplo de la película «Titanic».",
    "generos": [
      "Drama",
      "Romance"
    ],
    "director": "James Cameron",
    "reparto": [
      {
        "actor": "Valentina Ortiz",
        "personaje": "Protagonista"
      },
      {
        "actor": "Julián Cardona",
        "personaje": "Antagonista"
      },
      {
        "actor": "Daniela Cruz",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/titanic.jpg",
    "video_url": "cdn/videos/titanic/master.m3u8",
    "estadisticas": {
      "promedio": 4.0,
      "total_calificaciones": 1,
      "suma_puntajes": 4
    },
    "fecha_publicacion": {
      "$date": "2024-03-22T18:34:38Z"
    },
    "activa": true
  },
  {
    "titulo": "Terminator 2: El juicio final",
    "titulo_original": "Terminator 2: El juicio final",
    "tipo": "pelicula",
    "anio": 1991,
    "duracion_min": 137,
    "sinopsis": "Sinopsis de ejemplo de la película «Terminator 2: El juicio final».",
    "generos": [
      "Acción",
      "Ciencia ficción"
    ],
    "director": "James Cameron",
    "reparto": [
      {
        "actor": "Julián Cardona",
        "personaje": "Protagonista"
      },
      {
        "actor": "Daniela Cruz",
        "personaje": "Antagonista"
      },
      {
        "actor": "Andrés Valencia",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/terminator-2-el-juicio-final.jpg",
    "video_url": "cdn/videos/terminator-2-el-juicio-final/master.m3u8",
    "estadisticas": {
      "promedio": 0.0,
      "total_calificaciones": 0,
      "suma_puntajes": 0
    },
    "fecha_publicacion": {
      "$date": "2023-08-07T20:41:54Z"
    },
    "activa": true
  },
  {
    "titulo": "Mad Max: Furia en el camino",
    "titulo_original": "Mad Max: Furia en el camino",
    "tipo": "pelicula",
    "anio": 2015,
    "duracion_min": 120,
    "sinopsis": "Sinopsis de ejemplo de la película «Mad Max: Furia en el camino».",
    "generos": [
      "Acción",
      "Ciencia ficción"
    ],
    "director": "George Miller",
    "reparto": [
      {
        "actor": "Daniela Cruz",
        "personaje": "Protagonista"
      },
      {
        "actor": "Andrés Valencia",
        "personaje": "Antagonista"
      },
      {
        "actor": "Valentina Ortiz",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/mad-max-furia-en-el-camino.jpg",
    "video_url": "cdn/videos/mad-max-furia-en-el-camino/master.m3u8",
    "estadisticas": {
      "promedio": 4.0,
      "total_calificaciones": 2,
      "suma_puntajes": 8
    },
    "fecha_publicacion": {
      "$date": "2025-12-29T14:06:37Z"
    },
    "activa": true
  },
  {
    "titulo": "Blade Runner",
    "titulo_original": "Blade Runner",
    "tipo": "pelicula",
    "anio": 1982,
    "duracion_min": 117,
    "sinopsis": "Sinopsis de ejemplo de la película «Blade Runner».",
    "generos": [
      "Ciencia ficción",
      "Suspenso"
    ],
    "director": "Ridley Scott",
    "reparto": [
      {
        "actor": "Felipe Montoya",
        "personaje": "Protagonista"
      },
      {
        "actor": "Lucía Fernández",
        "personaje": "Antagonista"
      },
      {
        "actor": "Santiago Rojas",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/blade-runner.jpg",
    "video_url": "cdn/videos/blade-runner/master.m3u8",
    "estadisticas": {
      "promedio": 0.0,
      "total_calificaciones": 0,
      "suma_puntajes": 0
    },
    "fecha_publicacion": {
      "$date": "2025-06-15T23:54:11Z"
    },
    "activa": true
  },
  {
    "titulo": "Taxi Driver",
    "titulo_original": "Taxi Driver",
    "tipo": "pelicula",
    "anio": 1976,
    "duracion_min": 114,
    "sinopsis": "Sinopsis de ejemplo de la película «Taxi Driver».",
    "generos": [
      "Drama",
      "Crimen"
    ],
    "director": "Martin Scorsese",
    "reparto": [
      {
        "actor": "Valentina Ortiz",
        "personaje": "Protagonista"
      },
      {
        "actor": "Julián Cardona",
        "personaje": "Antagonista"
      },
      {
        "actor": "Daniela Cruz",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "16+",
      "MX": "16+"
    },
    "poster_url": "cdn/posters/taxi-driver.jpg",
    "video_url": "cdn/videos/taxi-driver/master.m3u8",
    "estadisticas": {
      "promedio": 3.5,
      "total_calificaciones": 2,
      "suma_puntajes": 7
    },
    "fecha_publicacion": {
      "$date": "2023-02-08T10:20:52Z"
    },
    "activa": true
  },
  {
    "titulo": "Apocalypse Now",
    "titulo_original": "Apocalypse Now",
    "tipo": "pelicula",
    "anio": 1979,
    "duracion_min": 147,
    "sinopsis": "Sinopsis de ejemplo de la película «Apocalypse Now».",
    "generos": [
      "Drama",
      "Bélica"
    ],
    "director": "Francis Ford Coppola",
    "reparto": [
      {
        "actor": "Felipe Montoya",
        "personaje": "Protagonista"
      },
      {
        "actor": "Lucía Fernández",
        "personaje": "Antagonista"
      },
      {
        "actor": "Santiago Rojas",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "16+",
      "MX": "16+"
    },
    "poster_url": "cdn/posters/apocalypse-now.jpg",
    "video_url": "cdn/videos/apocalypse-now/master.m3u8",
    "estadisticas": {
      "promedio": 3.5,
      "total_calificaciones": 2,
      "suma_puntajes": 7
    },
    "fecha_publicacion": {
      "$date": "2024-07-26T23:31:24Z"
    },
    "activa": true
  },
  {
    "titulo": "Cinema Paradiso",
    "titulo_original": "Cinema Paradiso",
    "tipo": "pelicula",
    "anio": 1988,
    "duracion_min": 124,
    "sinopsis": "Sinopsis de ejemplo de la película «Cinema Paradiso».",
    "generos": [
      "Drama",
      "Romance"
    ],
    "director": "Giuseppe Tornatore",
    "reparto": [
      {
        "actor": "Santiago Rojas",
        "personaje": "Protagonista"
      },
      {
        "actor": "Sofía Londoño",
        "personaje": "Antagonista"
      },
      {
        "actor": "Felipe Montoya",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "it",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/cinema-paradiso.jpg",
    "video_url": "cdn/videos/cinema-paradiso/master.m3u8",
    "estadisticas": {
      "promedio": 0.0,
      "total_calificaciones": 0,
      "suma_puntajes": 0
    },
    "fecha_publicacion": {
      "$date": "2024-12-17T06:01:46Z"
    },
    "activa": true
  },
  {
    "titulo": "Amélie",
    "titulo_original": "Amélie",
    "tipo": "pelicula",
    "anio": 2001,
    "duracion_min": 122,
    "sinopsis": "Sinopsis de ejemplo de la película «Amélie».",
    "generos": [
      "Comedia",
      "Romance"
    ],
    "director": "Jean-Pierre Jeunet",
    "reparto": [
      {
        "actor": "Isabela Mejía",
        "personaje": "Protagonista"
      },
      {
        "actor": "Tomás Aguirre",
        "personaje": "Antagonista"
      },
      {
        "actor": "Camila Restrepo",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "fr",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/amelie.jpg",
    "video_url": "cdn/videos/amelie/master.m3u8",
    "estadisticas": {
      "promedio": 3.5,
      "total_calificaciones": 2,
      "suma_puntajes": 7
    },
    "fecha_publicacion": {
      "$date": "2023-05-21T20:57:07Z"
    },
    "activa": true
  },
  {
    "titulo": "El laberinto del fauno",
    "titulo_original": "El laberinto del fauno",
    "tipo": "pelicula",
    "anio": 2006,
    "duracion_min": 118,
    "sinopsis": "Sinopsis de ejemplo de la película «El laberinto del fauno».",
    "generos": [
      "Fantasía",
      "Drama",
      "Bélica"
    ],
    "director": "Guillermo del Toro",
    "reparto": [
      {
        "actor": "Isabela Mejía",
        "personaje": "Protagonista"
      },
      {
        "actor": "Tomás Aguirre",
        "personaje": "Antagonista"
      },
      {
        "actor": "Camila Restrepo",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "16+",
      "MX": "16+"
    },
    "poster_url": "cdn/posters/el-laberinto-del-fauno.jpg",
    "video_url": "cdn/videos/el-laberinto-del-fauno/master.m3u8",
    "estadisticas": {
      "promedio": 0.0,
      "total_calificaciones": 0,
      "suma_puntajes": 0
    },
    "fecha_publicacion": {
      "$date": "2025-06-28T21:08:34Z"
    },
    "activa": true
  },
  {
    "titulo": "Ciudad de Dios",
    "titulo_original": "Ciudad de Dios",
    "tipo": "pelicula",
    "anio": 2002,
    "duracion_min": 130,
    "sinopsis": "Sinopsis de ejemplo de la película «Ciudad de Dios».",
    "generos": [
      "Crimen",
      "Drama"
    ],
    "director": "Fernando Meirelles",
    "reparto": [
      {
        "actor": "Sofía Londoño",
        "personaje": "Protagonista"
      },
      {
        "actor": "Felipe Montoya",
        "personaje": "Antagonista"
      },
      {
        "actor": "Lucía Fernández",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "pt",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "16+",
      "MX": "16+"
    },
    "poster_url": "cdn/posters/ciudad-de-dios.jpg",
    "video_url": "cdn/videos/ciudad-de-dios/master.m3u8",
    "estadisticas": {
      "promedio": 4.0,
      "total_calificaciones": 3,
      "suma_puntajes": 12
    },
    "fecha_publicacion": {
      "$date": "2025-02-13T07:45:08Z"
    },
    "activa": true
  },
  {
    "titulo": "Amores perros",
    "titulo_original": "Amores perros",
    "tipo": "pelicula",
    "anio": 2000,
    "duracion_min": 154,
    "sinopsis": "Sinopsis de ejemplo de la película «Amores perros».",
    "generos": [
      "Drama",
      "Crimen"
    ],
    "director": "Alejandro González Iñárritu",
    "reparto": [
      {
        "actor": "Andrés Valencia",
        "personaje": "Protagonista"
      },
      {
        "actor": "Valentina Ortiz",
        "personaje": "Antagonista"
      },
      {
        "actor": "Julián Cardona",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "16+",
      "MX": "16+"
    },
    "poster_url": "cdn/posters/amores-perros.jpg",
    "video_url": "cdn/videos/amores-perros/master.m3u8",
    "estadisticas": {
      "promedio": 3.7,
      "total_calificaciones": 3,
      "suma_puntajes": 11
    },
    "fecha_publicacion": {
      "$date": "2024-10-22T21:40:35Z"
    },
    "activa": true
  },
  {
    "titulo": "Y tu mamá también",
    "titulo_original": "Y tu mamá también",
    "tipo": "pelicula",
    "anio": 2001,
    "duracion_min": 106,
    "sinopsis": "Sinopsis de ejemplo de la película «Y tu mamá también».",
    "generos": [
      "Drama",
      "Comedia"
    ],
    "director": "Alfonso Cuarón",
    "reparto": [
      {
        "actor": "Sofía Londoño",
        "personaje": "Protagonista"
      },
      {
        "actor": "Felipe Montoya",
        "personaje": "Antagonista"
      },
      {
        "actor": "Lucía Fernández",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/y-tu-mama-tambien.jpg",
    "video_url": "cdn/videos/y-tu-mama-tambien/master.m3u8",
    "estadisticas": {
      "promedio": 0.0,
      "total_calificaciones": 0,
      "suma_puntajes": 0
    },
    "fecha_publicacion": {
      "$date": "2026-05-31T17:12:16Z"
    },
    "activa": true
  },
  {
    "titulo": "Roma",
    "titulo_original": "Roma",
    "tipo": "pelicula",
    "anio": 2018,
    "duracion_min": 135,
    "sinopsis": "Sinopsis de ejemplo de la película «Roma».",
    "generos": [
      "Drama"
    ],
    "director": "Alfonso Cuarón",
    "reparto": [
      {
        "actor": "Tomás Aguirre",
        "personaje": "Protagonista"
      },
      {
        "actor": "Camila Restrepo",
        "personaje": "Antagonista"
      },
      {
        "actor": "Mateo Herrera",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/roma.jpg",
    "video_url": "cdn/videos/roma/master.m3u8",
    "estadisticas": {
      "promedio": 3.0,
      "total_calificaciones": 2,
      "suma_puntajes": 6
    },
    "fecha_publicacion": {
      "$date": "2026-09-21T22:31:29Z"
    },
    "activa": true
  },
  {
    "titulo": "Nueve reinas",
    "titulo_original": "Nueve reinas",
    "tipo": "pelicula",
    "anio": 2000,
    "duracion_min": 114,
    "sinopsis": "Sinopsis de ejemplo de la película «Nueve reinas».",
    "generos": [
      "Crimen",
      "Suspenso"
    ],
    "director": "Fabián Bielinsky",
    "reparto": [
      {
        "actor": "Julián Cardona",
        "personaje": "Protagonista"
      },
      {
        "actor": "Daniela Cruz",
        "personaje": "Antagonista"
      },
      {
        "actor": "Andrés Valencia",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "16+",
      "MX": "16+"
    },
    "poster_url": "cdn/posters/nueve-reinas.jpg",
    "video_url": "cdn/videos/nueve-reinas/master.m3u8",
    "estadisticas": {
      "promedio": 3.0,
      "total_calificaciones": 1,
      "suma_puntajes": 3
    },
    "fecha_publicacion": {
      "$date": "2024-09-10T12:02:55Z"
    },
    "activa": true
  },
  {
    "titulo": "El secreto de sus ojos",
    "titulo_original": "El secreto de sus ojos",
    "tipo": "pelicula",
    "anio": 2009,
    "duracion_min": 129,
    "sinopsis": "Sinopsis de ejemplo de la película «El secreto de sus ojos».",
    "generos": [
      "Drama",
      "Suspenso",
      "Romance"
    ],
    "director": "Juan José Campanella",
    "reparto": [
      {
        "actor": "Sofía Londoño",
        "personaje": "Protagonista"
      },
      {
        "actor": "Felipe Montoya",
        "personaje": "Antagonista"
      },
      {
        "actor": "Lucía Fernández",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/el-secreto-de-sus-ojos.jpg",
    "video_url": "cdn/videos/el-secreto-de-sus-ojos/master.m3u8",
    "estadisticas": {
      "promedio": 4.0,
      "total_calificaciones": 1,
      "suma_puntajes": 4
    },
    "fecha_publicacion": {
      "$date": "2024-02-06T18:55:33Z"
    },
    "activa": true
  },
  {
    "titulo": "Relatos salvajes",
    "titulo_original": "Relatos salvajes",
    "tipo": "pelicula",
    "anio": 2014,
    "duracion_min": 122,
    "sinopsis": "Sinopsis de ejemplo de la película «Relatos salvajes».",
    "generos": [
      "Comedia",
      "Drama",
      "Suspenso"
    ],
    "director": "Damián Szifrón",
    "reparto": [
      {
        "actor": "Isabela Mejía",
        "personaje": "Protagonista"
      },
      {
        "actor": "Tomás Aguirre",
        "personaje": "Antagonista"
      },
      {
        "actor": "Camila Restrepo",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/relatos-salvajes.jpg",
    "video_url": "cdn/videos/relatos-salvajes/master.m3u8",
    "estadisticas": {
      "promedio": 4.3,
      "total_calificaciones": 3,
      "suma_puntajes": 13
    },
    "fecha_publicacion": {
      "$date": "2025-05-26T03:26:55Z"
    },
    "activa": true
  },
  {
    "titulo": "Oldboy",
    "titulo_original": "Oldboy",
    "tipo": "pelicula",
    "anio": 2003,
    "duracion_min": 120,
    "sinopsis": "Sinopsis de ejemplo de la película «Oldboy».",
    "generos": [
      "Suspenso",
      "Drama"
    ],
    "director": "Park Chan-wook",
    "reparto": [
      {
        "actor": "Julián Cardona",
        "personaje": "Protagonista"
      },
      {
        "actor": "Daniela Cruz",
        "personaje": "Antagonista"
      },
      {
        "actor": "Andrés Valencia",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "ko",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/oldboy.jpg",
    "video_url": "cdn/videos/oldboy/master.m3u8",
    "estadisticas": {
      "promedio": 0.0,
      "total_calificaciones": 0,
      "suma_puntajes": 0
    },
    "fecha_publicacion": {
      "$date": "2025-03-07T20:08:25Z"
    },
    "activa": true
  },
  {
    "titulo": "Los siete samuráis",
    "titulo_original": "Los siete samuráis",
    "tipo": "pelicula",
    "anio": 1954,
    "duracion_min": 207,
    "sinopsis": "Sinopsis de ejemplo de la película «Los siete samuráis».",
    "generos": [
      "Acción",
      "Drama",
      "Aventura"
    ],
    "director": "Akira Kurosawa",
    "reparto": [
      {
        "actor": "Sofía Londoño",
        "personaje": "Protagonista"
      },
      {
        "actor": "Felipe Montoya",
        "personaje": "Antagonista"
      },
      {
        "actor": "Lucía Fernández",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "ja",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/los-siete-samurais.jpg",
    "video_url": "cdn/videos/los-siete-samurais/master.m3u8",
    "estadisticas": {
      "promedio": 4.7,
      "total_calificaciones": 3,
      "suma_puntajes": 14
    },
    "fecha_publicacion": {
      "$date": "2026-06-04T19:01:50Z"
    },
    "activa": true
  },
  {
    "titulo": "Ciudadano Kane",
    "titulo_original": "Ciudadano Kane",
    "tipo": "pelicula",
    "anio": 1941,
    "duracion_min": 119,
    "sinopsis": "Sinopsis de ejemplo de la película «Ciudadano Kane».",
    "generos": [
      "Drama"
    ],
    "director": "Orson Welles",
    "reparto": [
      {
        "actor": "Camila Restrepo",
        "personaje": "Protagonista"
      },
      {
        "actor": "Mateo Herrera",
        "personaje": "Antagonista"
      },
      {
        "actor": "Isabela Mejía",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/ciudadano-kane.jpg",
    "video_url": "cdn/videos/ciudadano-kane/master.m3u8",
    "estadisticas": {
      "promedio": 4.0,
      "total_calificaciones": 1,
      "suma_puntajes": 4
    },
    "fecha_publicacion": {
      "$date": "2025-06-13T00:48:02Z"
    },
    "activa": true
  },
  {
    "titulo": "Vértigo",
    "titulo_original": "Vértigo",
    "tipo": "pelicula",
    "anio": 1958,
    "duracion_min": 128,
    "sinopsis": "Sinopsis de ejemplo de la película «Vértigo».",
    "generos": [
      "Suspenso",
      "Romance"
    ],
    "director": "Alfred Hitchcock",
    "reparto": [
      {
        "actor": "Mateo Herrera",
        "personaje": "Protagonista"
      },
      {
        "actor": "Isabela Mejía",
        "personaje": "Antagonista"
      },
      {
        "actor": "Tomás Aguirre",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/vertigo.jpg",
    "video_url": "cdn/videos/vertigo/master.m3u8",
    "estadisticas": {
      "promedio": 4.5,
      "total_calificaciones": 2,
      "suma_puntajes": 9
    },
    "fecha_publicacion": {
      "$date": "2026-04-04T16:04:29Z"
    },
    "activa": true
  },
  {
    "titulo": "Jurassic Park",
    "titulo_original": "Jurassic Park",
    "tipo": "pelicula",
    "anio": 1993,
    "duracion_min": 127,
    "sinopsis": "Sinopsis de ejemplo de la película «Jurassic Park».",
    "generos": [
      "Aventura",
      "Ciencia ficción"
    ],
    "director": "Steven Spielberg",
    "reparto": [
      {
        "actor": "Lucía Fernández",
        "personaje": "Protagonista"
      },
      {
        "actor": "Santiago Rojas",
        "personaje": "Antagonista"
      },
      {
        "actor": "Sofía Londoño",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/jurassic-park.jpg",
    "video_url": "cdn/videos/jurassic-park/master.m3u8",
    "estadisticas": {
      "promedio": 0.0,
      "total_calificaciones": 0,
      "suma_puntajes": 0
    },
    "fecha_publicacion": {
      "$date": "2026-06-24T22:10:45Z"
    },
    "activa": true
  },
  {
    "titulo": "Indiana Jones: En busca del arca perdida",
    "titulo_original": "Indiana Jones: En busca del arca perdida",
    "tipo": "pelicula",
    "anio": 1981,
    "duracion_min": 115,
    "sinopsis": "Sinopsis de ejemplo de la película «Indiana Jones: En busca del arca perdida».",
    "generos": [
      "Aventura",
      "Acción"
    ],
    "director": "Steven Spielberg",
    "reparto": [
      {
        "actor": "Camila Restrepo",
        "personaje": "Protagonista"
      },
      {
        "actor": "Mateo Herrera",
        "personaje": "Antagonista"
      },
      {
        "actor": "Isabela Mejía",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/indiana-jones-en-busca-del-arca-perdida.jpg",
    "video_url": "cdn/videos/indiana-jones-en-busca-del-arca-perdida/master.m3u8",
    "estadisticas": {
      "promedio": 0.0,
      "total_calificaciones": 0,
      "suma_puntajes": 0
    },
    "fecha_publicacion": {
      "$date": "2025-12-30T15:43:38Z"
    },
    "activa": true
  },
  {
    "titulo": "Coco",
    "titulo_original": "Coco",
    "tipo": "pelicula",
    "anio": 2017,
    "duracion_min": 105,
    "sinopsis": "Sinopsis de ejemplo de la película «Coco».",
    "generos": [
      "Animación",
      "Familiar",
      "Fantasía"
    ],
    "director": "Lee Unkrich",
    "reparto": [
      {
        "actor": "Sofía Londoño",
        "personaje": "Protagonista"
      },
      {
        "actor": "Felipe Montoya",
        "personaje": "Antagonista"
      },
      {
        "actor": "Lucía Fernández",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "TP",
      "MX": "TP"
    },
    "poster_url": "cdn/posters/coco.jpg",
    "video_url": "cdn/videos/coco/master.m3u8",
    "estadisticas": {
      "promedio": 5.0,
      "total_calificaciones": 1,
      "suma_puntajes": 5
    },
    "fecha_publicacion": {
      "$date": "2025-11-07T13:25:12Z"
    },
    "activa": true
  },
  {
    "titulo": "Intensamente",
    "titulo_original": "Intensamente",
    "tipo": "pelicula",
    "anio": 2015,
    "duracion_min": 95,
    "sinopsis": "Sinopsis de ejemplo de la película «Intensamente».",
    "generos": [
      "Animación",
      "Comedia",
      "Familiar"
    ],
    "director": "Pete Docter",
    "reparto": [
      {
        "actor": "Andrés Valencia",
        "personaje": "Protagonista"
      },
      {
        "actor": "Valentina Ortiz",
        "personaje": "Antagonista"
      },
      {
        "actor": "Julián Cardona",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "TP",
      "MX": "TP"
    },
    "poster_url": "cdn/posters/intensamente.jpg",
    "video_url": "cdn/videos/intensamente/master.m3u8",
    "estadisticas": {
      "promedio": 0.0,
      "total_calificaciones": 0,
      "suma_puntajes": 0
    },
    "fecha_publicacion": {
      "$date": "2026-01-19T07:09:46Z"
    },
    "activa": true
  },
  {
    "titulo": "La La Land",
    "titulo_original": "La La Land",
    "tipo": "pelicula",
    "anio": 2016,
    "duracion_min": 128,
    "sinopsis": "Sinopsis de ejemplo de la película «La La Land».",
    "generos": [
      "Musical",
      "Romance",
      "Drama"
    ],
    "director": "Damien Chazelle",
    "reparto": [
      {
        "actor": "Tomás Aguirre",
        "personaje": "Protagonista"
      },
      {
        "actor": "Camila Restrepo",
        "personaje": "Antagonista"
      },
      {
        "actor": "Mateo Herrera",
        "personaje": "Aliado principal"
      }
    ],
    "idiomas_audio": [
      "en",
      "es"
    ],
    "subtitulos": [
      "es",
      "en",
      "pt"
    ],
    "clasificacion": {
      "CO": "12+",
      "MX": "12+"
    },
    "poster_url": "cdn/posters/la-la-land.jpg",
    "video_url": "cdn/videos/la-la-land/master.m3u8",
    "estadisticas": {
      "promedio": 0.0,
      "total_calificaciones": 0,
      "suma_puntajes": 0
    },
    "fecha_publicacion": {
      "$date": "2024-10-29T01:32:51Z"
    },
    "activa": true
  }
]
)