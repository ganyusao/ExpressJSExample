const pool = require('../config/db');

class Search {
  static async findUserByUsername(username) {
    try {
      const [rows] = await pool.query(
        'SELECT id, username, role, created_at, avatar_url FROM users WHERE username LIKE ?',
        [`%${username}%`]
      );
      return rows[0] || null; // Trả về người dùng đầu tiên hoặc null nếu không tìm thấy
    } catch (error) {
      console.error('Error finding user:', error);
      throw error;
    }
  }
}

module.exports = Search;
