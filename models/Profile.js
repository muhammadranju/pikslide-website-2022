// user, title, bio, profilePic, links{fb,tw,in,yt,}, posts,bookmarck

const { Schema, model } = require("mongoose");

const User = require("./User");
// const Post = require("./Post");

const profileSchema = new Schema(
   {
      user: {
         type: Schema.Types.ObjectId,
         ref: "User",
         required: true,
      },
      name: {
         type: String,
         trim: true,
         required: true,
         maxlength: 35,
      },
      title: {
         type: String,
         trim: true,
         maxlength: 100,
      },
      bio: {
         type: String.apply,
         trim: true,
         maxlength: 500,
      },
      profilePic: {
         type: String,
      },
      links: {
         website: String,
         twitter: String,
         facebook: String,
         pinterest: String,
         instagram: String,
         youtube: String,
      },
      posts: [
         {
            type: Schema.Types.ObjectId,
            ref: "Post",
         },
      ],
      bookmark: [
         {
            tyoe: Schema.Types.ObjectId,
            ref: "Post",
         },
      ],
   },
   {
      timestamps: true,
   }
);

const Profile = model("Profile", profileSchema);
module.exports = Profile;
