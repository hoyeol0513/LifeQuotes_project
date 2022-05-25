import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";

const pool = mysql.createPool({
  host: "localhost",
  user: "sbsst",
  password: "sbs123414",
  database: "exam1",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  dateStrings: true,
});

const app = express();
app.use(express.json());

const corsOptions = {
  origin: "https://cdpn.io",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

const port = 3000;

app.patch("/lifequotes/rand/like", async (req, res) => {
  const { id, like } = req.body;

  await pool.query(
    `
    UPDATE lifequotes
    SET liked = ?
    WHERE id = ?
    `,
    [like, id]
    //rows안에 명언들이 있고
    //그 중 하나에 index를 통해서 접근해야함.
  );

  res.json();
});

app.patch("/lifequotes/rand/hate", async (req, res) => {
  const { id, hate } = req.body;

  const [rs] = await pool.query(
    `
    UPDATE lifequotes
    SET hated = ?
    WHERE id = ?
    `,
    [hate, id]
    //rows안에 명언들이 있고
    //그 중 하나에 index를 통해서 접근해야함.
  );

  res.json();
});

app.get("/lifequotes/rand", async (req, res) => {
  const [rows] = await pool.query(
    `
    SELECT * 
    FROM lifequotes
    ORDER BY RAND()
    LIMIT 1 
    `
  );

  await pool.query(
    `
    UPDATE lifequotes
    SET hit = hit + 1
    WHERE id = ?
    `,
    [rows[0].id]
    //rows안에 명언들이 있고
    //그 중 하나에 index를 통해서 접근해야함.
  );

  rows[0].hit++;

  res.json(rows);
});

app.listen(port);
