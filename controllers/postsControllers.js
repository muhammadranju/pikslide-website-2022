const postsRoute = {};

postsRoute.getPosts = (req, res, next) => {
   res.status(200).render("pages/posts/allProduct", {
      title: "Posts Product",
   });
};

postsRoute.getProducts = (req, res, next) => {
   res.status(200).render("pages/posts/singleProduct", {
      title: "New Social Media Poster",
   });
};

module.exports = postsRoute;
