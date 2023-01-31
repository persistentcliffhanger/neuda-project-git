import axios from "axios";

export const getAllClaims = () => {
  return [
    {
      policy_number: 32957,
      customer_name: "Rhys Jermin",
      claim_type: "motor",
      claim_date: "21/05/2022",
      est_claim_amt: "$314.09",
      address: "3191 Del Mar Park",
      vehicle_make: "Mitsubishi",
      vehicle_model: "Precis",
      vehicle_year: 1992,
      pet_type: "Suricate",
      pet_breed: "Waxbill, blue",
      claim_description: "bent shapeless",
      claim_reason: "I didn’t think the speed limit applied after midnight.",
      claim_status: "Paid",
      image_1: "https://i.imgur.com/1ZQ3Z0C.jpg",
    },
    {
      policy_number: 233157,
      customer_name: "Anson Elves",
      claim_type: "pet",
      claim_date: "29/10/2022",
      est_claim_amt: "$54.35",
      address: "7445 Petterle Park",
      vehicle_make: "Mazda",
      vehicle_model: "Miata MX-5",
      vehicle_year: 1993,
      pet_type: "Woylie",
      pet_breed: "Agama lizard (unidentified)",
      claim_description: "shes wrecked",
      claim_reason:
        "I pulled away from the side of the road glanced at my mother in-law and headed over the embankment  Probably not the best route for family bonding",
      claim_status: "Quoted",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 47048,
      customer_name: "Ellene O'Lehane",
      claim_type: "motor",
      claim_date: "23/06/2022",
      est_claim_amt: "$103.59",
      address: "386 Browning Drive",
      vehicle_make: "Pontiac",
      vehicle_model: "Firebird",
      vehicle_year: 1989,
      pet_type: "Waxbill, black-cheeked",
      pet_breed: "Hornbill, red-billed",
      claim_description: "shes wrecked",
      claim_reason:
        "My car was legally parked as it backed into another vehicle",
      claim_status: "Quoted",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 39426,
      customer_name: "Wallace Rawsthorne",
      claim_type: "pet",
      claim_date: "13/06/2022",
      est_claim_amt: "$357.51",
      address: "297 Manley Court",
      vehicle_make: "Ford",
      vehicle_model: "F350",
      vehicle_year: 2006,
      pet_type: "Savanna baboon",
      pet_breed: "American Virginia opossum",
      claim_description: "shes wrecked",
      claim_reason:
        "My car was legally parked as it backed into another vehicle",
      claim_status: "Quoted",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 418779,
      customer_name: "Anthea Mieville",
      claim_type: "property",
      claim_date: "20/06/2022",
      est_claim_amt: "$172.15",
      address: "60 Stephen Avenue",
      vehicle_make: "Buick",
      vehicle_model: "Skylark",
      vehicle_year: 1986,
      pet_type: "Bushpig",
      pet_breed: "Bear, grizzly",
      claim_description: "shes wrecked",
      claim_reason:
        "To avoid hitting the bumper of the car in front I struck a pedestrian",
      claim_status: "Quoted",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 665584,
      customer_name: "Chris Conibear",
      claim_type: "property",
      claim_date: "28/06/2022",
      est_claim_amt: "$416.39",
      address: "71 Melody Junction",
      vehicle_make: "Lexus",
      vehicle_model: "ES",
      vehicle_year: 1991,
      pet_type: "Nelson ground squirrel",
      pet_breed: "Frog (unidentified)",
      claim_description: "shes wrecked",
      claim_reason:
        "To avoid hitting the bumper of the car in front I struck a pedestrian",
      claim_status: "Paid",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 323654,
      customer_name: "Clement Bartlosz",
      claim_type: "property",
      claim_date: "28/11/2022",
      est_claim_amt: "$76.21",
      address: "615 Loftsgordon Crossing",
      vehicle_make: "Mitsubishi",
      vehicle_model: "Chariot",
      vehicle_year: 1985,
      pet_type: "Sheep, stone",
      pet_breed: "Crane, wattled",
      claim_description: "theres not two bits of it hanging the same way",
      claim_reason:
        "To avoid hitting the bumper of the car in front I struck a pedestrian",
      claim_status: "Pending",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 263037,
      customer_name: "Vasili Whiting",
      claim_type: "pet",
      claim_date: "09/03/2022",
      est_claim_amt: "$400.59",
      address: "8168 Artisan Avenue",
      vehicle_make: "BMW",
      vehicle_model: "3 Series",
      vehicle_year: 1999,
      pet_type: "Elegant crested tinamou",
      pet_breed: "American alligator",
      claim_description: "theres not two bits of it hanging the same way",
      claim_reason:
        "I thought my window was down but I found it was up when I put my head through it",
      claim_status: "Pending",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 869117,
      customer_name: "Mildrid Flounders",
      claim_type: "pet",
      claim_date: "11/09/2022",
      est_claim_amt: "$383.86",
      address: "48096 Grayhawk Drive",
      vehicle_make: "Dodge",
      vehicle_model: "Grand Caravan",
      vehicle_year: 2003,
      pet_type: "Sea birds (unidentified)",
      pet_breed: "Duiker, common",
      claim_description: "bent shapeless",
      claim_reason: "I didn’t think the speed limit applied after midnight.",
      claim_status: "Paid",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 353115,
      customer_name: "Levi Merryman",
      claim_type: "motor",
      claim_date: "21/12/2021",
      est_claim_amt: "$29.04",
      address: "68589 2nd Point",
      vehicle_make: "Lamborghini",
      vehicle_model: "Countach",
      vehicle_year: 1988,
      pet_type: "Cobra, cape",
      pet_breed: "Phalarope, red-necked",
      claim_description: "bent shapeless",
      claim_reason:
        "I told the police that I was not injured but on removing my hat I found that I had a fractured skull",
      claim_status: "Quoted",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 343202,
      customer_name: "Sibeal Jordeson",
      claim_type: "property",
      claim_date: "27/04/2022",
      est_claim_amt: "$451.30",
      address: "887 Doe Crossing Parkway",
      vehicle_make: "Pontiac",
      vehicle_model: "LeMans",
      vehicle_year: 1993,
      pet_type: "Falcon, peregrine",
      pet_breed: "Eagle, pallas's fish",
      claim_description: "broken",
      claim_reason:
        "I thought my window was down but I found it was up when I put my head through it",
      claim_status: "Paid",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 623874,
      customer_name: "Buddie Rubinshtein",
      claim_type: "property",
      claim_date: "15/05/2022",
      est_claim_amt: "$365.06",
      address: "2684 Buhler Alley",
      vehicle_make: "Chrysler",
      vehicle_model: "Town & Country",
      vehicle_year: 2008,
      pet_type: "Bontebok",
      pet_breed: "Red-headed woodpecker",
      claim_description: "theres not two bits of it hanging the same way",
      claim_reason:
        "I thought my window was down but I found it was up when I put my head through it",
      claim_status: "Pending",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 226948,
      customer_name: "Rochelle Matchitt",
      claim_type: "motor",
      claim_date: "18/09/2022",
      est_claim_amt: "$60.09",
      address: "7 Gerald Avenue",
      vehicle_make: "Mercury",
      vehicle_model: "Grand Marquis",
      vehicle_year: 2010,
      pet_type: "Fairy penguin",
      pet_breed: "Siskin, pine",
      claim_description: "broken",
      claim_reason:
        "The other car collided with mine without giving me warning of its intention",
      claim_status: "Quoted",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 476641,
      customer_name: "Andra Newcomen",
      claim_type: "motor",
      claim_date: "21/07/2022",
      est_claim_amt: "$343.46",
      address: "5758 Waubesa Lane",
      vehicle_make: "Ford",
      vehicle_model: "Focus",
      vehicle_year: 2003,
      pet_type: "Bengal vulture",
      pet_breed: "Tinamou, elegant crested",
      claim_description:
        "I started to slow down but the traffic was more stationary than I thought",
      claim_reason:
        "I told the police that I was not injured but on removing my hat I found that I had a fractured skull",
      claim_status: "Paid",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 209177,
      customer_name: "Gerard Doby",
      claim_type: "motor",
      claim_date: "07/05/2022",
      est_claim_amt: "$74.98",
      address: "8137 Grover Circle",
      vehicle_make: "Honda",
      vehicle_model: "Accord",
      vehicle_year: 2005,
      pet_type: "White-necked raven",
      pet_breed: "Bohor reedbuck",
      claim_description:
        "I started to slow down but the traffic was more stationary than I thought",
      claim_reason:
        "To avoid hitting the bumper of the car in front I struck a pedestrian",
      claim_status: "Paid",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 127515,
      customer_name: "Lexy Donalson",
      claim_type: "property",
      claim_date: "19/11/2022",
      est_claim_amt: "$158.46",
      address: "15663 Towne Junction",
      vehicle_make: "Lincoln",
      vehicle_model: "Town Car",
      vehicle_year: 1993,
      pet_type: "Indian leopard",
      pet_breed: "Lapwing, southern",
      claim_description: "theres not two bits of it hanging the same way",
      claim_reason:
        "I thought my window was down but I found it was up when I put my head through it",
      claim_status: "Paid",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 496831,
      customer_name: "Dorie Demkowicz",
      claim_type: "pet",
      claim_date: "18/02/2022",
      est_claim_amt: "$112.01",
      address: "1 Lerdahl Way",
      vehicle_make: "Hyundai",
      vehicle_model: "Tiburon",
      vehicle_year: 2006,
      pet_type: "Kiskadee, great",
      pet_breed: "Toucan, white-throated",
      claim_description: "theres not two bits of it hanging the same way",
      claim_reason:
        "I pulled away from the side of the road glanced at my mother in-law and headed over the embankment  Probably not the best route for family bonding",
      claim_status: "Paid",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 299634,
      customer_name: "Ethelda Ibbs",
      claim_type: "motor",
      claim_date: "23/03/2022",
      est_claim_amt: "$360.94",
      address: "18389 Manufacturers Drive",
      vehicle_make: "Chevrolet",
      vehicle_model: "Prizm",
      vehicle_year: 2001,
      pet_type: "Dromedary camel",
      pet_breed: "Capuchin, white-fronted",
      claim_description: "theres not two bits of it hanging the same way",
      claim_reason:
        "My car was legally parked as it backed into another vehicle",
      claim_status: "Paid",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 547548,
      customer_name: "Gaylor Guppy",
      claim_type: "motor",
      claim_date: "10/10/2022",
      est_claim_amt: "$443.33",
      address: "290 North Center",
      vehicle_make: "Suzuki",
      vehicle_model: "SJ",
      vehicle_year: 1991,
      pet_type: "Ocelot",
      pet_breed: "Chipmunk, least",
      claim_description: "theres not two bits of it hanging the same way",
      claim_reason:
        "I told the police that I was not injured but on removing my hat I found that I had a fractured skull",
      claim_status: "Pending",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 985931,
      customer_name: "Sampson Bennis",
      claim_type: "motor",
      claim_date: "29/08/2022",
      est_claim_amt: "$32.43",
      address: "6930 Dapin Terrace",
      vehicle_make: "Mercedes-Benz",
      vehicle_model: "G-Class",
      vehicle_year: 2008,
      pet_type: "Black bear",
      pet_breed: "Mexican wolf",
      claim_description:
        "I started to slow down but the traffic was more stationary than I thought",
      claim_reason:
        "The other car collided with mine without giving me warning of its intention",
      claim_status: "Pending",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 111417,
      customer_name: "Zandra Redgewell",
      claim_type: "motor",
      claim_date: "25/11/2022",
      est_claim_amt: "$460.21",
      address: "7 Quincy Road",
      vehicle_make: "Ford",
      vehicle_model: "Explorer",
      vehicle_year: 2005,
      pet_type: "Macaw, green-winged",
      pet_breed: "Magpie, australian",
      claim_description:
        "I started to slow down but the traffic was more stationary than I thought",
      claim_reason:
        "I pulled away from the side of the road glanced at my mother in-law and headed over the embankment  Probably not the best route for family bonding",
      claim_status: "Pending",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 971604,
      customer_name: "Wendie Coursor",
      claim_type: "motor",
      claim_date: "12/02/2022",
      est_claim_amt: "$228.90",
      address: "46 Judy Alley",
      vehicle_make: "Subaru",
      vehicle_model: "Forester",
      vehicle_year: 2012,
      pet_type: "Snowy owl",
      pet_breed: "Southern lapwing",
      claim_description:
        "I started to slow down but the traffic was more stationary than I thought",
      claim_reason:
        "I pulled away from the side of the road glanced at my mother in-law and headed over the embankment  Probably not the best route for family bonding",
      claim_status: "Quoted",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 757223,
      customer_name: "Rutger Sparling",
      claim_type: "pet",
      claim_date: "14/04/2022",
      est_claim_amt: "$339.36",
      address: "0058 Pawling Junction",
      vehicle_make: "Chevrolet",
      vehicle_model: "Suburban 2500",
      vehicle_year: 2002,
      pet_type: "Kite, black",
      pet_breed: "Common shelduck",
      claim_description: "bent shapeless",
      claim_reason:
        "I thought my window was down but I found it was up when I put my head through it",
      claim_status: "Paid",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 175502,
      customer_name: "Joyce McCathy",
      claim_type: "property",
      claim_date: "23/12/2021",
      est_claim_amt: "$71.55",
      address: "40340 Pankratz Drive",
      vehicle_make: "Ford",
      vehicle_model: "Freestar",
      vehicle_year: 2003,
      pet_type: "Raven, cape",
      pet_breed: "Snake, tiger",
      claim_description: "bent shapeless",
      claim_reason:
        "I pulled away from the side of the road glanced at my mother in-law and headed over the embankment  Probably not the best route for family bonding",
      claim_status: "Pending",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 677402,
      customer_name: "Dom Burchett",
      claim_type: "property",
      claim_date: "10/10/2022",
      est_claim_amt: "$337.82",
      address: "8980 Stone Corner Point",
      vehicle_make: "Isuzu",
      vehicle_model: "Hombre Space",
      vehicle_year: 1997,
      pet_type: "Glider, sugar",
      pet_breed: "Golden brush-tailed possum",
      claim_description: "broken",
      claim_reason:
        "My car was legally parked as it backed into another vehicle",
      claim_status: "Paid",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 350927,
      customer_name: "Ronnie Izakoff",
      claim_type: "pet",
      claim_date: "11/06/2022",
      est_claim_amt: "$353.74",
      address: "674 Cascade Road",
      vehicle_make: "Maserati",
      vehicle_model: "GranTurismo",
      vehicle_year: 2008,
      pet_type: "Worm snake (unidentified)",
      pet_breed: "Rhea, common",
      claim_description: "theres not two bits of it hanging the same way",
      claim_reason:
        "I told the police that I was not injured but on removing my hat I found that I had a fractured skull",
      claim_status: "Quoted",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 204736,
      customer_name: "Stephani Dourin",
      claim_type: "motor",
      claim_date: "25/05/2022",
      est_claim_amt: "$367.63",
      address: "572 Maryland Way",
      vehicle_make: "Mercury",
      vehicle_model: "Villager",
      vehicle_year: 1996,
      pet_type: "Asian elephant",
      pet_breed: "Magpie, australian",
      claim_description: "bent shapeless",
      claim_reason:
        "I told the police that I was not injured but on removing my hat I found that I had a fractured skull",
      claim_status: "Quoted",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 458642,
      customer_name: "Olga Shrawley",
      claim_type: "property",
      claim_date: "24/02/2022",
      est_claim_amt: "$219.68",
      address: "34236 Jana Plaza",
      vehicle_make: "Aston Martin",
      vehicle_model: "V12 Vantage",
      vehicle_year: 2012,
      pet_type: "Blue peacock",
      pet_breed: "Currasow (unidentified)",
      claim_description: "theres not two bits of it hanging the same way",
      claim_reason:
        "The other car collided with mine without giving me warning of its intention",
      claim_status: "Quoted",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 43531,
      customer_name: "Artemis Dimond",
      claim_type: "pet",
      claim_date: "22/08/2022",
      est_claim_amt: "$127.17",
      address: "49166 Hovde Lane",
      vehicle_make: "Mitsubishi",
      vehicle_model: "Chariot",
      vehicle_year: 1996,
      pet_type: "Cockatoo, red-breasted",
      pet_breed: "Devil, tasmanian",
      claim_description: "shes wrecked",
      claim_reason:
        "I thought my window was down but I found it was up when I put my head through it",
      claim_status: "Paid",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 264490,
      customer_name: "Enrico Garken",
      claim_type: "motor",
      claim_date: "01/05/2022",
      est_claim_amt: "$109.26",
      address: "4 Bluestem Center",
      vehicle_make: "Nissan",
      vehicle_model: "Sentra",
      vehicle_year: 1994,
      pet_type: "Grey heron",
      pet_breed: "Salmon pink bird eater tarantula",
      claim_description: "broken",
      claim_reason: "I didn’t think the speed limit applied after midnight.",
      claim_status: "Quoted",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 463913,
      customer_name: "Shelley Seabright",
      claim_type: "motor",
      claim_date: "15/01/2022",
      est_claim_amt: "$244.28",
      address: "30 Spohn Trail",
      vehicle_make: "Mazda",
      vehicle_model: "MPV",
      vehicle_year: 2004,
      pet_type: "Gull, swallow-tail",
      pet_breed: "Wapiti, elk,",
      claim_description: "broken",
      claim_reason:
        "My car was legally parked as it backed into another vehicle",
      claim_status: "Pending",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 698001,
      customer_name: "Kev Brabin",
      claim_type: "pet",
      claim_date: "18/04/2022",
      est_claim_amt: "$39.55",
      address: "415 Loomis Parkway",
      vehicle_make: "Ford",
      vehicle_model: "Focus",
      vehicle_year: 2009,
      pet_type: "White-necked raven",
      pet_breed: "Silver-backed fox",
      claim_description: "shes wrecked",
      claim_reason:
        "I pulled away from the side of the road glanced at my mother in-law and headed over the embankment  Probably not the best route for family bonding",
      claim_status: "Paid",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 985861,
      customer_name: "Danit Vautin",
      claim_type: "motor",
      claim_date: "20/12/2021",
      est_claim_amt: "$40.74",
      address: "57282 Anderson Point",
      vehicle_make: "Chevrolet",
      vehicle_model: "Silverado 2500",
      vehicle_year: 2001,
      pet_type: "Praying mantis (unidentified)",
      pet_breed: "Two-toed sloth",
      claim_description: "theres not two bits of it hanging the same way",
      claim_reason:
        "My car was legally parked as it backed into another vehicle",
      claim_status: "Quoted",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 451384,
      customer_name: "Ryann Alliban",
      claim_type: "property",
      claim_date: "29/09/2022",
      est_claim_amt: "$417.09",
      address: "22739 Stephen Place",
      vehicle_make: "Lexus",
      vehicle_model: "LS",
      vehicle_year: 2005,
      pet_type: "Magpie, black-backed",
      pet_breed: "Baboon, olive",
      claim_description:
        "I started to slow down but the traffic was more stationary than I thought",
      claim_reason:
        "The other car collided with mine without giving me warning of its intention",
      claim_status: "Pending",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 225897,
      customer_name: "Salim Taft",
      claim_type: "motor",
      claim_date: "14/04/2022",
      est_claim_amt: "$86.58",
      address: "605 Jay Plaza",
      vehicle_make: "Cadillac",
      vehicle_model: "Seville",
      vehicle_year: 1999,
      pet_type: "Badger, european",
      pet_breed: "American beaver",
      claim_description:
        "I started to slow down but the traffic was more stationary than I thought",
      claim_reason:
        "The other car collided with mine without giving me warning of its intention",
      claim_status: "Quoted",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 355870,
      customer_name: "Yvette De Biasio",
      claim_type: "property",
      claim_date: "11/06/2022",
      est_claim_amt: "$30.76",
      address: "25 Northview Alley",
      vehicle_make: "Dodge",
      vehicle_model: "Dynasty",
      vehicle_year: 1992,
      pet_type: "Eagle, bald",
      pet_breed: "Rose-ringed parakeet",
      claim_description: "bent shapeless",
      claim_reason:
        "The other car collided with mine without giving me warning of its intention",
      claim_status: "Quoted",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 88823,
      customer_name: "Annabel Byrnes",
      claim_type: "property",
      claim_date: "21/04/2022",
      est_claim_amt: "$224.97",
      address: "53542 Riverside Parkway",
      vehicle_make: "Nissan",
      vehicle_model: "Altima",
      vehicle_year: 2005,
      pet_type: "Spotted wood sandpiper",
      pet_breed: "Crab, red lava",
      claim_description: "bent shapeless",
      claim_reason:
        "My car was legally parked as it backed into another vehicle",
      claim_status: "Pending",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 386678,
      customer_name: "Rozina Readman",
      claim_type: "motor",
      claim_date: "02/07/2022",
      est_claim_amt: "$384.46",
      address: "44066 Old Gate Alley",
      vehicle_make: "Toyota",
      vehicle_model: "TundraMax",
      vehicle_year: 2010,
      pet_type: "Buffalo, american",
      pet_breed: "Yellow-billed stork",
      claim_description:
        "I started to slow down but the traffic was more stationary than I thought",
      claim_reason: "I didn’t think the speed limit applied after midnight.",
      claim_status: "Pending",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 214498,
      customer_name: "Abbe Kingsworth",
      claim_type: "motor",
      claim_date: "24/12/2021",
      est_claim_amt: "$33.46",
      address: "92 Hoard Way",
      vehicle_make: "Volkswagen",
      vehicle_model: "Rabbit",
      vehicle_year: 2010,
      pet_type: "Grizzly bear",
      pet_breed: "Bee-eater, nubian",
      claim_description: "bent shapeless",
      claim_reason:
        "To avoid hitting the bumper of the car in front I struck a pedestrian",
      claim_status: "Paid",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 698123,
      customer_name: "Janella Wadhams",
      claim_type: "property",
      claim_date: "08/02/2022",
      est_claim_amt: "$80.05",
      address: "978 Logan Court",
      vehicle_make: "BMW",
      vehicle_model: "X6 M",
      vehicle_year: 2013,
      pet_type: "Eagle, long-crested hawk",
      pet_breed: "Gecko, bent-toed",
      claim_description: "bent shapeless",
      claim_reason:
        "The other car collided with mine without giving me warning of its intention",
      claim_status: "Quoted",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 697473,
      customer_name: "Ronda Croutear",
      claim_type: "pet",
      claim_date: "11/07/2022",
      est_claim_amt: "$230.05",
      address: "5633 Eagle Crest Pass",
      vehicle_make: "Mercury",
      vehicle_model: "Cougar",
      vehicle_year: 1992,
      pet_type: "Bison, american",
      pet_breed: "Possum, common brushtail",
      claim_description:
        "I started to slow down but the traffic was more stationary than I thought",
      claim_reason: "I didn’t think the speed limit applied after midnight.",
      claim_status: "Quoted",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 89065,
      customer_name: "Delmore Giacobazzi",
      claim_type: "property",
      claim_date: "14/06/2022",
      est_claim_amt: "$364.63",
      address: "49 Miller Crossing",
      vehicle_make: "Infiniti",
      vehicle_model: "G",
      vehicle_year: 2009,
      pet_type: "Iguana, marine",
      pet_breed: "Wallaby, whip-tailed",
      claim_description: "bent shapeless",
      claim_reason: "I didn’t think the speed limit applied after midnight.",
      claim_status: "Paid",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 118592,
      customer_name: "Ely Woolen",
      claim_type: "motor",
      claim_date: "18/02/2022",
      est_claim_amt: "$257.58",
      address: "46 Hintze Avenue",
      vehicle_make: "Nissan",
      vehicle_model: "GT-R",
      vehicle_year: 2011,
      pet_type: "Ox, musk",
      pet_breed: "Blue duck",
      claim_description: "broken",
      claim_reason:
        "The other car collided with mine without giving me warning of its intention",
      claim_status: "Quoted",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 318077,
      customer_name: "Lilli Tolomei",
      claim_type: "pet",
      claim_date: "01/11/2022",
      est_claim_amt: "$497.99",
      address: "33620 Tennessee Avenue",
      vehicle_make: "Audi",
      vehicle_model: "5000S",
      vehicle_year: 1984,
      pet_type: "Skink, african",
      pet_breed: "Wallaby, whip-tailed",
      claim_description: "broken",
      claim_reason:
        "My car was legally parked as it backed into another vehicle",
      claim_status: "Pending",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 257760,
      customer_name: "Raimondo Heggs",
      claim_type: "pet",
      claim_date: "02/12/2022",
      est_claim_amt: "$373.08",
      address: "6476 Bultman Pass",
      vehicle_make: "Kia",
      vehicle_model: "Sorento",
      vehicle_year: 2011,
      pet_type: "Galapagos dove",
      pet_breed: "Gull, lava",
      claim_description: "shes wrecked",
      claim_reason:
        "I told the police that I was not injured but on removing my hat I found that I had a fractured skull",
      claim_status: "Quoted",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 539975,
      customer_name: "Jonathan Kasper",
      claim_type: "property",
      claim_date: "16/06/2022",
      est_claim_amt: "$440.46",
      address: "1650 Buhler Point",
      vehicle_make: "Mercury",
      vehicle_model: "Sable",
      vehicle_year: 1989,
      pet_type: "Fox, grey",
      pet_breed: "Sandhill crane",
      claim_description: "bent shapeless",
      claim_reason:
        "The other car collided with mine without giving me warning of its intention",
      claim_status: "Pending",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 915381,
      customer_name: "Jamil Ingilson",
      claim_type: "property",
      claim_date: "13/01/2022",
      est_claim_amt: "$250.34",
      address: "72 Linden Junction",
      vehicle_make: "Chevrolet",
      vehicle_model: "Impala SS",
      vehicle_year: 1995,
      pet_type: "Sifaka, verreaux's",
      pet_breed: "Long-tailed jaeger",
      claim_description:
        "I started to slow down but the traffic was more stationary than I thought",
      claim_reason: "I didn’t think the speed limit applied after midnight.",
      claim_status: "Paid",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 259057,
      customer_name: "Chloe Whorlow",
      claim_type: "pet",
      claim_date: "01/10/2022",
      est_claim_amt: "$240.78",
      address: "327 Shoshone Drive",
      vehicle_make: "Mazda",
      vehicle_model: "Miata MX-5",
      vehicle_year: 2011,
      pet_type: "Bandicoot, long-nosed",
      pet_breed: "European red squirrel",
      claim_description: "theres not two bits of it hanging the same way",
      claim_reason:
        "To avoid hitting the bumper of the car in front I struck a pedestrian",
      claim_status: "Pending",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 939330,
      customer_name: "Caitlin Gaitone",
      claim_type: "property",
      claim_date: "20/09/2022",
      est_claim_amt: "$226.80",
      address: "6986 Farmco Point",
      vehicle_make: "Land Rover",
      vehicle_model: "LR2",
      vehicle_year: 2009,
      pet_type: "Flamingo, greater",
      pet_breed: "Tawny frogmouth",
      claim_description: "bent shapeless",
      claim_reason: "I didn’t think the speed limit applied after midnight.",
      claim_status: "Paid",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      policy_number: 299674,
      customer_name: "Bev Cornelleau",
      claim_type: "property",
      claim_date: "14/04/2022",
      est_claim_amt: "$133.70",
      address: "28579 Dovetail Road",
      vehicle_make: "Cadillac",
      vehicle_model: "Fleetwood",
      vehicle_year: 1954,
      pet_type: "Cat, ringtail",
      pet_breed: "Mountain duck",
      claim_description: "broken",
      claim_reason:
        "I pulled away from the side of the road glanced at my mother in-law and headed over the embankment  Probably not the best route for family bonding",
      claim_status: "Paid",
      image_1:
        "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
  ];
};

// const headers = new Headers({ Accept: "application/json" });

// export const getAllClaimsFetchVersion = () => {
//   return fetch("http://localhost:8080/api/claim", {
//     method: "GET",
//     headers: headers,
//   });
// };

// export const getAllClaimsAxiosVersion = () => {
//   return axios({
//     url: "http://localhost:8080/api/claim",
//     method: "GET",
//     headers: { Accept: "application/json" },
//   });
// };

// export const getAllClaimsForCountry = (country) => {
//   console.log("getallClaimsforcountry");
//   return axios({
//     url: "http://localhost:8080/api/claim?country=" + country,
//     method: "GET",
//     headers: { Accept: "application/json" },
//   });
// };

// export const getAllClaimsForOrderId = (orderId) => {
//   return axios({
//     url: "http://localhost:8080/api/claim?order=" + orderId,
//     method: "GET",
//     headers: { Accept: "application/json" },
//   });
// };

// export const getCountries = () => {
//   console.log("getcountries");
//   return axios({
//     url: "http://localhost:8080/api/claim",
//     method: "GET",
//     headers: { Accept: "application/json" },
//   });
// };

// //add transaction:  POST /api/payment
// //update            PUT /api/payment/142645

// export const addNewClaim = (claim) => {
//   return axios({
//     url: "http://localhost:8080/api/claim",
//     method: "POST",
//     headers: { Accept: "application/json", "Content-Type": "application/json" },
//     data: claim,
//   });

