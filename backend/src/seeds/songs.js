import mongoose from "mongoose";
import { Song} from "../models/song.model.js";
import { config } from "dotenv";

config();

const songs = [

    {
        title: "Shape of You",
        artist: "Ed Sheeran",
        imageUrl: "/cover-images/1.jpg",
        audioUrl: "/songs/1.mp3",
        duration: 263, // seconds
        durationString: "4:23"
    },

    {
        title: "Heat Waves",
        artist: "Glass Animals",
        imageUrl: "/cover-images/2.png",
        audioUrl: "/songs/2.mp3",
        duration: 235, // seconds
        durationString: "3:55"
    },

    {
        title: "Spirits",
        artist: "The Strumbellas",
        imageUrl: "/cover-images/3.jpg",
        audioUrl: "/songs/3.mp3",
        duration: 212, // seconds
        durationString: "3:32"
    },

    {
        title: "Journey Song",
        artist: "Anupam Roy & Shreya Ghoshal",
        imageUrl: "/cover-images/4.jpg",
        audioUrl: "/songs/4.mp3",
        duration: 262, // seconds
        durationString: "4:22"
    },

    {
        title: "Jeet",
        artist: "Ritviz",
        imageUrl: "/cover-images/5.jpg",
        audioUrl: "/songs/5.mp3",
        duration: 184, // seconds
        durationString: "3:04"   
    },

    {
        title: "Stereo Hearts",
        artist: "Gym Class Heroes",
        imageUrl: "/cover-images/6.jpg",
        audioUrl: "/songs/6.mp3",
        duration: 216, // seconds 
        durationString: "3:36"
    },

    {
        title: "Shinunoga E-Wa",
        artist: "Fujii Kaze",
        imageUrl: "/cover-images/7.png",
        audioUrl: "/songs/7.mp3",
        duration: 191, // seconds 
        durationString: "3:11"
    },

    {
        title: "Voh Dekhnay Mein",
        artist: "Aditi Rao Hydari and Ali Zafar",
        imageUrl: "/cover-images/8.jpg",
        audioUrl: "/songs/8.mp3",
        duration: 159, // seconds
        durationString: "2:39" 
    },

    {
        title: "My Stupid Heart",
        artist: "Luminati Suns and Walk off the Earth",
        imageUrl: "/cover-images/9.jpg",
        audioUrl: "/songs/9.mp3",
        duration: 163, // seconds 
        durationString: "2:43"
    },

    {
        title: "Give Me Some Sunshine",
        artist: "Sharman Joshi and Suraj Jagan",
        imageUrl: "/cover-images/10.jpg",
        audioUrl: "/songs/10.mp3",
        duration: 254, // seconds
        durationString: "4:14" 
    },

    {
        title: "Dandelions",
        artist: "Ruth B",
        imageUrl: "/cover-images/11.png",
        audioUrl: "/songs/11.mp3",
        duration: 235, // seconds 
        durationString: "3:55"
    },

    {
        title: "Perfect",
        artist: "Ed Sheeran",
        imageUrl: "/cover-images/12.jpg",
        audioUrl: "/songs/12.mp3",
        duration: 279, // seconds
        durationString: "4:39" 
    },

    {
        title: "KABHI KABHI ADITI",
        artist: "Rashid Ali",
        imageUrl: "/cover-images/13.jpg",
        audioUrl: "/songs/13.mp3",
        duration: 236, // seconds 
        durationString: "3:56"
    },

    {
        title: "One Love",
        artist: "Shubh",
        imageUrl: "/cover-images/14.jpg",
        audioUrl: "/songs/14.mp3",
        duration: 159, // seconds
        durationString: "2:39" 
    },

    {
        title: "Lahore",
        artist: "Guru Randhawa",
        imageUrl: "/cover-images/15.jpeg",
        audioUrl: "/songs/15.mp3",
        duration: 234, // seconds
        durationString: "3:54"
    },

    {
        title: "Dance Monkey",
        artist: "Tones and I",
        imageUrl: "/cover-images/16.jpg",
        audioUrl: "/songs/16.mp3",
        duration: 210, // seconds 
        durationString: "3:30"
    },

    {
        title: "Night Changes",
        artist: "One Direction",
        imageUrl: "/cover-images/17.png",
        audioUrl: "/songs/17.mp3",
        duration: 240, // seconds 
        durationString: "4:00"
    },

    {
        title: "Sweet but Psycho",
        artist: "Ava Max",
        imageUrl: "/cover-images/18.png",
        audioUrl: "/songs/18.mp3",
        duration: 207, // seconds 
        durationString: "3:27"
    },

    {
        title: "One Love",
        artist: "Blue",
        imageUrl: "/cover-images/19.jpg",
        audioUrl: "/songs/19.mp3",
        duration: 210, // seconds
        durationString: "3:30" 
    },
];

const seedSongs = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);

        //Clear existing Songs

        await Song.deleteMany({});

        //Insert new Song
        await Song.insertMany(songs);

        console.log("Songs seeded successfully!");
    } catch (error) {
        console.log("Error while seeding:", error);
    } finally {
        mongoose.connection.close();
    }
};

seedSongs();