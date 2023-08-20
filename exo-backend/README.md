# Exo (Backend)

Welcome to the backend codebase of the Exo app. The backend has been built as an ExpressJS app powered by MongoDB, Cloudinary and more.

<b>IMPORTANT: This project is still under construction.</b>

## Technologies

The backend of the Exo app has been built using:

1. <b><a href="https://nodejs.org/en">Node.js</a></b> - an open-source cross-platform JavaScript runtime environment used to build applications running on servers. Node.js allows for asynchronous, event-driven and highly scalable applications, as in the case of Exo.
2. <b><a href="https://expressjs.com/">Express</a></b> - an open-source web framework for building RESTful APIs with Node.js. Express helps drastically reduce the development time associated with building on Node.js, along with a plethora of other benefits.
3. <b><a href="https://www.mongodb.com/">MongoDB</a></b> - a document-oriented NoSQL database management program for building scalable and flexible databases. MongoDB was selected for Exo due to its large ecosystem of supporting services, its ability to work with data in a model closely related to the JavaScript Object Notation (JSON) and its ability to outperform traditional relational databases in several occasions.
4. <b><a href="https://www.typescriptlang.org/">Cloudinary</a></b> - a SaaS solution for managing the media assets of an application in the cloud. Cloudinary offered us multiple services during the development of Exo, including upload, storage, transformation and more.

## Highlights

### Using `Socket.IO` to handle concurrent seat selection

The `Socket.IO` library was used to handle concurrent requests made by the client when two or more users are in the process of actively selecting seats, such that no two users will select the same seat, and thereby face a terrible user experience of having to reselect seats.

In theory, `Socket.IO` allowed use to display other users selecting seats in real-time to a user who is currently on the "Select Seats" page.

<img src="./assets/web-socket-code.png">

## Schemas (for Developers)

### Users

```json
const genders = ["Male", "Female", "Non-Binary"];

const userSchema = new mongoose.Schema({
  quantumEncryptionKey: String,
  name: String,
  img: String,
  verification: String,
  gender: {
    type: String,
    enum: genders,
  },
  dob: Date,
  bookedTrips: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "trips",
    },
  ],
  savedCards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cards",
    },
  ],
  occupation: [String],
  bloodGroup: String,
  authorizedLevel: String,
  citizenship: {
    planet: String,
    region: String,
  },
});
```

### Trips

```json
const tripSchema = new mongoose.Schema({
  tripName: String,
  description: String,
  passengers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  spaceship: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "spaceships",
  },
  arrival: {
    date: Date,
    location: String,
    terminal: String,
  },
  departure: {
    date: Date,
    location: String,
    terminal: String,
  },
  cosmoCruiser: {
    ticketPrice: Number,
    accomodationPrice: Number,
    foodAndBeveragePrice: Number,
    miscellaneousPrice: Number,
  },
  orionLux: {
    ticketPrice: Number,
    accomodationPrice: Number,
    foodAndBeveragePrice: Number,
    miscellaneousPrice: Number,
  },
  astroHop: {
    ticketPrice: Number,
    accomodationPrice: Number,
    foodAndBeveragePrice: Number,
    miscellaneousPrice: Number,
  },
  availableSeats: [String],
});
```

### Spaceships

```json
const spaceshipSchema = new mongoose.Schema({
  name: String,
  description: String, // owner properties to be included later
  availableClasses: {
    type: [String],
    default: ["Cosmo Cruiser", "Orion Lux", "Astro Hop"],
  },
  capacity: {
    cosmoCruiser: Number,
    orionLux: Number,
    astroHop: Number,
  },
  owner: String,
});
```

### Planets

```json
const planetSchema = new mongoose.Schema({
  name: String,
  description: String,
  trips: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "trips",
  },
  planetImg: String,
  galleryImages: [String],
  // not complete yet... but suitable for booking flow
});
```

### Bank Cards

```json
const paymentCardSchema = new mongoose.Schema({
  cardNumber: String,
  expireDate: String,
  cvv: Number,
  cardType: String,
});
```

### Bookings

```json
const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  spaceship: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "spaceships",
  },
  trip: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "trips",
    },
  ],
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  ],
  status: String,
  class: String,
  tripType: String,
  veg: Boolean,
  vegan: Boolean,
  price: Number,
  seats: [String],
});
```
