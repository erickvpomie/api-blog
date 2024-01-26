import { client } from "../db.js";
import { DateTime } from "luxon";

export const getPosts = async (req, res) => {
    const { search } = req.query;
    try {
        let posts = [];
        if (search) {
            posts = await client.execute({
                sql: "SELECT post_id, title, content, created_at, updated_at, name as author_name FROM post INNER JOIN user ON post.user_id = user.user_id WHERE title LIKE ? OR content LIKE ?",
                args: [`%${search}%`, `%${search}%`]
            })
        } else {
            posts = await client.execute("SELECT post_id, title, content, created_at, updated_at, name as author_name FROM post INNER JOIN user ON post.user_id = user.user_id");
        }
        res.json({
            success: true,
            data: posts.rows
        })
    } catch (e) {
        res.status(500).json({
            success: false, message: e.message
        });
    }
}

export const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await client.execute({
            sql: "SELECT post_id, title, content, created_at, updated_at, name as author_name FROM post INNER JOIN user ON post.user_id = user.user_id WHERE post_id = ?",
            args: [id]
        });

        if (post.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "Post not found"
            });
            return;
        }

        res.json({
            success: true,
            data: post.rows[0]
        })

    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        });
    }
}

export const createPost = async (req, res) => {
    try {
        const { title, content, user_id } = req.body;
        const currentDate = DateTime.now().toFormat("yyyy-MM-dd HH:mm:ss");
        await client.execute({
            sql: "INSERT INTO post (title, content, created_at, updated_at, user_id) VALUES (?, ?, ?, ?, ?)",
            args: [title, content, currentDate, currentDate, user_id]
        });
        res.json({
            success: true,
            message: "Post created successfully"
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        });
    }
}

export const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        const currentDate = DateTime.now().toFormat("yyyy-MM-dd HH:mm:ss");
        await client.execute({
            sql: "UPDATE post SET title = ?, content = ?, updated_at = ? WHERE post_id = ?",
            args: [title, content, currentDate, id]
        });
        res.json({
            success: true,
            message: "Post updated successfully"
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        });
    }
}

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        await client.execute({
            sql: "DELETE FROM post WHERE post_id = ?",
            args: [id]
        });
        res.json({
            success: true,
            message: "Post deleted successfully"
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        });
    }
}

//export const searchPosts = async (req, res) => {
//    res.status(500).json({
//        success: false,
//        message: 'hola mundo'
//    });
    // try {
    //     console.log('hola mundo')
    //     // const posts = await client.execute({
    //     //     sql: "SELECT post_id, title, content, created_at, updated_at, name as author_name FROM post INNER JOIN user ON post.user_id = user.user_id WHERE title LIKE ? OR content LIKE ?",
    //     //     args: [`%${q}%`, `%${q}%`]
    //     // });
    //     // res.json({
    //     //     success: true,
    //     //     data: posts.rows
    //     // })
    // } catch (e) {
    //     res.status(500).json({
    //         success: false,
    //         message: e.message
    //     });
    // }
//}