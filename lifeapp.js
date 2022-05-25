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

app.patch("/lifequotes/hate", async (req, res) => { //싫어요 증가
    
  const { id } = req.body;
  if(id === undefined){
    res.status(404).json({
      msg:"id required"
    });
    return;
  }
  const [rs] = await pool.query(`
  UPDATE lifequotes
  SET hated = hated + 1
  WHERE id = ?
  `,
  [id]
  );

  res.json({
    msg : "싫어요가 1 증가되었습니다."
  });
});

app.patch("/lifequotes/like", async (req, res) => { //좋아요 수 증가

  const { id } = req.body;

  if(id === undefined){
    res.status(404).json({
      msg:"id required"
    });
    return;
  }
  const [rs] = await pool.query(`
  UPDATE lifequotes
  SET liked = liked + 1
  WHERE id = ?
  `,
  [id]
  );

  res.json({
    msg : "좋아요가 1 증가되었습니다."
  });
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
