var APP_DATA = {
  "scenes": [
    {
      "id": "0-drawing-room",
      "name": "Drawing room",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.2047287930826407,
        "pitch": 0.015213449929515122,
        "fov": 0.7702557331897656
      },
      "linkHotspots": [
        {
          "yaw": 0.04376097629699238,
          "pitch": 0.03211272907538287,
          "rotation": 0,
          "target": "0-drawing-room"
        },
        {
          "yaw": 1.6759511500420672,
          "pitch": -0.004574769539161139,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": -1.7562496573586532,
          "pitch": 0.009659355677891668,
          "rotation": 0,
          "target": "2-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "kitchen",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9496994032331614,
          "pitch": 0,
          "rotation": 0,
          "target": "0-drawing-room"
        },
        {
          "yaw": 2.607505224800504,
          "pitch": 0.01988543557476241,
          "rotation": 0,
          "target": "2-living-room"
        },
        {
          "yaw": -0.15531442850006805,
          "pitch": 0.051219511517476946,
          "rotation": 0,
          "target": "1-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-room",
      "name": "living room",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6611860890292114,
          "pitch": 0.014311691554675932,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": 2.3865732706657656,
          "pitch": 0.03073791604047038,
          "rotation": 0,
          "target": "0-drawing-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
