import { User } from "../models/user.model.js";
import { Album } from "../models/album.model.js";
import { Song } from "../models/song.model.js";

export const getStats = async (req, res, next) => {

    try{

        const [totalSongs, totalUsers, totalAlbums] = await Promise.all([
            Song.countDocuments(),
            Album.countDocuments(),
            User.countDocuments(),

            Song.aggregate([
                {
                    $unionwith:{
                        coll: "albums",
                        pipeline:[]
                    }
                },
                {
                    $group:{
                        _id:"$artist",
                    },
                },
                {
                    $count: "count",
                },
            ]),
        ]);

        res.status(200).json({
            totalAlbums,
            totalSongs,
            totalUsers,
            totalArtists: uniqueArtists[0]?.count || 0,
        })
    } catch(error) {
        next(error)
    }
}