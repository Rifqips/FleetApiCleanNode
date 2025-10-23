import { query } from '../../config/db.js';

const table = 'vehicles';

export const VehicleRepository = {
  async create(data) {
    const { plate_number, brand, model, year, status } = data;
    const sql = `INSERT INTO ${table} (plate_number, brand, model, year, status)
                 VALUES ($1,$2,$3,$4,$5) RETURNING *`;
    const { rows } = await query(sql, [plate_number, brand, model, year, status]);
    return rows[0];
  },

  async findById(id) {
    const { rows } = await query(`SELECT * FROM ${table} WHERE id=$1`, [id]);
    return rows[0] || null;
  },

  async list({ q, page, limit }) {
    const offset = (page - 1) * limit;
    const like = `%${q || ''}%`;
    const sql = `SELECT * FROM ${table}
                 WHERE plate_number ILIKE $1 OR brand ILIKE $1 OR model ILIKE $1
                 ORDER BY id DESC
                 LIMIT $2 OFFSET $3`;
    const { rows } = await query(sql, [like, limit, offset]);
    const { rows: countRows } = await query(
      `SELECT COUNT(*)::int AS count FROM ${table}
       WHERE plate_number ILIKE $1 OR brand ILIKE $1 OR model ILIKE $1`,
       [like]
    );
    return { items: rows, total: countRows[0].count, page, limit };
  },

  async update(id, data) {
    const fields = [];
    const values = [];
    let idx = 1;
    for (const [k, v] of Object.entries(data)) {
      fields.push(`${k}=$${idx++}`);
      values.push(v);
    }
    if (fields.length === 0) return this.findById(id);
    values.push(id);
    const sql = `UPDATE ${table} SET ${fields.join(', ')} WHERE id=$${idx} RETURNING *`;
    const { rows } = await query(sql, values);
    return rows[0];
  },

  async remove(id) {
    const { rows } = await query(`DELETE FROM ${table} WHERE id=$1 RETURNING id`, [id]);
    return rows[0]?.id || null;
  }
};
