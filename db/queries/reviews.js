import db from "#db/client";


export async function createReview({user_id, destination_id, content, created_at}) {
  const sql = `
  INSERT INTO reviews
    (user_id, destination_id, content, created_at)
  VALUES
    ($1, $2, $3, $4)
  RETURNING *
  `;
  const {
    rows: [comment],
  } = await db.query(sql, [user_id, destination_id, content, created_at]);
  return comment;
}



export async function getReviews({user_id, destination_id, content, created_at}) {
  const sql = `
  SELECT *
  FROM reviews
  WHERE user_id = $1
    AND destination_id = $2
    AND content = $3
    AND created_at = $4
  `;
  const { rows: comments } = await db.query(sql, [user_id, destination_id, content, created_at]);
  return comments;
}

export async function getAllReviews() {
  const sql = `
  SELECT *
  FROM reviews
  `;
  const { rows: reviews } = await db.query(sql);
  return reviews;
}