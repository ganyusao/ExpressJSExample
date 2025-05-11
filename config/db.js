const mysql = require('mysql2/promise');

// Tạo pool kết nối
const pool = mysql.createPool({
    host: 'mysql-ed145c2-hochitrung08012004-6685.j.aivencloud.com',
    port: 22012,
    user: 'avnadmin', // Thay bằng username MySQL của bạn
    password: 'AVNS_23e2BqV9YnTCreBLUIT', // Thay bằng password MySQL của bạn
    database: 'social_media_web', // Tên database của bạn
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;
