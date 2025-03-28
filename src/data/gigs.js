import ziggy from "../assets/ziggy-stardust.jpg";
import jimiHendrix from "../assets/jimi-hendrix.jpg";
import theWeeknd from "../assets/the-weeknd.jpg";
import drake from "../assets/drake.jpg";
import badBunny from "../assets/bad-bunny.jpg";
import bmth from "../assets/bmth.jpg";

const allGigs = [
  {
    id: 1,
    name: "David Bowie",
    image: ziggy,
    description: "Say farewell to the Spiders from Mars!",
    dateTime: "3 July 1973 - 7pm",
    location: "Hammersmith Odeon, London",
  },

  {
    id: 2,
    name: "Jimi Hendrix",
    image: jimiHendrix,
    description: "Live from Monterey Pop festival - it was lit!",
    dateTime: "18 June 1967 - 3pm",
    location: "Monterery Country Fairgrounds, Monterey, California",
  },

  {
    id: 3,
    name: "The Weeknd",
    image: theWeeknd,
    description: "Celebrate the end of summer with After Hours til Dawn!",
    dateTime: "18 August 2023 - 6pm",
    location: "Wembley Stadium, South Way, Wembley, HA9 0WS",
  },

  {
    id: 4,
    name: "Drake",
    image: drake,
    description: "Experience the infamous rapper live with his latest hits!",
    dateTime: "4 February 2025 - 7pm",
    location: "RAC Arena, 700 Wellington St, Perth, Australia",
  },

  {
    id: 5,
    name: "Bad Bunny",
    image: badBunny,
    description: "The World's Hottest Tour continues!",
    dateTime: "12 August 2022 - 4pm",
    location: "Hard Rock Stadium, Miami Gardens, Florida, United States",
  },
  {
    id: 6,
    name: "Bring Me The Horizon",
    image: bmth,
    description:
      "Catch the iconic metalcore band live at Knotfest as they perform their biggest hits!",
    dateTime: "25 October 2015 - 8pm",
    location:
      "San Manuel Amphitheater, 2575 Glen Helen Parkway, San Bernardino, California",
  },
];

export default allGigs;
