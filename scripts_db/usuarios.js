db.createCollection("usuarios");

db.usuarios.insertMany(
    [
  {
    "email": "ana.gomez1@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_001",
    "nombre": "Ana Gómez",
    "pais": "CL",
    "fecha_registro": {
      "$date": "2023-01-15T01:58:03Z"
    },
    "suscripcion": {
      "plan": "estandar",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-11-08T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Ana",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p2",
        "nombre": "Niños",
        "idioma": "es",
        "infantil": true
      }
    ]
  },
  {
    "email": "carlos.torres2@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_002",
    "nombre": "Carlos Torres",
    "pais": "PE",
    "fecha_registro": {
      "$date": "2025-06-03T05:16:53Z"
    },
    "suscripcion": {
      "plan": "premium",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-11-09T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Carlos",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p2",
        "nombre": "Niños",
        "idioma": "es",
        "infantil": true
      },
      {
        "perfil_id": "p3",
        "nombre": "Invitado",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p4",
        "nombre": "Familia",
        "idioma": "es",
        "infantil": false
      }
    ]
  },
  {
    "email": "laura.arango3@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_003",
    "nombre": "Laura Arango",
    "pais": "EC",
    "fecha_registro": {
      "$date": "2025-09-07T11:48:13Z"
    },
    "suscripcion": {
      "plan": "estandar",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-10-25T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Laura",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p2",
        "nombre": "Niños",
        "idioma": "es",
        "infantil": true
      }
    ]
  },
  {
    "email": "juan.rodriguez4@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_004",
    "nombre": "Juan Rodríguez",
    "pais": "CO",
    "fecha_registro": {
      "$date": "2022-04-13T20:48:21Z"
    },
    "suscripcion": {
      "plan": "estandar",
      "estado": "cancelada",
      "fecha_renovacion": null
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Juan",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p2",
        "nombre": "Niños",
        "idioma": "es",
        "infantil": true
      }
    ]
  },
  {
    "email": "maria.vargas5@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_005",
    "nombre": "María Vargas",
    "pais": "UY",
    "fecha_registro": {
      "$date": "2025-01-23T06:45:46Z"
    },
    "suscripcion": {
      "plan": "basico",
      "estado": "pausada",
      "fecha_renovacion": {
        "$date": "2026-11-17T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "María",
        "idioma": "es",
        "infantil": false
      }
    ]
  },
  {
    "email": "pedro.zapata6@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_006",
    "nombre": "Pedro Zapata",
    "pais": "UY",
    "fecha_registro": {
      "$date": "2026-05-08T10:48:50Z"
    },
    "suscripcion": {
      "plan": "basico",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-11-12T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Pedro",
        "idioma": "es",
        "infantil": false
      }
    ]
  },
  {
    "email": "sofia.martinez7@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_007",
    "nombre": "Sofía Martínez",
    "pais": "CO",
    "fecha_registro": {
      "$date": "2024-06-20T05:07:26Z"
    },
    "suscripcion": {
      "plan": "estandar",
      "estado": "cancelada",
      "fecha_renovacion": null
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Sofía",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p2",
        "nombre": "Niños",
        "idioma": "es",
        "infantil": true
      }
    ]
  },
  {
    "email": "diego.castro8@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_008",
    "nombre": "Diego Castro",
    "pais": "UY",
    "fecha_registro": {
      "$date": "2026-05-20T14:06:29Z"
    },
    "suscripcion": {
      "plan": "estandar",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-10-27T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Diego",
        "idioma": "es",
        "infantil": false
      }
    ]
  },
  {
    "email": "valentina.cardona9@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_009",
    "nombre": "Valentina Cardona",
    "pais": "UY",
    "fecha_registro": {
      "$date": "2022-07-19T18:11:39Z"
    },
    "suscripcion": {
      "plan": "estandar",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-11-08T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Valentina",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p2",
        "nombre": "Niños",
        "idioma": "es",
        "infantil": true
      }
    ]
  },
  {
    "email": "andres.lopez10@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_010",
    "nombre": "Andrés López",
    "pais": "MX",
    "fecha_registro": {
      "$date": "2023-08-28T13:25:45Z"
    },
    "suscripcion": {
      "plan": "estandar",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-11-11T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Andrés",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p2",
        "nombre": "Niños",
        "idioma": "es",
        "infantil": true
      }
    ]
  },
  {
    "email": "camila.jimenez11@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_011",
    "nombre": "Camila Jiménez",
    "pais": "CO",
    "fecha_registro": {
      "$date": "2022-10-14T08:35:28Z"
    },
    "suscripcion": {
      "plan": "estandar",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-10-19T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Camila",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p2",
        "nombre": "Niños",
        "idioma": "es",
        "infantil": true
      }
    ]
  },
  {
    "email": "santiago.mejia12@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_012",
    "nombre": "Santiago Mejía",
    "pais": "CL",
    "fecha_registro": {
      "$date": "2024-02-10T00:06:42Z"
    },
    "suscripcion": {
      "plan": "estandar",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-10-22T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Santiago",
        "idioma": "es",
        "infantil": false
      }
    ]
  },
  {
    "email": "daniela.garcia13@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_013",
    "nombre": "Daniela García",
    "pais": "ES",
    "fecha_registro": {
      "$date": "2023-04-26T19:48:35Z"
    },
    "suscripcion": {
      "plan": "premium",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-10-19T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Daniela",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p2",
        "nombre": "Niños",
        "idioma": "es",
        "infantil": true
      },
      {
        "perfil_id": "p3",
        "nombre": "Invitado",
        "idioma": "es",
        "infantil": false
      }
    ]
  },
  {
    "email": "mateo.moreno14@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_014",
    "nombre": "Mateo Moreno",
    "pais": "AR",
    "fecha_registro": {
      "$date": "2026-08-23T18:04:01Z"
    },
    "suscripcion": {
      "plan": "estandar",
      "estado": "pausada",
      "fecha_renovacion": {
        "$date": "2026-10-26T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Mateo",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p2",
        "nombre": "Niños",
        "idioma": "es",
        "infantil": true
      }
    ]
  },
  {
    "email": "isabela.henao15@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_015",
    "nombre": "Isabela Henao",
    "pais": "PE",
    "fecha_registro": {
      "$date": "2022-09-20T07:47:47Z"
    },
    "suscripcion": {
      "plan": "estandar",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-11-01T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Isabela",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p2",
        "nombre": "Niños",
        "idioma": "es",
        "infantil": true
      }
    ]
  },
  {
    "email": "sebastian.hernandez16@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_016",
    "nombre": "Sebastián Hernández",
    "pais": "PE",
    "fecha_registro": {
      "$date": "2026-04-27T08:59:48Z"
    },
    "suscripcion": {
      "plan": "premium",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-11-01T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Sebastián",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p2",
        "nombre": "Niños",
        "idioma": "es",
        "infantil": true
      }
    ]
  },
  {
    "email": "natalia.ospina17@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_017",
    "nombre": "Natalia Ospina",
    "pais": "CL",
    "fecha_registro": {
      "$date": "2025-03-14T05:03:12Z"
    },
    "suscripcion": {
      "plan": "estandar",
      "estado": "cancelada",
      "fecha_renovacion": null
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Natalia",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p2",
        "nombre": "Niños",
        "idioma": "es",
        "infantil": true
      }
    ]
  },
  {
    "email": "felipe.salazar18@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_018",
    "nombre": "Felipe Salazar",
    "pais": "MX",
    "fecha_registro": {
      "$date": "2022-06-09T14:49:30Z"
    },
    "suscripcion": {
      "plan": "basico",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-11-14T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Felipe",
        "idioma": "es",
        "infantil": false
      }
    ]
  },
  {
    "email": "paula.ramirez19@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_019",
    "nombre": "Paula Ramírez",
    "pais": "CO",
    "fecha_registro": {
      "$date": "2022-03-21T11:33:13Z"
    },
    "suscripcion": {
      "plan": "estandar",
      "estado": "pausada",
      "fecha_renovacion": {
        "$date": "2026-11-04T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Paula",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p2",
        "nombre": "Niños",
        "idioma": "es",
        "infantil": true
      }
    ]
  },
  {
    "email": "julian.restrepo20@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_020",
    "nombre": "Julián Restrepo",
    "pais": "UY",
    "fecha_registro": {
      "$date": "2024-10-09T23:30:33Z"
    },
    "suscripcion": {
      "plan": "estandar",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-11-17T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Julián",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p2",
        "nombre": "Niños",
        "idioma": "es",
        "infantil": true
      }
    ]
  },
  {
    "email": "ana.rodriguez21@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_021",
    "nombre": "Ana Rodríguez",
    "pais": "AR",
    "fecha_registro": {
      "$date": "2023-04-24T02:54:49Z"
    },
    "suscripcion": {
      "plan": "basico",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-11-06T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Ana",
        "idioma": "es",
        "infantil": false
      }
    ]
  },
  {
    "email": "carlos.vargas22@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_022",
    "nombre": "Carlos Vargas",
    "pais": "ES",
    "fecha_registro": {
      "$date": "2025-11-26T11:53:38Z"
    },
    "suscripcion": {
      "plan": "premium",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-11-07T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Carlos",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p2",
        "nombre": "Niños",
        "idioma": "es",
        "infantil": true
      },
      {
        "perfil_id": "p3",
        "nombre": "Invitado",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p4",
        "nombre": "Familia",
        "idioma": "es",
        "infantil": false
      }
    ]
  },
  {
    "email": "laura.zapata23@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_023",
    "nombre": "Laura Zapata",
    "pais": "EC",
    "fecha_registro": {
      "$date": "2022-04-17T02:36:32Z"
    },
    "suscripcion": {
      "plan": "basico",
      "estado": "pausada",
      "fecha_renovacion": {
        "$date": "2026-10-25T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Laura",
        "idioma": "es",
        "infantil": false
      }
    ]
  },
  {
    "email": "juan.martinez24@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_024",
    "nombre": "Juan Martínez",
    "pais": "CO",
    "fecha_registro": {
      "$date": "2025-11-04T18:12:17Z"
    },
    "suscripcion": {
      "plan": "premium",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-11-15T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Juan",
        "idioma": "es",
        "infantil": false
      }
    ]
  },
  {
    "email": "maria.castro25@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_025",
    "nombre": "María Castro",
    "pais": "CO",
    "fecha_registro": {
      "$date": "2023-02-06T05:21:34Z"
    },
    "suscripcion": {
      "plan": "premium",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-11-08T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "María",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p2",
        "nombre": "Niños",
        "idioma": "es",
        "infantil": true
      },
      {
        "perfil_id": "p3",
        "nombre": "Invitado",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p4",
        "nombre": "Familia",
        "idioma": "es",
        "infantil": false
      }
    ]
  },
  {
    "email": "pedro.cardona26@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_026",
    "nombre": "Pedro Cardona",
    "pais": "AR",
    "fecha_registro": {
      "$date": "2023-08-01T21:33:16Z"
    },
    "suscripcion": {
      "plan": "premium",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-10-31T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Pedro",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p2",
        "nombre": "Niños",
        "idioma": "es",
        "infantil": true
      }
    ]
  },
  {
    "email": "sofia.lopez27@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_027",
    "nombre": "Sofía López",
    "pais": "MX",
    "fecha_registro": {
      "$date": "2025-04-05T12:22:12Z"
    },
    "suscripcion": {
      "plan": "estandar",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-10-28T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Sofía",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p2",
        "nombre": "Niños",
        "idioma": "es",
        "infantil": true
      }
    ]
  },
  {
    "email": "diego.jimenez28@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_028",
    "nombre": "Diego Jiménez",
    "pais": "PE",
    "fecha_registro": {
      "$date": "2025-12-12T08:01:42Z"
    },
    "suscripcion": {
      "plan": "basico",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-11-03T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Diego",
        "idioma": "es",
        "infantil": false
      }
    ]
  },
  {
    "email": "valentina.mejia29@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_029",
    "nombre": "Valentina Mejía",
    "pais": "AR",
    "fecha_registro": {
      "$date": "2024-10-09T04:36:30Z"
    },
    "suscripcion": {
      "plan": "estandar",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-11-04T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Valentina",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p2",
        "nombre": "Niños",
        "idioma": "es",
        "infantil": true
      }
    ]
  },
  {
    "email": "andres.garcia30@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_030",
    "nombre": "Andrés García",
    "pais": "PE",
    "fecha_registro": {
      "$date": "2022-10-21T19:21:18Z"
    },
    "suscripcion": {
      "plan": "estandar",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-11-15T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Andrés",
        "idioma": "es",
        "infantil": false
      }
    ]
  },
  {
    "email": "camila.moreno31@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_031",
    "nombre": "Camila Moreno",
    "pais": "MX",
    "fecha_registro": {
      "$date": "2025-11-11T21:10:03Z"
    },
    "suscripcion": {
      "plan": "basico",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-11-08T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Camila",
        "idioma": "es",
        "infantil": false
      }
    ]
  },
  {
    "email": "santiago.henao32@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_032",
    "nombre": "Santiago Henao",
    "pais": "CO",
    "fecha_registro": {
      "$date": "2024-12-29T11:18:21Z"
    },
    "suscripcion": {
      "plan": "estandar",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-11-15T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Santiago",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p2",
        "nombre": "Niños",
        "idioma": "es",
        "infantil": true
      }
    ]
  },
  {
    "email": "daniela.hernandez33@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_033",
    "nombre": "Daniela Hernández",
    "pais": "MX",
    "fecha_registro": {
      "$date": "2024-05-21T09:31:43Z"
    },
    "suscripcion": {
      "plan": "basico",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-11-05T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Daniela",
        "idioma": "es",
        "infantil": false
      }
    ]
  },
  {
    "email": "mateo.ospina34@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_034",
    "nombre": "Mateo Ospina",
    "pais": "PE",
    "fecha_registro": {
      "$date": "2024-04-12T23:02:14Z"
    },
    "suscripcion": {
      "plan": "premium",
      "estado": "pausada",
      "fecha_renovacion": {
        "$date": "2026-11-09T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Mateo",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p2",
        "nombre": "Niños",
        "idioma": "es",
        "infantil": true
      }
    ]
  },
  {
    "email": "isabela.salazar35@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_035",
    "nombre": "Isabela Salazar",
    "pais": "PE",
    "fecha_registro": {
      "$date": "2022-10-27T14:23:49Z"
    },
    "suscripcion": {
      "plan": "premium",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-11-01T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Isabela",
        "idioma": "es",
        "infantil": false
      }
    ]
  },
  {
    "email": "sebastian.ramirez36@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_036",
    "nombre": "Sebastián Ramírez",
    "pais": "ES",
    "fecha_registro": {
      "$date": "2023-07-31T07:31:24Z"
    },
    "suscripcion": {
      "plan": "basico",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-11-08T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Sebastián",
        "idioma": "es",
        "infantil": false
      }
    ]
  },
  {
    "email": "natalia.restrepo37@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_037",
    "nombre": "Natalia Restrepo",
    "pais": "PE",
    "fecha_registro": {
      "$date": "2022-07-18T13:51:01Z"
    },
    "suscripcion": {
      "plan": "premium",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-10-28T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Natalia",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p2",
        "nombre": "Niños",
        "idioma": "es",
        "infantil": true
      },
      {
        "perfil_id": "p3",
        "nombre": "Invitado",
        "idioma": "es",
        "infantil": false
      }
    ]
  },
  {
    "email": "felipe.gomez38@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_038",
    "nombre": "Felipe Gómez",
    "pais": "PE",
    "fecha_registro": {
      "$date": "2022-07-15T08:36:15Z"
    },
    "suscripcion": {
      "plan": "estandar",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-10-19T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Felipe",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p2",
        "nombre": "Niños",
        "idioma": "es",
        "infantil": true
      }
    ]
  },
  {
    "email": "paula.torres39@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_039",
    "nombre": "Paula Torres",
    "pais": "EC",
    "fecha_registro": {
      "$date": "2022-02-17T22:32:37Z"
    },
    "suscripcion": {
      "plan": "estandar",
      "estado": "cancelada",
      "fecha_renovacion": null
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Paula",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p2",
        "nombre": "Niños",
        "idioma": "es",
        "infantil": true
      }
    ]
  },
  {
    "email": "julian.arango40@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_040",
    "nombre": "Julián Arango",
    "pais": "CO",
    "fecha_registro": {
      "$date": "2024-08-20T21:12:40Z"
    },
    "suscripcion": {
      "plan": "basico",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-10-22T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Julián",
        "idioma": "es",
        "infantil": false
      }
    ]
  },
  {
    "email": "ana.martinez41@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_041",
    "nombre": "Ana Martínez",
    "pais": "ES",
    "fecha_registro": {
      "$date": "2025-11-17T21:09:29Z"
    },
    "suscripcion": {
      "plan": "basico",
      "estado": "pausada",
      "fecha_renovacion": {
        "$date": "2026-11-07T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Ana",
        "idioma": "es",
        "infantil": false
      }
    ]
  },
  {
    "email": "carlos.castro42@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_042",
    "nombre": "Carlos Castro",
    "pais": "EC",
    "fecha_registro": {
      "$date": "2024-09-08T23:25:10Z"
    },
    "suscripcion": {
      "plan": "premium",
      "estado": "pausada",
      "fecha_renovacion": {
        "$date": "2026-11-07T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Carlos",
        "idioma": "es",
        "infantil": false
      }
    ]
  },
  {
    "email": "laura.cardona43@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_043",
    "nombre": "Laura Cardona",
    "pais": "EC",
    "fecha_registro": {
      "$date": "2023-01-07T02:06:39Z"
    },
    "suscripcion": {
      "plan": "basico",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-11-09T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Laura",
        "idioma": "es",
        "infantil": false
      }
    ]
  },
  {
    "email": "juan.lopez44@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_044",
    "nombre": "Juan López",
    "pais": "EC",
    "fecha_registro": {
      "$date": "2024-06-25T20:15:13Z"
    },
    "suscripcion": {
      "plan": "estandar",
      "estado": "cancelada",
      "fecha_renovacion": null
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Juan",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p2",
        "nombre": "Niños",
        "idioma": "es",
        "infantil": true
      }
    ]
  },
  {
    "email": "maria.jimenez45@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_045",
    "nombre": "María Jiménez",
    "pais": "CO",
    "fecha_registro": {
      "$date": "2024-05-24T09:00:40Z"
    },
    "suscripcion": {
      "plan": "estandar",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-11-10T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "María",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p2",
        "nombre": "Niños",
        "idioma": "es",
        "infantil": true
      }
    ]
  },
  {
    "email": "pedro.mejia46@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_046",
    "nombre": "Pedro Mejía",
    "pais": "PE",
    "fecha_registro": {
      "$date": "2025-07-18T10:40:11Z"
    },
    "suscripcion": {
      "plan": "estandar",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-10-29T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Pedro",
        "idioma": "es",
        "infantil": false
      }
    ]
  },
  {
    "email": "sofia.garcia47@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_047",
    "nombre": "Sofía García",
    "pais": "CL",
    "fecha_registro": {
      "$date": "2022-06-24T10:29:09Z"
    },
    "suscripcion": {
      "plan": "premium",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-11-11T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Sofía",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p2",
        "nombre": "Niños",
        "idioma": "es",
        "infantil": true
      },
      {
        "perfil_id": "p3",
        "nombre": "Invitado",
        "idioma": "es",
        "infantil": false
      }
    ]
  },
  {
    "email": "diego.moreno48@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_048",
    "nombre": "Diego Moreno",
    "pais": "MX",
    "fecha_registro": {
      "$date": "2022-04-26T22:41:10Z"
    },
    "suscripcion": {
      "plan": "basico",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-10-23T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Diego",
        "idioma": "es",
        "infantil": false
      }
    ]
  },
  {
    "email": "valentina.henao49@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_049",
    "nombre": "Valentina Henao",
    "pais": "CO",
    "fecha_registro": {
      "$date": "2025-08-12T17:09:11Z"
    },
    "suscripcion": {
      "plan": "premium",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-11-06T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Valentina",
        "idioma": "es",
        "infantil": false
      },
      {
        "perfil_id": "p2",
        "nombre": "Niños",
        "idioma": "es",
        "infantil": true
      },
      {
        "perfil_id": "p3",
        "nombre": "Invitado",
        "idioma": "es",
        "infantil": false
      }
    ]
  },
  {
    "email": "andres.hernandez50@correo.com",
    "password_hash": "$2b$12$HASH_DE_EJEMPLO_NO_REAL_050",
    "nombre": "Andrés Hernández",
    "pais": "EC",
    "fecha_registro": {
      "$date": "2025-03-17T20:44:27Z"
    },
    "suscripcion": {
      "plan": "basico",
      "estado": "activa",
      "fecha_renovacion": {
        "$date": "2026-10-26T00:00:00Z"
      }
    },
    "perfiles": [
      {
        "perfil_id": "p1",
        "nombre": "Andrés",
        "idioma": "es",
        "infantil": false
      }
    ]
  }
]
)