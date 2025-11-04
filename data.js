var APP_DATA = {
  "scenes": [
    //  =================================================== SECCIÓN A ===================================================
    // ==== A1 ====
    { 
      "id": "0-a1",
      "name": "Entrada principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.009386,
        "pitch": -0.018635,
        "fov": 1.357325
      },
      "linkHotspots": [
        { //Direccion pasillo principal
          "yaw": 0.045843,
          "pitch": 0.401978,
          "rotation": 0,
          "target": "1-a2"
        },
        {//Direccion parqueo
        "yaw": 2.542442,
        "pitch": 0.607866,
        "rotation": -0.15,
        "target": "31-f1"
        }
      ],
      "infoHotspots": [
       
      ]
    },
    // ==== A2 ====
    {
      "id": "1-a2",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.687978,
        "pitch": -0.059789,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
          "yaw": -0.615129,
          "pitch": 0.362293,
          "rotation": 0,
          "target": "2-a3"
        },
        {
          "yaw": 2.473183,
          "pitch": 0.439505,
          "rotation": 0,
          "target": "0-a1",
          "view": {
            "yaw": -3.100776,
            "pitch": 0.195191,
            "fov": 1.299127
          }
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.506825,
          "pitch": -0.084823,
          "title": "Caseta de vigilancia",
          "text": "Funcionario:<br>"
          + "<b>Caseta de Seguridad<br><br>"
          + "<b>Contacto</b>:<br>"
          + "efrain.aragon.obregon@una.cr<br>"
          + "2562-6261<br><br>"
        }
      ]
    },
    // ==== A3 ====
    {
      "id": "2-a3",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.429652,
        "pitch": 0.135947,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
          "yaw": -2.317434,
          "pitch": 0.530561,
          "rotation": 0,
          "target": "3-a4"
        },
        {
          "yaw": 0.737917,
          "pitch": 0.399998,
          "rotation": 0,
          "target": "1-a2",
          "view":  {
            "yaw": 2.589722,
            "pitch": 0.031893,
            "fov": 1.299127
          }
        }
      ],
      "infoHotspots": []
    },
    // ==== A4 ====
    {
      "id": "3-a4",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.775336,
        "pitch": 0.033028,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
          "yaw": -0.149256,
          "pitch": 0.423771,
          "rotation": 0,
          "target": "37-b1"
        },
        {
          "yaw": 3.014524,
          "pitch": 0.455652,
          "rotation": 0,
          "target": "13-e1"
        },
        {
          "yaw": 1.425499,
          "pitch": 0.591293,
          "rotation": 0,
          "target": "2-a3",
          "view": {
            "yaw": 0.793819,
            "pitch": -0.043289,
            "fov": 1.299127
          }
        },
        {
          "yaw": -1.696874,
          "pitch": 0.47562,
          "rotation": 0,
          "target": "4-a5"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.005629,
          "pitch": 0.030903,
          "title": "Comedor"
        }
      ]
    },
    // ==== A5 ====
    {
      "id": "4-a5",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.7495375703851153,
        "pitch": -0.042368449400548513,
        "fov": 1.3483902604801417
      },
      "linkHotspots": [
        {
          "yaw": -2.740838,
          "pitch": 0.503483,
          "rotation": 0,
          "target": "5-a6"
        },
        {
          "yaw": 0.420144,
          "pitch": 0.473185,
          "rotation": 0,
          "target": "3-a4",
          "view": {
            "yaw": 1.445156,
            "pitch": 0.008436,
            "fov": 1.299127
}
        }
      ],
      "infoHotspots": []
    },
    // ==== A6 ====
    {
      "id": "5-a6",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -3.121664383972705,
        "pitch": -0.07571175107570483,
        "fov": 1.3483902604801417
      },
      "linkHotspots": [
        {
          "yaw": 3.133564,
          "pitch": 0.468089,
          "rotation": 0,
          "target": "6-a7"
        },
        {
          "yaw": 0.023908,
          "pitch": 0.433904,
          "rotation": 0,
          "target": "4-a5",
          "view": {"yaw": 0.391369,"pitch": -0.024841,"fov": 1.299127}
        },
        {
          "yaw": -1.401779,
          "pitch": 0.4609,
          "rotation": 0,
          "target": "44-lab12",
          "name": "Laboratorio #13"
        },
        {
          "yaw": -1.733989,
          "pitch": 0.457628,
          "rotation": 0,
          "target": "46-lab13",
          "name": "Laboratorio #12"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.624572,
          "pitch": -0.183232,
          "title": "Vida Estudiantil",
          "text": "Funcionario/a:<br>"
          + "<b>Alexander Arias Gómez<br><br>"
          + "<b>De Lunes a Viernes</b><br>"
          + "<b>8:00 AM a 5:00 PM</b><br></br>"
          + "<b>Contacto</b>:<br>"
          + "alexander.arias.gomez@una.cr<br>"
          + "2562-62889<br><br>"
        },
        {
          "yaw": 1.496714,
          "pitch": -0.185432,
          "title": "Psicología"
        },
        {
          "yaw": -1.500216,
          "pitch": -0.137431,
          "title": "Laboratiorio #13"
        },
        {
          "yaw": -1.652191,
          "pitch": -0.138730,
          "title": "Laboratorio #12"
        }
      ]
    },
    // ==== LAB 13 ====
    {
      "id": "44-lab12",
      "name": "Laboratorio #13",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.833409,
        "pitch": 0.026223,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
          "yaw": 2.82827,
          "pitch": 0.480356,
          "rotation": 0,
          "target": "5-a6",
          "name": "Salir"
        }
      ],
      "infoHotspots": []
    },
    // ==== LAB 12 ====
    {
      "id": "46-lab13",
      "name": "Laboratorio #12",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.107312,
        "pitch": 0.091288,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
          "yaw": -0.104645,
          "pitch": 0.549512,
          "rotation": 0,
          "target": "5-a6",
          "name": "Salir"
        }
      ],
      "infoHotspots": []
    },
    // ==== A7 ====
    {
      "id": "6-a7",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.7620258347439286,
        "pitch": -0.10906723259026485,
        "fov": 1.3483902604801417
      },
      "linkHotspots": [
        {
          "yaw": 1.732165,
          "pitch": 0.44027,
          "rotation": 0,
          "target": "7-a8"
        },
        {
          "yaw": -1.423318,
          "pitch": 0.530596,
          "rotation": 0,
          "target": "5-a6",
          "view": {"yaw": -0.013931,"pitch": -0.07375,"fov": 1.299127}
        },
        {
          "yaw": -2.97742,
          "pitch": 0.468558,
          "rotation": 0,
          "target": "47-labingles",
          "name": "Laboratorio de Idiomas"
        }
        ,
        {
          "yaw": 0.158186,
          "pitch": 0.396846,
          "rotation": 0,
          "target": "45-labfisica",
          "name": "Laboratorio de Física"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.190234,
          "pitch": -0.219092,
          "title": "Laboratorio de Física"
        },
        {
          "yaw": 0.035435,
          "pitch": -0.220315,
          "title": "Unidad de Registro y Gestión Financiera",
          "text": "Funcionario/a registro:<br>"
          + "<b>Elieth Peña Fajardo<br><br>"
          + "<b>De Lunes a Viernes</b><br>"
          + "<b>8:00 AM a 5:00 PM</b><br></br>"
          + "<b>Contacto</b>:<br>"
          + "elieth.pena.fajardo@una.cr<br>"
          + "2562-6259<br><br>"
          +"Funcionario/a financiero:<br>"
          + "<b>Marilyn Forlenza Méndez<br><br>"
          + "<b>De Lunes a Viernes</b><br>"
          + "<b>8:00 AM a 5:00 PM</b><br></br>"
          + "<b>Contacto</b>:<br>"
          + "marilyn.forlenza.mendez@una.cr<br>"
          + "2562-6260<br>"
        },
        {
          "yaw": -2.91088,
          "pitch": -0.123195,
          "title": "Aula #11: Laboratorio de Idiomas"
        }
      ]
    },
    // ==== LAB IDIOMAS ====
    {
      "id": "47-labingles",
      "name": "Laboratorio idiomas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.133049,
        "pitch": 0.168578,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
          "yaw": 0.085369,
          "pitch": 0.624223,
          "rotation": 0,
          "target": "6-a7"
        }
      ],
      "infoHotspots": []
    },
    // ==== LAB FISICA ====
    {
      "id": "45-labfisica",
      "name": "Laboratorio de física",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.75035,
        "pitch": 0.106722,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
          "yaw": -1.793731,
          "pitch": 0.616138,
          "rotation": 0,
          "target": "6-a7"
        }
      ],
      "infoHotspots": []
    },
    // ==== A8 ====
    {
      "id": "7-a8",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": 
         {
          "yaw": -1.330656,
          "pitch": 0.087979,
          "fov": 1.299127
        },
      "linkHotspots": [
        {
          "yaw": -1.877462,
          "pitch": 0.539967,
          "rotation": 0,
          "target": "33-g1",
          "view": {
            "yaw": -0.275114,
            "pitch": 0.037819,
            "fov": 1.299127
          }
        },
        {
          "yaw": 2.369133,
          "pitch": 0.525247,
          "rotation": 0,
          "target": "6-a7",
          "view": {"yaw": -1.414136,"pitch": 0.062141,"fov": 1.299127}
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.616167,
          "pitch": 0.175958,
          "title": "Éxito Académico",
          "text": "Funcionario/a:<br>"
          + "<b>Ana Francis Rosales Jenkins<br><br>"
          + "<b>De Lunes a Viernes</b><br>"
          + "<b>8:00 AM a 5:00 PM</b><br></br>"
          + "<b>Contacto</b>:<br>"
          + "ana.rosales.jenkins@una.cr<br>"
          + "2562-6273<br>"
        },
        {
          "yaw": 0.361358,
          "pitch": -0.141507,
          "title": "Sala de lactancia"
        }
      ]
    },
    // ==== A9 ====
    {
      "id": "8-a9",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -3.0759372616661125,
        "pitch": 0.02180603605933129,
        "fov": 1.3483902604801417
      },
      "linkHotspots": [
        {
          "yaw": -3.054129,
          "pitch": 0.508083,
          "rotation": 0,
          "target": "9-a10"
        },
        {
          "yaw": 1.208944,
          "pitch": 0.397427,
          "rotation": 0,
          "target": "33-g1",
          "view": {
            "yaw": -0.275114,
            "pitch": 0.037819,
            "fov": 1.299127
          }
        }
      ],
      "infoHotspots": []
    },
    // ==== A10 ====
    {
      "id": "9-a10",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.08377580409572971,
        "pitch": -0.021262395271122614,
        "fov": 1.3483902604801417
      },
      "linkHotspots": [
        {
          "yaw": 0.10008,
          "pitch": 0.461091,
          "rotation": 0,
          "target": "10-a11"
        },
        {
          "yaw": -3.054867,
          "pitch": 0.441737,
          "rotation": 0,
          "target": "8-a9",
          "view": {
            "yaw": 0.977745,
            "pitch": -0.012127,
            "fov": 1.299127
          }
        }
      ],
      "infoHotspots": []
    },
    // ==== A11 ====
    {
      "id": "10-a11",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.13803967720318688,
        "pitch": -0.00797339822667098,
        "fov": 1.3483902604801417
      },
      "linkHotspots": [
        {
          "yaw": -0.131398,
          "pitch": 0.485313,
          "rotation": 0,
          "target": "11-a12"
        },
        {
          "yaw": 3.012424,
          "pitch": 0.456397,
          "rotation": 0,
          "target": "9-a10",
          "view": {
            "yaw": -3.077268,
            "pitch": -0.028415,
            "fov": 1.34839
          }
        }
      ],
      "infoHotspots": []
    },
    // ==== A12 ====
    {
      "id": "11-a12",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.890723422049369,
        "pitch": -0.11059714492127348,
        "fov": 1.3483902604801417
      },
      "linkHotspots": [
        {
          "yaw": 2.875192,
          "pitch": 0.43702,
          "rotation": 0,
          "target": "12-a13"
        },
        {
          "yaw": -0.278648,
          "pitch": 0.39404,
          "rotation": 0,
          "target": "10-a11",
          "view": {
            "yaw": 3.024257,
            "pitch": -0.028554,
            "fov": 1.34839
          }
        }
      ],
      "infoHotspots": []
    },
    // ==== A13 ====
    {
      "id": "12-a13",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.03639,
        "pitch": 0.260323,
        "fov": 1.299127

      },
      "linkHotspots": [
        {
          "yaw": 3.104048,
          "pitch": 0.519207,
          "rotation": 0,
          "target": "11-a12",
          "view": {
            "yaw": -0.352672,
            "pitch": -0.089381,
            "fov": 1.299127
          }
        },
        {
          "yaw": -0.025352,
          "pitch": 0.82261,
          "rotation": 0,
          "target": "26-d1"
        }
      ],
      "infoHotspots": []
    },
    //  =================================================== SECCIÓN E ===================================================
    // ==== E1 ====
    {
      "id": "13-e1",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 3.0715210046563133,
        "pitch": 0.13125727260258202,
        "fov": 1.3483902604801417
      },
      "linkHotspots": [
        {
          "yaw": -0.069595,
          "pitch": 0.495523,
          "rotation": 0,
          "target": "3-a4"
        },
        {
          "yaw": 3.022695,
          "pitch": 0.543099,
          "rotation": 0,
          "target": "14-e2"
        }
      ],
      "infoHotspots": []
    },
    // ==== E2 ====
    {
      "id": "14-e2",
      "name": "Comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.119413,
          "pitch": 0.548811,
          "rotation": 0,
          "target": "13-e1",
          "view": {
            "yaw": -0.103397,
            "pitch": 0.049848,
            "fov": 1.745329
          }          
        },
        {
          "yaw": -0.015214,
          "pitch": 0.460218,
          "rotation": 0,
          "target": "15-e3",
          "view": {
            "yaw": -0.932022,
            "pitch": 0.080997,
            "fov": 1.299127
          }
        }
      ],
      "infoHotspots": []
    },
    // ==== E3 ====
    {
      "id": "15-e3",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.932022,
        "pitch": 0.080997,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
          "yaw": -0.110056,
          "pitch": 0.367327,
          "rotation": 0.30,
          "target": "14-e2",
          "view": {
            "yaw": -3.134721,
            "pitch": 0.072582,
            "fov": 1.299127
          }
        },
        {
          "yaw": -1.705945,
          "pitch": 0.440778,
          "rotation": -0.25,
          "target": "16-e4",
          "view": {
            "yaw": -3.130831,
            "pitch": -0.01229,
            "fov": 1.299127
          }
        }
      ],
      "infoHotspots": []
    },
    // ==== E4 ====
    {
      "id": "16-e4",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.089277,
          "pitch": 0.469767,
          "rotation": 0,
          "target": "36-g4"
        }, 
        {
          "yaw": 0.031709,
          "pitch": 0.578079,
          "rotation": 0,
          "target": "15-e3",
          "view": {
            "yaw": -0.932022,
            "pitch": 0.080997,
            "fov": 1.299127
          }
        }
      ],
      "infoHotspots": []
    },
    //  =================================================== SECCIÓN B ===================================================
    // ==== B1 ====
    {
      "id": "37-b1",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.518088,
        "pitch": -0.025129,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
          "yaw": 0.532954,
          "pitch": 0.378839,
          "rotation": 0,
          "target": "3-a4"
        },
        {
          "yaw": -2.605657,
          "pitch": 0.396464,
          "rotation": 0,
          "target": "38-bb1"
        }
      ],
      "infoHotspots": []
    },
    // ==== B1.2 ====
    {
      "id": "38-bb1",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.830666,
        "pitch": 0.054954,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
          "yaw": 1.356553,
          "pitch": 0.454394,
          "rotation": 0,
          "target": "37-b1",
          "view": {
            "yaw": 0.570668,
            "pitch": -0.057278,
            "fov": 1.299127
          }
        },
        {
          "yaw": -1.755178,
          "pitch": 0.497605,
          "rotation": 0,
          "target": "39-bbb1"
        }
      ],
      "infoHotspots": []
    },
    // ==== B1.3 ====
    {
      "id": "39-bbb1",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.835711,
        "pitch": 0.166946,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
          "yaw": 1.299905,
          "pitch": 0.548925,
          "rotation": 0,
          "target": "38-bb1",
          "view": {
            "yaw": 1.405374,
            "pitch": 0.005648,
            "fov": 1.299127
          }
        },
        {
          "yaw": -1.763049,
          "pitch": 0.615734,
          "rotation": 0,
          "target": "18-b2"
        }
      ],
      "infoHotspots": [
        
      ]
    },
    // ==== B2 ====
    {
      "id": "18-b2",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.77406,
        "pitch": 0.060514,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
          "yaw": 3.057404,
          "pitch": 0.4898,
          "rotation": 0,
          "target": "39-bbb1",
          "view": {
            "yaw": 1.540644,
            "pitch": 0.160359,
            "fov": 1.299127
          }
        },
        {
          "yaw": -1.1642,
          "pitch": 0.526102,
          "rotation": 0,
          "target": "23-c1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.03383,
          "pitch": -0.113366,
          "title": "Asociación de Estudiantes ASEUNAL",
          "text":"<b>Contacto</b>:<br>"
          + "aseunal@una.cr<br>"
        }
      ]
    },
    // ==== B3 ====
    {
      "id": "19-b3",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.6468679124530432,
        "pitch": 0.1102989034999986,
        "fov": 1.3483902604801417
      },
      "linkHotspots": [
        {
          "yaw": 2.430576,
          "pitch": 0.588568,
          "rotation": 0,
          "target": "23-c1"
        },
        {
          "yaw": -1.679214,
          "pitch": 0.562151,
          "rotation": 0,
          "target": "20-b4"
        }
      ],
      "infoHotspots": []
    },
    // ==== B4 ====
    {
      "id": "20-b4",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.015231964381047902,
        "pitch": -0.030564693202238757,
        "fov": 1.3483902604801417
      },
      "linkHotspots": [
        {
          "yaw": -0.145687,
          "pitch": 0.428498,
          "rotation": 0,
          "target": "21-b5"
        },
        {
          "yaw": -3.115223,
          "pitch": 0.476478,
          "rotation": 0,
          "target": "19-b3",
          "view": {
            "yaw": 2.229558,
            "pitch": 0.127607,
            "fov": 1.299127
          }
        }
      ],
      "infoHotspots": []
    },
    // ==== B5 ====
    {
      "id": "21-b5",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.8742838576324026,
        "pitch": -0.005754715212651362,
        "fov": 1.3483902604801417
      },
      "linkHotspots": [
        {
          "yaw": -2.891577,
          "pitch": 0.445168,
          "rotation": 0,
          "target": "22-b6"
        },
        {
          "yaw": 0.262604,
          "pitch": 0.370137,
          "rotation": 0,
          "target": "20-b4",
          "view": {
            "yaw": 3.079428,
            "pitch": -0.013144,
            "fov": 1.34839
          }
        }
      ],
      "infoHotspots": []
    },
    // ==== B6 ====
    {
      "id": "22-b6",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.087381,
        "pitch": -0.037749,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
          "yaw": 2.99715,
          "pitch": 0.442246,
          "rotation": 0,
          "target": "21-b5",
          "view": {
            "yaw": 0.261316,
            "pitch": -0.080844,
            "fov": 1.34839
          }
        },
         {
          "yaw": -0.095035,
          "pitch": 0.468314,
          "rotation": 0,
          "target": "40-bp"
        }
      ],
      "infoHotspots": []
    },
    //  =================================================== BIBLIOTECA ===================================================
    // ==== BIBLIOTECA PRINCIPAL ====
    {
      "id": "40-bp",
      "name": "Biblioteca",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.479217,
        "pitch": 0.012689,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
          "yaw": 1.75124,
          "pitch": 0.465383,
          "rotation": 0,
          "target": "41-sle1",
          "view": {
            "yaw": 0.261316,
            "pitch": -0.080844,
            "fov": 1.34839
          },
          "name": "Sala de estudio"
        },
        {
          "yaw": 1.449746,
          "pitch": 0.492541,
          "rotation": 0,
          "target": "43-bext2",
          "name": "Patio biblioteca"
        },
        {
          "yaw": -0.663748,
          "pitch": 0.406905,
          "rotation": 0,
          "target": "42-bext1",
          "name": "Patio biblioteca"
        },
        {
          "yaw": -2.606107,
          "pitch": 0.552067,
          "rotation": 0,
          "target": "22-b6",
          "view": {
            "yaw": 3.002739,
            "pitch": -0.003887,
            "fov": 1.299127
          },
          "name": "Salir"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.438759,
          "pitch": -0.176344,
          "title": "Biblioteca Rose Marie Ruiz",
          "text": "Horario de atención: <br>"
          + "<b>De Lunes a Viernes</b><br>"
          + "<b>8:00 AM a 5:00 PM</b><br></br>"
          + "<b>Nombre del funcionario</b><br>"
          + "<b>Blanca Barahona Barahona</b><br><br>"
          + "<b>Contacto</b>:<br>"
          + "biliberia@una.cr<br>"
          + "2562-6263<br>"
          + "2562-6265<br>"
          + "2562-6266<br>"
          + "[Instagram](https://www.instagram.com/biblio_rose_marie_una?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==)"
        }
      ]
    },
    // ==== Sala de estudio 1 ====
    {
      "id": "41-sle1",
      "name": "Sala de Estudio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.479217,
        "pitch": 0.012689,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
          "yaw": -3.040688,
          "pitch": 0.678683,
          "rotation": 0,
          "target": "40-bp"
        }
      ],
      "infoHotspots": []
    },
    // ==== Patio Biblioteca 1 ====
    {
      "id": "42-bext1",
      "name": "Patio biblioteca",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 3.085328,
        "pitch": 0.154873,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
          "yaw": -3.040688,
          "pitch": 0.678683,
          "rotation": 0,
          "target": "43-bext2"
        },
        {
            "yaw": -1.17249,
            "pitch": 0.520001,
            "rotation": 0,
            "target": "40-bp"
        },
        {
            "yaw": -0.861295,
            "pitch": 0.515432,
            "rotation": 0,
            "target": "52-saladecanos",
            "name": "Sala de Ex-Decanos"
        }
      ],
      "infoHotspots": []
    },
    // ========== SALA EX-DECANOS ==========
    {
      "id": "52-saladecanos",
      "name": "Sala de Ex-Decanos",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.451779,
        "pitch": 0.033567,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
          "yaw": 1.541079,
          "pitch": 0.420449,
          "rotation": 0,
          "target": "42-bext1"
        }
      ],
      "infoHotspots": []
    },
     // ==== Patio Biblioteca 2 (Derecha)====
    {
      "id": "43-bext2",
      "name": "Patio biblioteca",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.929925,
        "pitch": 0.046752,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
          "yaw": 1.854742,
          "pitch": 0.495602,
          "rotation": 0,
          "target": "42-bext1"
        },
        {
          "yaw": -0.520925,
          "pitch": 0.405257,
          "rotation": 0,
          "target": "40-bp"
        },
        {
          "yaw": -0.799196,
          "pitch": 0.387302,
          "rotation": 0,
          "target": "53-libros1"
        }
      ],
      "infoHotspots": []
    },
    // ==== SECCIÓN DE LIBROS ====
    // ========== 1 ==========
    {
      "id": "53-libros1",
      "name": "Sección de libros",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 3.098547,
        "pitch": 0.222792,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
          "yaw": 3.014506,
          "pitch": 0.654539,
          "rotation": 0,
          "target": "54-libros2"
        },
        {
          "yaw": 1.024179,
          "pitch": 0.48966,
          "rotation": 0,
          "target": "43-bext2"
        }
      ],
      "infoHotspots": [

      ]
    },
    // ========== 2 ==========
    {
      "id": "54-libros2",
      "name": "Sección de libros",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.126987,
        "pitch": 0.018966,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
          "yaw": 3.053168,
          "pitch": 0.609732,
          "rotation": 0,
          "target": "53-libros1",
          "view": {"yaw": 1.130469,"pitch": 0.107647,"fov": 1.299127}
        },
        {
          "yaw": -0.111617,
          "pitch": 0.501323,
          "rotation": 0,
          "target": "55-libros3"
        }
      ],
      "infoHotspots": []
    },
    // ========== 3 ==========
    {
      "id": "55-libros3",
      "name": "Sección de libros",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.598414,
        "pitch": 0.055427,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
          "yaw": -0.582241,
          "pitch": 0.48044,
          "rotation": 0,
          "target": "54-libros2",
          "view": {"yaw": 3.043579,"pitch": 0.056997,"fov": 1.299127}
        }
      ],
      "infoHotspots": []
    },
    //  =================================================== SECCIÓN C ===================================================
    // ==== C1 ====
    {
      "id": "23-c1",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.3755806266773156,
        "pitch": 0.26747126778557906,
        "fov": 1.3483902604801417
      },
      "linkHotspots": [
        {
          "yaw": -2.415737,
          "pitch": 0.737319,
          "rotation": 0,
          "target": "24-c2"
        },
        {
          "yaw": 1.750789,
          "pitch": 0.523706,
          "rotation": 0,
          "target": "18-b2",
          "view": {
            "yaw": 3.086441,
            "pitch": 0.08401,
            "fov": 1.299127
          }
        },
        {
          "yaw": -0.211923,
          "pitch": 0.51293,
          "rotation": 0,
          "target": "19-b3"
        }
      ],
      "infoHotspots": []
    },
    // ==== C2 ====
    {
      "id": "24-c2",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.9076223210821883,
        "pitch": 0.05387549821735682,
        "fov": 1.3483902604801417
      },
      "linkHotspots": [
        {
          "yaw": -2.964066,
          "pitch": 0.568936,
          "rotation": 0,
          "target": "25-c3"
        },
        {
          "yaw": 0.213607,
          "pitch": 0.414552,
          "rotation": 0,
          "target": "23-c1",
          "view": {
            "yaw": 0.772145,
            "pitch": 0.385864,
            "fov": 1.299127
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-c3",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.241438,
        "pitch": 0.182973,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
          "yaw": -1.795105,
          "pitch": 0.530549,
          "rotation": 0,
          "target": "24-c2",
          "view": {
            "yaw": 0.155189,
            "pitch": -0.041003,
            "fov": 1.299127
          }
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.292195,
          "pitch": -0.243187,
          "title": "Sala de profesores"
        }
      ]
    },
    //  D  _____________________________________________________________________________________________________
    {
      "id": "26-d1",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.650134,
          "pitch": 0.579138,
          "rotation": 0,
          "target": "27-d2",
          "view": {
            "yaw": 1.560687,
            "pitch": 0.026391,
            "fov": 1.299127
          }
        },
        {
          "yaw": -2.773639,
          "pitch": 0.557033,
          "rotation": 0,
          "target": "12-a13",
          "view": {
            "yaw": 3.113824,
            "pitch": -0.013053,
            "fov": 1.299127
          } 

        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.587247,
          "pitch": -0.192523,
          "title": "Residencias Estudiantiles"
        },
        {
          "yaw": -0.181891,
          "pitch": -0.072495,
          "title": "Coordinación Residencias Estudiantiles",
          "text": "Funcionario/a:<br>"
          + "<b>Daniela Castro Villalobos<br><br>"
          + "<b>De Lunes a Viernes</b><br>"
          + "<b>8:00 AM a 5:00 PM</b><br></br>"
          + "<b>Contacto</b>:<br>"
          + "daniela.castro.villalobos@una.cr<br>"
          + "562-6298<br>"
        },
        {
          "yaw": 1.62408,
          "pitch": -0.029698,
          "title": "Gimnasio"
        },
        {
          "yaw": -1.580091,
          "pitch": 0.118107,
          "title": "Punto de encuentro/Zona segura"
        }
      ]
    },
    {
      "id": "27-d2",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5154475924719826,
          "pitch": 0.34084171526238194,
          "rotation": 0.7853981633974483,
          "target": "28-d3"
        },
        {
          "yaw": -1.099108,
          "pitch": 0.483104,
          "rotation": 0,
          "target": "26-d1",
          "view": {
            "yaw": -2.982232,
            "pitch": 0.165238,
            "fov": 1.570796
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-d3",
      "name": "Gimnasio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.012181,
          "pitch": 0.515964,
          "rotation": 0,
          "target": "27-d2",
          "view": {
            "yaw": -0.907545,
            "pitch": -0.029705,
            "fov": 1.299127
          }
        }
      ],
      "infoHotspots": []
    },
    //  F  _____________________________________________________________________________________________________________
    {
      "id": "29-f3",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.689371,
        "pitch": 0.137444,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
      "yaw": 1.317593,
      "pitch": 0.541237,
      "rotation": 0,
      "target": "32-f4"
        },
        {
      "yaw": -0.182621,
      "pitch": 0.661896,
      "rotation": 0,
      "target": "30-f2",
          "view": {
            "yaw": 2.196638,
            "pitch": 0.165053,
            "fov": 1.299127
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-f2",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.057003,
        "pitch": 0.072583,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
      "yaw": -1.004716,
      "pitch": 0.487591,
      "rotation": 0,
      "target": "29-f3"
        },
        {
      "yaw": 2.037037,
      "pitch": 0.535043,
      "rotation": 0,
      "target": "31-f1",
          "view": {
            "yaw": 2.983175,
            "pitch": 0.054575,
            "fov": 1.299127
          }
}
      ],
      "infoHotspots": []
    },
    {
      "id": "31-f1",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
      "yaw": 3.095878,
      "pitch": 0.464391,
      "rotation": 0,
      "target": "0-a1"
        },
        {
        "yaw": -0.045045,
        "pitch": 0.475841,
        "rotation": 0,
        "target": "30-f2"
}
      ],
      "infoHotspots": []
    },
    {
      "id": "32-f4",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.093589,
        "pitch": 0.25808,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
      "yaw": -1.64545,
      "pitch": 0.576425,
      "rotation": 0,
      "target": "29-f3",
          "view": {
            "yaw": 0.034761,
            "pitch": 0.175281,
            "fov": 1.299127
          }
        }
      ],
      "infoHotspots": []
    },
    //  =================================== SECCIÓN G ===================================
    {
      "id": "33-g1",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.944244,
        "pitch": 0.194133,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
          "yaw": -1.865056,
          "pitch": 0.510209,
          "rotation": -0.55,
          "target": "7-a8",
          "view": {
            "yaw": 2.454006,
            "pitch": 0.058439,
            "fov": 1.299127}
        },
        {
          "yaw": -0.182119,
          "pitch": 0.551085,
          "rotation": 0,
          "target": "34-g2"
        },
        {
          "yaw": 1.605085,
          "pitch": 0.584215,
          "rotation": 0.30,
          "target": "8-a9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-g2",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.9754959214377905,
        "pitch": 0.10679753598471109,
        "fov": 1.3483902604801417
      },
      "linkHotspots": [
        {
          "yaw": -1.9690727230510774,
          "pitch": 0.23519872505256245,
          "rotation": 0,
          "target": "35-g3"
        },
        {
          "yaw": 1.042479,
          "pitch": 0.443147,
          "rotation": 0,
          "target": "33-g1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-g3",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.510431,
        "pitch": 0.035615,
        "fov": 1.063074
      },
      "linkHotspots": [
        {
          "yaw": 0.317897,
          "pitch": 0.285008,
          "rotation": 0,
          "target": "36-g4"
        },
        {
          "yaw": -1.303474,
          "pitch": 0.283462,
          "rotation": 0,
          "target": "34-g2",
          "view": {
            "yaw": 1.14588,
            "pitch": 0.022263,
            "fov": 1.299127
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-g4",
      "name": "",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.013583,
        "pitch": 0.143801,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
          "yaw": 2.168985,
          "pitch": 0.396179,
          "rotation": 0,
          "target": "16-e4",
          "name": "Soda"
        },
        {
          "yaw": 0.071737,
          "pitch": 0.322952,
          "rotation": -0.10,
          "target": "35-g3",
          "name": ""
        },
        {
          "yaw": 1.323503,
          "pitch": 0.410157,
          "rotation": 0,
          "target": "48-labizquierda",
          "name": "Laboratorio de Biología y Microbiología"
        },
        {
          "yaw": 1.772689,
          "pitch": 0.440697,
          "rotation": 0,
          "target": "49-labderecha1",
          "name": "Laboratorio de Química"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.299063,
          "pitch": -0.132013,
          "title": "Laboratorio de Biología y Microbiología"
        },
        {
          "yaw": 2.072046,
          "pitch": -0.112665,
          "title": "Laboratorio de Química"
        }
      ]
    },
    // =================== LABORATORIOS ===================
    {
      "id": "48-labizquierda",
      "name": "Laboratorio de Biología y Microbiología",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.329096,
        "pitch": 0.148139,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
          "yaw": 1.754357,
          "pitch": 0.566329,
          "rotation": 0.30,
          "target": "36-g4",
          "name": "Salir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "49-labderecha1",
      "name": "Laboratorio de Química",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.8637,
        "pitch": 0.329017,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
          "yaw": -2.588633,
          "pitch": 0.64756,
          "rotation": 0.99,
          "target": "50-labderecha2"
        },
        {
          "yaw": 0.177968,
          "pitch": 0.701005,
          "rotation": -0.10,
          "target": "36-g4",
          "name": "Salir"
        },
        {
          "yaw": 2.136001,
          "pitch": 0.652928,
          "rotation": -0.30,
          "target": "51-labderecha3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "50-labderecha2",
      "name": "Laboratorio de Química",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.442624,
        "pitch": 0.169879,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
          "yaw": 2.158491,
          "pitch": 0.725312,
          "rotation": 0,
          "target": "49-labderecha1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "51-labderecha3",
      "name": "Laboratorio de Química",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.860541,
        "pitch": 0.360338,
        "fov": 1.299127
      },
      "linkHotspots": [
        {
          "yaw": -1.059901,
          "pitch": 0.643585,
          "rotation": 0.10,
          "target": "49-labderecha1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "VIRTUAL-TOUR-UNA",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
