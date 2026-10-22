db.createCollection("calificaciones");

db.calificaciones.insertMany(
    [
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281380"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281347"
    },
    "puntaje": 4,
    "comentario": "Muy buena, la recomiendo.",
    "fecha": {
      "$date": "2025-08-07T08:48:56Z"
    },
    "pelicula_titulo": "Los siete samuráis"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281371"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281347"
    },
    "puntaje": 5,
    "comentario": "De lo mejor que he visto.",
    "fecha": {
      "$date": "2025-09-23T18:31:27Z"
    },
    "pelicula_titulo": "Los siete samuráis"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281372"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe03828132d"
    },
    "puntaje": 4,
    "comentario": "Muy buena, la recomiendo.",
    "fecha": {
      "$date": "2023-09-05T14:31:18Z"
    },
    "pelicula_titulo": "Interestelar"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281350"
    },
    "perfil_id": "p3",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe03828133f"
    },
    "puntaje": 3,
    "comentario": "Entretenida, aunque olvidable.",
    "fecha": {
      "$date": "2026-02-02T16:32:51Z"
    },
    "pelicula_titulo": "Ciudad de Dios"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281357"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281328"
    },
    "puntaje": 4,
    "comentario": "Me gustó bastante.",
    "fecha": {
      "$date": "2026-03-26T05:43:27Z"
    },
    "pelicula_titulo": "Se7en"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe03828136f"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281332"
    },
    "puntaje": 5,
    "comentario": "De lo mejor que he visto.",
    "fecha": {
      "$date": "2025-09-26T14:42:35Z"
    },
    "pelicula_titulo": "Psicosis"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281352"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281345"
    },
    "puntaje": 5,
    "comentario": "Un final inolvidable.",
    "fecha": {
      "$date": "2022-10-11T23:44:20Z"
    },
    "pelicula_titulo": "Relatos salvajes"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe03828135d"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe03828134c"
    },
    "puntaje": 5,
    "comentario": "Un final inolvidable.",
    "fecha": {
      "$date": "2025-09-23T00:43:02Z"
    },
    "pelicula_titulo": "Coco"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281366"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281340"
    },
    "puntaje": 4,
    "comentario": "Gran historia y buenas actuaciones.",
    "fecha": {
      "$date": "2026-10-05T05:17:31Z"
    },
    "pelicula_titulo": "Amores perros"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe03828135b"
    },
    "perfil_id": "p2",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281333"
    },
    "puntaje": 5,
    "comentario": "Un final inolvidable.",
    "fecha": {
      "$date": "2025-08-26T08:23:21Z"
    },
    "pelicula_titulo": "Casablanca"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe03828136d"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281329"
    },
    "puntaje": 3,
    "comentario": "Entretenida, aunque olvidable.",
    "fecha": {
      "$date": "2026-01-10T14:29:51Z"
    },
    "pelicula_titulo": "El silencio de los inocentes"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe03828136e"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281333"
    },
    "puntaje": 5,
    "comentario": "De lo mejor que he visto.",
    "fecha": {
      "$date": "2026-06-28T00:01:57Z"
    },
    "pelicula_titulo": "Casablanca"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281369"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281345"
    },
    "puntaje": 4,
    "comentario": "Gran historia y buenas actuaciones.",
    "fecha": {
      "$date": "2026-01-20T01:45:04Z"
    },
    "pelicula_titulo": "Relatos salvajes"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281371"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281325"
    },
    "puntaje": 5,
    "comentario": "Una obra maestra.",
    "fecha": {
      "$date": "2026-08-31T03:33:20Z"
    },
    "pelicula_titulo": "Origen"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281350"
    },
    "perfil_id": "p2",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281349"
    },
    "puntaje": 4,
    "comentario": "Me gustó bastante.",
    "fecha": {
      "$date": "2025-07-07T21:29:18Z"
    },
    "pelicula_titulo": "Vértigo"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281368"
    },
    "perfil_id": "p2",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe03828133f"
    },
    "puntaje": 5,
    "comentario": "De lo mejor que he visto.",
    "fecha": {
      "$date": "2026-04-28T09:21:28Z"
    },
    "pelicula_titulo": "Ciudad de Dios"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281379"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe03828133d"
    },
    "puntaje": 3,
    "comentario": "Cumple, sin más.",
    "fecha": {
      "$date": "2026-02-18T02:31:15Z"
    },
    "pelicula_titulo": "Amélie"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281367"
    },
    "perfil_id": "p3",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281340"
    },
    "puntaje": 3,
    "comentario": "Cumple, sin más.",
    "fecha": {
      "$date": "2026-03-27T15:00:55Z"
    },
    "pelicula_titulo": "Amores perros"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281374"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281327"
    },
    "puntaje": 5,
    "comentario": "Un final inolvidable.",
    "fecha": {
      "$date": "2024-12-18T14:54:08Z"
    },
    "pelicula_titulo": "Buenos muchachos"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281365"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281335"
    },
    "puntaje": 4,
    "comentario": "Me gustó bastante.",
    "fecha": {
      "$date": "2022-05-16T11:09:52Z"
    },
    "pelicula_titulo": "El rey león"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281375"
    },
    "perfil_id": "p2",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281338"
    },
    "puntaje": 4,
    "comentario": "Me gustó bastante.",
    "fecha": {
      "$date": "2023-08-02T20:40:12Z"
    },
    "pelicula_titulo": "Mad Max: Furia en el camino"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe03828137d"
    },
    "perfil_id": "p3",
    "pelicula_id": {
      "$oid": "6ad5735c89a50fe03828131e"
    },
    "puntaje": 4,
    "comentario": "Me gustó bastante.",
    "fecha": {
      "$date": "2023-09-17T03:29:58Z"
    },
    "pelicula_titulo": "Cadena perpetua"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281359"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281324"
    },
    "puntaje": 4,
    "comentario": "Me gustó bastante.",
    "fecha": {
      "$date": "2025-07-09T20:27:44Z"
    },
    "pelicula_titulo": "El club de la pelea"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281380"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281334"
    },
    "puntaje": 3,
    "comentario": "Entretenida, aunque olvidable.",
    "fecha": {
      "$date": "2025-09-01T18:50:22Z"
    },
    "pelicula_titulo": "Toy Story"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281371"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281343"
    },
    "puntaje": 3,
    "comentario": "Cumple, sin más.",
    "fecha": {
      "$date": "2023-04-10T16:23:42Z"
    },
    "pelicula_titulo": "Nueve reinas"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281363"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281323"
    },
    "puntaje": 5,
    "comentario": "De lo mejor que he visto.",
    "fecha": {
      "$date": "2023-08-15T17:26:17Z"
    },
    "pelicula_titulo": "Forrest Gump"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281367"
    },
    "perfil_id": "p3",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281344"
    },
    "puntaje": 4,
    "comentario": "Muy buena, la recomiendo.",
    "fecha": {
      "$date": "2024-07-30T12:14:54Z"
    },
    "pelicula_titulo": "El secreto de sus ojos"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe03828136d"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281324"
    },
    "puntaje": 4,
    "comentario": "Muy buena, la recomiendo.",
    "fecha": {
      "$date": "2026-09-29T16:40:53Z"
    },
    "pelicula_titulo": "El club de la pelea"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281365"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281342"
    },
    "puntaje": 3,
    "comentario": "Cumple, sin más.",
    "fecha": {
      "$date": "2023-01-15T02:26:21Z"
    },
    "pelicula_titulo": "Roma"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe03828136e"
    },
    "perfil_id": "p2",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe03828132d"
    },
    "puntaje": 4,
    "comentario": "Muy buena, la recomiendo.",
    "fecha": {
      "$date": "2025-05-09T05:25:09Z"
    },
    "pelicula_titulo": "Interestelar"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281363"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe03828133d"
    },
    "puntaje": 4,
    "comentario": "Gran historia y buenas actuaciones.",
    "fecha": {
      "$date": "2026-05-22T13:56:39Z"
    },
    "pelicula_titulo": "Amélie"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281379"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281336"
    },
    "puntaje": 4,
    "comentario": "Muy buena, la recomiendo.",
    "fecha": {
      "$date": "2026-06-12T18:03:00Z"
    },
    "pelicula_titulo": "Titanic"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe03828136c"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281349"
    },
    "puntaje": 5,
    "comentario": "Un final inolvidable.",
    "fecha": {
      "$date": "2024-07-19T06:04:29Z"
    },
    "pelicula_titulo": "Vértigo"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281374"
    },
    "perfil_id": "p2",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe03828132a"
    },
    "puntaje": 3,
    "comentario": "Está bien para una tarde.",
    "fecha": {
      "$date": "2023-08-15T17:57:34Z"
    },
    "pelicula_titulo": "La vida es bella"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe03828136a"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281332"
    },
    "puntaje": 5,
    "comentario": "Un final inolvidable.",
    "fecha": {
      "$date": "2026-03-25T19:34:36Z"
    },
    "pelicula_titulo": "Psicosis"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe03828136b"
    },
    "perfil_id": "p2",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281326"
    },
    "puntaje": 4,
    "comentario": "Gran historia y buenas actuaciones.",
    "fecha": {
      "$date": "2025-04-09T04:08:40Z"
    },
    "pelicula_titulo": "Matrix"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281364"
    },
    "perfil_id": "p2",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281340"
    },
    "puntaje": 4,
    "comentario": "Gran historia y buenas actuaciones.",
    "fecha": {
      "$date": "2026-03-20T11:13:37Z"
    },
    "pelicula_titulo": "Amores perros"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281373"
    },
    "perfil_id": "p2",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281345"
    },
    "puntaje": 4,
    "comentario": "Muy buena, la recomiendo.",
    "fecha": {
      "$date": "2024-11-18T13:25:29Z"
    },
    "pelicula_titulo": "Relatos salvajes"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe03828137c"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281348"
    },
    "puntaje": 4,
    "comentario": "Muy buena, la recomiendo.",
    "fecha": {
      "$date": "2026-08-06T16:15:20Z"
    },
    "pelicula_titulo": "Ciudadano Kane"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe03828137a"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281338"
    },
    "puntaje": 4,
    "comentario": "Gran historia y buenas actuaciones.",
    "fecha": {
      "$date": "2024-09-27T02:23:09Z"
    },
    "pelicula_titulo": "Mad Max: Furia en el camino"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281368"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5731689a50fe03828131d"
    },
    "puntaje": 2,
    "comentario": "Tiene buenas ideas pero falla.",
    "fecha": {
      "$date": "2024-08-27T15:16:59Z"
    },
    "pelicula_titulo": "El padrino"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281357"
    },
    "perfil_id": "p2",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281342"
    },
    "puntaje": 3,
    "comentario": "Entretenida, aunque olvidable.",
    "fecha": {
      "$date": "2026-02-02T15:46:24Z"
    },
    "pelicula_titulo": "Roma"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281380"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe03828133b"
    },
    "puntaje": 3,
    "comentario": "Cumple, sin más.",
    "fecha": {
      "$date": "2025-09-04T15:26:07Z"
    },
    "pelicula_titulo": "Apocalypse Now"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281377"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281347"
    },
    "puntaje": 5,
    "comentario": "Un final inolvidable.",
    "fecha": {
      "$date": "2026-03-24T17:25:05Z"
    },
    "pelicula_titulo": "Los siete samuráis"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281350"
    },
    "perfil_id": "p2",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe03828133a"
    },
    "puntaje": 4,
    "comentario": "Me gustó bastante.",
    "fecha": {
      "$date": "2026-10-05T16:29:56Z"
    },
    "pelicula_titulo": "Taxi Driver"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe03828137b"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe03828133f"
    },
    "puntaje": 4,
    "comentario": "Muy buena, la recomiendo.",
    "fecha": {
      "$date": "2025-01-21T10:39:49Z"
    },
    "pelicula_titulo": "Ciudad de Dios"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe038281364"
    },
    "perfil_id": "p2",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe03828133a"
    },
    "puntaje": 3,
    "comentario": "Está bien para una tarde.",
    "fecha": {
      "$date": "2026-01-31T19:39:25Z"
    },
    "pelicula_titulo": "Taxi Driver"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe03828137c"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281322"
    },
    "puntaje": 5,
    "comentario": "De lo mejor que he visto.",
    "fecha": {
      "$date": "2026-08-27T17:44:30Z"
    },
    "pelicula_titulo": "El señor de los anillos: El retorno del rey"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe03828137a"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe038281323"
    },
    "puntaje": 3,
    "comentario": "Entretenida, aunque olvidable.",
    "fecha": {
      "$date": "2024-09-02T22:33:13Z"
    },
    "pelicula_titulo": "Forrest Gump"
  },
  {
    "usuario_id": {
      "$oid": "6ad5770e89a50fe03828135a"
    },
    "perfil_id": "p1",
    "pelicula_id": {
      "$oid": "6ad5753189a50fe03828133b"
    },
    "puntaje": 4,
    "comentario": "Gran historia y buenas actuaciones.",
    "fecha": {
      "$date": "2025-07-27T16:53:11Z"
    },
    "pelicula_titulo": "Apocalypse Now"
  }
]
)