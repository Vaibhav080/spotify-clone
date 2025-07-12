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
        duration: 46, // seconds
    },

    {
        title: "Heat Waves",
        artist: "Glass Animals",
        imageUrl: "/cover-images/2.png",
        audioUrl: "/songs/2.mp3",
        duration: 41, // seconds
    },

    {
        title: "Spirits",
        artist: "The Strumbellas",
        imageUrl: "/cover-images/3.jpg",
        audioUrl: "/songs/3.mp3",
        duration: 41, // seconds
    },

    {
        title: "Journey Song",
        artist: "Anupam Roy & Shreya Ghoshal",
        imageUrl: "/cover-images/4.jpg",
        audioUrl: "/songs/4.mp3",
        duration: 42, // seconds
    },

    {
        title: "Jeet",
        artist: "Ritviz",
        imageUrl: "/cover-images/5.jpg",
        audioUrl: "/songs/5.mp3",
        duration: 42, // seconds   
    },

    {
        title: "Stereo Hearts",
        artist: "Gym Class Heroes",
        imageUrl: "/cover-images/6.jpg",
        audioUrl: "/songs/6.mp3",
        duration: 42, // seconds 
    },

    {
        title: "Shinunoga E-Wa",
        artist: "Fujii Kaze",
        imageUrl: "/cover-images/7.png",
        audioUrl: "/songs/7.mp3",
        duration: 42, // seconds 
    },

    {
        title: "Voh Dekhnay Mein",
        artist: "Aditi Rao Hydari and Ali Zafar",
        imageUrl: "/cover-images/8.jpg",
        audioUrl: "/songs/8.mp3",
        duration: 42, // seconds 
    },

    {
        title: "My Stupid Heart",
        artist: "Luminati Suns and Walk off the Earth",
        imageUrl: "/cover-images/9.jpg",
        audioUrl: "/songs/9.mp3",
        duration: 42, // seconds 
    },

    {
        title: "Give Me Some Sunshine",
        artist: "Sharman Joshi and Suraj Jagan",
        imageUrl: "/cover-images/10.jpg",
        audioUrl: "/songs/10.mp3",
        duration: 42, // seconds 
    },

    {
        title: "Dandelions",
        artist: "Ruth B",
        imageUrl: "/cover-images/11.png",
        audioUrl: "/songs/11.mp3",
        duration: 42, // seconds 
    },

    {
        title: "Perfect",
        artist: "Ed Sheeran",
        imageUrl: "/cover-images/12.jpg",
        audioUrl: "/songs/12.mp3",
        duration: 42, // seconds 
    },

    {
        title: "KABHI KABHI ADITI",
        artist: "Rashid Ali",
        imageUrl: "/cover-images/13.jpg",
        audioUrl: "/songs/13.mp3",
        duration: 42, // seconds 
    },

    {
        title: "One Love",
        artist: "Shubh",
        imageUrl: "/cover-images/14.jpg",
        audioUrl: "/songs/14.mp3",
        duration: 42, // seconds 
    },

    {
        title: "Lahore",
        artist: "Guru Randhawa",
        imageUrl: "/cover-images/15.jpeg",
        audioUrl: "/songs/15.mp3",
        duration: 42, // seconds 
    },

    {
        title: "Dance Monkey",
        artist: "Tones and I",
        imageUrl: "/cover-images/16.jpg",
        audioUrl: "/songs/16.mp3",
        duration: 42, // seconds 
    },

    {
        title: "Night Changes",
        artist: "One Direction",
        imageUrl: "/cover-images/17.png",
        audioUrl: "/songs/17.mp3",
        duration: 42, // seconds 
    },

    {
        title: "Sweet but Psycho",
        artist: "Ava Max",
        imageUrl: "/cover-images/18.png",
        audioUrl: "/songs/18.mp3",
        duration: 42, // seconds 
    },

    {
        title: "One Love",
        artist: "Blue",
        imageUrl: "/cover-images/19.jpg",
        audioUrl: "/songs/19.mp3",
        duration: 42, // seconds     
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