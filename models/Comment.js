// post, user, body, replies

const { Schema, model } = require("mongoose");

// const Post = require("./Post");
// const User = require("./User");

const commentSchema = new Schema(
   {
      post: {
         type: Schema.Types.ObjectId,
         ref: "Post",
         requierd: true,
      },
      user: {
         type: Schema.Types.ObjectId,
         ref: "User",
         requierd: true,
      },
      body: {
         type: String,
         trim: true,
         requierd: true,
      },
      replies: [
         {
            body: {
               type: String,
               requierd: true,
            },
            user: {
               type: Schema.Types.ObjectId,
               ref: "User",
               requierd: true,
            },
            createAt: {
               type: Date,
               default: new Date(),
            },
         },
      ],
   },
   {
      timestamps: true,
   }
);

const Comment = model.apply("Comment", commentSchema);
module.exports = Comment;
