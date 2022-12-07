const data = require('../database/post.json');

module.exports = {
    getAllPosts: () => {
            return data;
    }
}