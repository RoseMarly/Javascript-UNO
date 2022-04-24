import { Mongo } from 'meteor/mongo';

export const CardsCollection = new Mongo.Collection('cards');

let data = {
    "deck": [
      "R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "RS", "RB", "R+2",
      "B0", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "BS", "BB", "B+2",
      "V0", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "VS", "VB", "V+2",
      "J0", "J1", "J2", "J3", "J4", "J5", "J6", "J7", "J8", "J9", "JS", "JB", "J+2",
      "NC", "NC", "N+4", "N+4",
      "R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "RS", "RB", "R+2",
      "B0", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "BS", "BB", "B+2",
      "V0", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "VS", "VB", "V+2",
      "J0", "J1", "J2", "J3", "J4", "J5", "J6", "J7", "J8", "J9", "JS", "JB", "J+2",
      "NC", "NC", "N+4", "N+4"
      ],
    "discard": [],
    "players": [
      {
        "id": "uihdoi87g1b3u2i",
        "hand": [],
        "isTurn": false,
      },
      {
        "id": "oh312983h9813h2",
        "hand": [],
        "isTurn": false,
      },
      {
        "id": "983h1293h12983h",
        "hand": [],
        "isTurn": false,
      },
      {
        "id": "eh129e8h12ehkeq",
        "hand": [],
        "isTurn": false,
      },
    ]
  }