import db from "#db/client";


export async function createDestination({user_id, name, description, location}) {
  const sql = `
  INSERT INTO destinations
    (user_id, name, description, location)
  VALUES
    ($1, $2, $3, $4)
  RETURNING *
  `;
  const {
    rows: [destination],
  } = await db.query(sql, [user_id, name, description, location]);
  return destination;
}



export async function getDestination({user_id, name, description, location}) {
  const sql = `
  SELECT *
  FROM destinations
  WHERE user_id = $1
    AND name = $2
    AND description = $3
    AND location = $4
  `;
  const { rows: destinations } = await db.query(sql, [user_id, name, description, location]);
  return destinations;
}

export async function getAllDestinations() {
  const sql = `
  SELECT *
  FROM destinations
  `;
  const { rows: destinations } = await db.query(sql);
  return destinations;
}

 