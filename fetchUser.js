const pool = require('./db');

async function fetchUser() {
  try {
    const res = await pool.query('SELECT * FROM users');
    console.table(res.rows);
  } catch (err) {
    console.error('❌ Error fetching users:', err.message);
  }
}

module.exports=fetchUser;