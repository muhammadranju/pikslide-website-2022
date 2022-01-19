const User = require("../models/User");
// const Profile = require("../models/Profile");

const uploadProfile = {};

uploadProfile.uploadProfilePics = async (req, res, next) => {
   if (req.file) {
      try {
         let profile = await Profile.findOne({ user: req.user._id });
         let profilePics = `/uplodes/${req.file.filename}`;

         if (profile) {
            await Profile.findOneAndUpdate(
               { user: req.user._id },
               { $set: { profilePics } }
            );
         }
         await User.findOneAndUpdate(
            { _id: req.user._id },
            { $set: { profilePics } }
         );
         res.status(200).json({
            profilePics,
         });
      } catch (error) {
         res.status(500).json({
            profilePics: req.user.profilePics,
         });
      }
   } else {
      res.status(500).json({
         profilePics: req.user.profilePics,
      });
   }
};

module.exports = uploadProfile;
