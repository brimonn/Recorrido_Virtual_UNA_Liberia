var APP_DATA = {
  "scenes": [
    {
      "id": "0-a1",
      "name": "A1",
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
        "yaw": 0.03236792430970148,
        "pitch": -0.03455139231557425,
        "fov": 1.3483902604801417
      },
      "linkHotspots": [
        { //Direccion pasillo principal
          "yaw": -0.384909,
          "pitch": 0.418138,
          "rotation": 0.30,
          "target": "1-a2"
        },
        {//Direccion parqueo
        "yaw": 1.511917,
        "pitch": 0.720021,
        "rotation": 0,
        "target": "31-f1"
        }
      ],
      "infoHotspots": [
       
      ]
    },
    {
      "id": "1-a2",
      "name": "A2",
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
        "yaw": -0.24180743454903642,
        "pitch": -0.10099637753783419,
        "fov": 1.3483902604801417
      },
      "linkHotspots": [
        {
          "yaw": -0.222731,
          "pitch": 0.390163,
          "rotation": 0,
          "target": "2-a3"
        },
        {
          "yaw": 2.922585,
          "pitch": 0.363114,
          "rotation": 0,
          "target": "0-a1",
          "view": {"yaw": 1.567694, "pitch": 0.256466, "fov": 1.299127}
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-a3",
      "name": "A3",
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
        "yaw": -0.12851969946505193,
        "pitch": -0.06511608551781123,
        "fov": 1.3483902604801417
      },
      "linkHotspots": [
        {
          "yaw": -0.162367,
          "pitch": 0.503316,
          "rotation": 0,
          "target": "3-a4"
        },
        {
          "yaw": 2.911528,
          "pitch": 0.416377,
          "rotation": 0,
          "target": "1-a2",
          "view": { "yaw": 3.02039, "pitch": -0.210118, "fov": 1.299127 }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-a4",
      "name": "A4",
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
        "yaw": -0.07044783526232834,
        "pitch": -0.1435410988518946,
        "fov": 1.3483902604801417
      },
      "linkHotspots": [
        {
          "yaw": 1.450429,
          "pitch": 0.485285,
          "rotation": 0,
          "target": "17-b1"
        },
        {
          "yaw": -1.612698,
          "pitch": 0.552327,
          "rotation": 0,
          "target": "13-e1"
        },
        {
          "yaw": 3.053787,
          "pitch": 0.52633,
          "rotation": 0,
          "target": "2-a3",
          "view": {"yaw": 3.012893,"pitch": -0.112575,"fov": 1.299127} 
        },
        {
          "yaw": -0.081696,
          "pitch": 0.353864,
          "rotation": 0,
          "target": "4-a5"
        }
      ],
      "infoHotspots": [
        
      ]
    },
    {
      "id": "4-a5",
      "name": "A5",
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
          "view": {"yaw": 3.060289,"pitch": 0.045925,"fov": 1.299127}
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-a6",
      "name": "A6",
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
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-a7",
      "name": "A7",
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
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-a8",
      "name": "A8",
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
      "infoHotspots": []
    },
    {
      "id": "8-a9",
      "name": "A9",
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
    {
      "id": "9-a10",
      "name": "A10",
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
    {
      "id": "10-a11",
      "name": "A11",
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
    {
      "id": "11-a12",
      "name": "A12",
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
    {
      "id": "12-a13",
      "name": "A13",
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
    {
      "id": "13-e1",
      "name": "E1",
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
          "yaw": -0.07774174958155378,
          "pitch": 0.1515626037143729,
          "rotation": 0,
          "target": "3-a4"
        },
        {
          "yaw": 3.0554664419856508,
          "pitch": 0.21292764090229177,
          "rotation": 0,
          "target": "14-e2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-e2",
      "name": "E2",
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
          "yaw": 3.112161839585676,
          "pitch": 0.16796064230942065,
          "rotation": 0,
          "target": "13-e1"
        },
        {
          "yaw": -0.023614488324327,
          "pitch": 0.16073889947268327,
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
    {
      "id": "15-e3",
      "name": "E3",
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
    {
      "id": "16-e4",
      "name": "E4",
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
    {
      "id": "17-b1",
      "name": "B1",
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
        "yaw": 3.0130666798401773,
        "pitch": 0.0364205451698858,
        "fov": 1.3483902604801417
      },
      "linkHotspots": [
        {
          "yaw": -0.130941,
          "pitch": 0.337414,
          "rotation": 0,
          "target": "3-a4"
        },
        {
          "yaw": 2.988473,
          "pitch": 0.528594,
          "rotation": 0,
          "target": "18-b2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-b2",
      "name": "B2",
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
          "yaw": 3.056064,
          "pitch": 0.496186,
          "rotation": 0,
          "target": "17-b1",
          "view": {
            "yaw": -0.275193,
            "pitch": -0.127438,
            "fov": 1.34839
          }
        },
        {
          "yaw": -1.1642,
          "pitch": 0.526102,
          "rotation": 0,
          "target": "23-c1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-b3",
      "name": "B3",
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
    {
      "id": "20-b4",
      "name": "B4",
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
    {
      "id": "21-b5",
      "name": "B5",
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
    {
      "id": "22-b6",
      "name": "B6",
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
        "yaw": -0.170175229004478,
        "pitch": -0.1808912058233041,
        "fov": 1.3483902604801417
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
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-c1",
      "name": "C1",
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
    {
      "id": "24-c2",
      "name": "C2",
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
      "name": "C3",
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
      "infoHotspots": []
    },
    {
      "id": "26-d1",
      "name": "D1",
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
      "infoHotspots": []
    },
    {
      "id": "27-d2",
      "name": "D2",
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
      "name": "D3",
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
    {
      "id": "29-f3",
      "name": "F3",
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
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "30-f2",
      "name": "F2",
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
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "31-f1",
      "name": "F1",
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
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "32-f4",
      "name": "F4",
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
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "33-g1",
      "name": "G1",
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
      "name": "G2",
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
      "name": "G3",
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
      "name": "G4",
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
          "yaw": 1.76583,
          "pitch": 0.440324,
          "rotation": 0,
          "target": "16-e4"
        },
        {
          "yaw": 0.071737,
          "pitch": 0.322952,
          "rotation": -0.10,
          "target": "35-g3"
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
