

import pool from '../config/db.js';

export async function findAll() {
  const [rows] = await pool.query('SELECT * FROM crudapi ORDER BY id DESC');
 
  return rows;
}

export async function findById(id) {
  const [rows] = await pool.query('SELECT * FROM crudapi WHERE id = ?', [id]);
  return rows[0] || null;
}


export async function create({fname,lname,email}) {
  const [result] = await pool.query(
    'INSERT INTO crudapi (fname, lname, email) VALUES (?, ?, ?)',
    [fname|| null, lname || null, email|| null]
  );
  console.log(result.insertId)
  return result.insertId;
}

export async function updateRecord({id,fname,lname,email}) {
  const [result] = await pool.query(
    `UPDATE crudapi
       SET fname = ?, lname = ?, email = ?
     WHERE id = ?`,
    [
      fname ?? null,
      lname ?? null,
      email ?? null,
      id
    ]
  );
  return result;
}

export async function deleteRecord({ id }) {
  const [result] = await pool.query(
    `DELETE FROM crudapi WHERE id = ?`,
    [id]
  );
  return result;
}

