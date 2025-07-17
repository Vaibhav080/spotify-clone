import mongoose from "mongoose";
import { Song } from "../models/song.model.js";
import { Album } from "../models/album.model.js";
import { config } from "dotenv";

config();

const seedDatabase = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);

        //Clear existing data

        await Album.deleteMany({});
        await Song.deleteMany({});

        //First, create all songs
        const createdSongs = await Song.insertMany([

            {
                title: "Shape of You",
                artist: "Ed Sheeran",
                imageUrl: "/cover-images/1.jpg",
                audioUrl: "/songs/1.mp3",
                plays: Math.floor(Math.random() * 5000),
                duration: 263, // seconds
                durationString: "4:23"
            },
        
            {
                title: "Heat Waves",
                artist: "Glass Animals",
                imageUrl: "/cover-images/2.png",
                audioUrl: "/songs/2.mp3",
                plays: Math.floor(Math.random() * 5000),
                duration: 235, // seconds
                durationString: "3:55"
            },
        
            {
                title: "Spirits",
                artist: "The Strumbellas",
                imageUrl: "/cover-images/3.jpg",
                audioUrl: "/songs/3.mp3",
                plays: Math.floor(Math.random() * 5000),
                duration: 212, // seconds
                durationString: "3:32"
            },
        
            {
                title: "Journey Song",
                artist: "Anupam Roy & Shreya Ghoshal",
                imageUrl: "/cover-images/4.jpg",
                audioUrl: "/songs/4.mp3",
                plays: Math.floor(Math.random() * 5000),
                duration: 262, // seconds
                durationString: "4:22"
            },
        
            {
                title: "Jeet",
                artist: "Ritviz",
                imageUrl: "/cover-images/5.jpg",
                audioUrl: "/songs/5.mp3",
                plays: Math.floor(Math.random() * 5000),
                duration: 184, // seconds
                durationString: "3:04"    
            },
        
            {
                title: "Stereo Hearts",
                artist: "Gym Class Heroes",
                imageUrl: "/cover-images/6.jpg",
                audioUrl: "/songs/6.mp3",
                plays: Math.floor(Math.random() * 5000),
                duration: 216, // seconds
                durationString: "3:36"
            },
        
            {
                title: "Shinunoga E-Wa",
                artist: "Fujii Kaze",
                imageUrl: "/cover-images/7.png",
                audioUrl: "/songs/7.mp3",
                plays: Math.floor(Math.random() * 5000),
                duration: 191, // seconds 
                durationString: "3:11"
            },
        
            {
                title: "Voh Dekhnay Mein",
                artist: "Aditi Rao Hydari and Ali Zafar",
                imageUrl: "/cover-images/8.jpg",
                audioUrl: "/songs/8.mp3",
                plays: Math.floor(Math.random() * 5000),
                duration: 159, // seconds 
                durationString: "2:39" 
            },
        
            {
                title: "My Stupid Heart",
                artist: "Luminati Suns and Walk off the Earth",
                imageUrl: "/cover-images/9.jpg",
                audioUrl: "/songs/9.mp3",
                plays: Math.floor(Math.random() * 5000),
                duration: 163, // seconds 
                durationString: "2:43"
            },
        
            {
                title: "Give Me Some Sunshine",
                artist: "Sharman Joshi and Suraj Jagan",
                imageUrl: "/cover-images/10.jpg",
                audioUrl: "/songs/10.mp3",
                plays: Math.floor(Math.random() * 5000),
                duration: 254, // seconds 
                durationString: "4:14" 
            },
        
            {
                title: "Dandelions",
                artist: "Ruth B",
                imageUrl: "/cover-images/11.png",
                audioUrl: "/songs/11.mp3",
                plays: Math.floor(Math.random() * 5000),
                duration: 235, // seconds 
                durationString: "3:55"
            },
        
            {
                title: "Perfect",
                artist: "Ed Sheeran",
                imageUrl: "/cover-images/12.jpg",
                audioUrl: "/songs/12.mp3",
                plays: Math.floor(Math.random() * 5000),
                duration: 279, // seconds 
                durationString: "4:39" 
            },
        
            {
                title: "KABHI KABHI ADITI",
                artist: "Rashid Ali",
                imageUrl: "/cover-images/13.jpg",
                audioUrl: "/songs/13.mp3",
                plays: Math.floor(Math.random() * 5000),
                duration: 236, // seconds 
                durationString: "3:56"
            },
        
            {
                title: "One Love",
                artist: "Shubh",
                imageUrl: "/cover-images/14.jpg",
                audioUrl: "/songs/14.mp3",
                plays: Math.floor(Math.random() * 5000),
                duration: 159, // seconds 
                durationString: "2:39" 
            },
        
            {
                title: "Lahore",
                artist: "Guru Randhawa",
                imageUrl: "/cover-images/15.jpeg",
                audioUrl: "/songs/15.mp3",
                plays: Math.floor(Math.random() * 5000),
                duration: 234, // seconds 
                durationString: "3:54"
            },
        
            {
                title: "Dance Monkey",
                artist: "Tones and I",
                imageUrl: "/cover-images/16.jpg",
                audioUrl: "/songs/16.mp3",
                plays: Math.floor(Math.random() * 5000),
                duration: 210, // seconds 
                durationString: "3:30"
            },
        
            {
                title: "Night Changes",
                artist: "One Direction",
                imageUrl: "/cover-images/17.png",
                audioUrl: "/songs/17.mp3",
                plays: Math.floor(Math.random() * 5000),
                duration: 240, // seconds 
                durationString: "4:00"
            },
        
            {
                title: "Sweet but Psycho",
                artist: "Ava Max",
                imageUrl: "/cover-images/18.png",
                audioUrl: "/songs/18.mp3",
                plays: Math.floor(Math.random() * 5000),
                duration: 207, // seconds 
                durationString: "3:27"
            },

            {
                title: "One Love",
                artist: "Blue",
                imageUrl: "/cover-images/19.jpg",
                audioUrl: "/songs/19.mp3",
                plays: Math.floor(Math.random() * 5000),
                duration: 210, // seconds 
                durationString: "3:30"     
            },
        ]);

        // Create albums with references to song IDs

        const albums = [

            {
                title: "÷ (Divide)",
                artist: "Ed Sheeran",
                imageUrl: "/albums/divide.png",
                releaseYear: 2017,
                songs: createdSongs.filter(song =>["Shape of You", "Perfect"].includes(song.title)).map(song => song._id),
            },

            {
                title: "Dreamland",
                artist: "Glass Animals",
                imageUrl: "/albums/dreamland.png",
                releaseYear: 2020,
                songs: createdSongs.filter(song => song.title === "Heat Waves").map(song => song._id),
            },
            
            {
                title: "Hope",
                artist: "The Strumbellas",
                imageUrl: "/albums/hope.jpg",
                releaseYear: 2016,
                songs: createdSongs.filter(song => song.title === "Spirits").map(song => song._id),
            },

            {
                title: "Piku (Soundtrack)",
                artist: "Anupam Roy",
                imageUrl: "/albums/piku.jpg",
                releaseYear: 2015,
                songs: createdSongs.filter(song => song.title === "Journey Song").map(song => song._id),
            },

            {
                title: "Ved",
                artist: "Ritviz",
                imageUrl: "/albums/ved.jpg",
                releaseYear: 2022,
                songs: createdSongs.filter(song => song.title === "Jeet").map(song => song._id),
            },

            {
                title: "The Papercut Chronicles II",
                artist: "Gym Class Heroes",
                imageUrl: "/albums/papercut-chronicles.jpg",
                releaseYear: 2011,
                songs: createdSongs.filter(song => song.title === "Stereo Hearts").map(song => song._id),
            },

            {
                title: "Help Ever Hurt Never",
                artist: "Fujii Kaze",
                imageUrl: "/albums/help-ever-hurt-never.png",
                releaseYear: 2020,
                songs: createdSongs.filter(song => song.title === "Shinunoga E-Wa").map(song => song._id),
            },

            {
                title: "London Paris New York (Soundtrack)",
                artist: "Ali Zafar",
                imageUrl: "/albums/london-paris-newyork.jpg",
                releaseYear: 2012,
                songs: createdSongs.filter(song => song.title === "Voh Dekhnay Mein").map(song => song._id),
            },

            {
                title: "My Stupid Heart",
                artist: "Walk Off the Earth",
                imageUrl: "/albums/my-stupid-heart.jpg",
                releaseYear: 2023,
                songs: createdSongs.filter(song => song.title === "My Stupid Heart").map(song => song._id),
            },

            {
                title: "3 Idiots (Soundtrack)",
                artist: "Shantanu Moitra",
                imageUrl: "/albums/3idiots.jpg",
                releaseYear: 2009,
                songs: createdSongs.filter(song => song.title === "Give Me Some Sunshine").map(song => song._id),
            },

            {
                title: "Safe Haven (Deluxe Edition)",
                artist: "Ruth B",
                imageUrl: "/albums/safe-haven.jpg",
                releaseYear: 2017,
                songs: createdSongs.filter(song => song.title === "Dandelions").map(song => song._id),
            },

            {
                artist: "A. R. Rahman",
                title: "Jaane Tu... Ya Jaane Na (Soundtrack)",
                releaseYear: 2008,
                imageUrl: "/albums/jaane-tu.jpeg",
                songs: createdSongs.filter(song => song.title.toLowerCase().includes("kabhi kabhi aditi")).map(song => song._id),
            },

            {
                title: "Still Rollin",
                artist: "Shubh",
                imageUrl: "/albums/still-rollin.jpg",
                releaseYear: 2023,
                songs: createdSongs.filter(song => song.title === "One Love" && song.artist === "Shubh").map(song => song._id),
            },

            {
                title: "Lahore Single",
                artist: "Guru Randhawa",
                imageUrl: "/albums/lahore.jpeg",
                releaseYear: 2017,
                songs: createdSongs.filter(song => song.title === "Lahore").map(song => song._id),
            },

            {
                title: "The Kids Are Coming",
                artist: "Tones and I",
                imageUrl: "/albums/the-kids-are-coming.png",
                releaseYear: 2019,
                songs: createdSongs.filter(song => song.title === "Dance Monkey").map(song => song._id),
            },

            {
                artist: "One Direction",
                title: "Four",
                imageUrl: "/albums/four.png",
                releaseYear: 2014,
                songs: createdSongs.filter(song => song.title === "Night Changes").map(song => song._id),
            },

            {
                title: "Heaven & Hell",
                artist: "Ava Max",
                imageUrl: "/albums/heaven-and-hell.png",
                releaseYear: 2020,
                songs: createdSongs.filter(song => song.title === "Sweet but Psycho").map(song => song._id),
            },

            {
                title: "One Love",
                artist: "Blue",
                imageUrl: "/albums/blue-one-love.jpg",
                releaseYear: 2002,
                songs: createdSongs.filter(song => song.title === "One Love" && song.artist === "Blue").map(song => song._id),
            },
        ];

        //Insert all albums

        const createdAlbums = await Album.insertMany(albums);

        //Update songs with their album references

        for (let i = 0; i < createdAlbums.length; i++) {
            const album = createdAlbums[i];
            const albumSongs = album.songs; // ✅ Corrected
        
            await Song.updateMany(
                { _id: { $in: albumSongs } },
                { albumId: album._id }
            );
        }


        console.log("Database seeded successfully!");
    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        mongoose.connection.close();
    }
};

seedDatabase();