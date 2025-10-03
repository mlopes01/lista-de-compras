from fastapi import FastAPI
from pydantic import BaseModel
import sqlite3

app = FastAPI()

# Modelo dos dados (como será enviado pelo frontend)
class Item(BaseModel):
    name: str
    preço: float
    qtd: int

# Inicializa o banco SQLite
def init_db():
    conn = sqlite3.connect("lista.db")
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS tarefa (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            preço REAL,
            qtd INTEGER
        )
    """)
    conn.commit()
    conn.close()

init_db()

@app.get("/")
def listar_itens():
    conn = sqlite3.connect("lista.db")
    cursor = conn.cursor()
    cursor.execute("SELECT id, name, preço, qtd FROM tarefa")
    rows = cursor.fetchall()
    conn.close()
    return [{"id": r[0], "name": r[1], "preço": r[2], "qtd": r[3]} for r in rows]

@app.post("/")
def adicionar_item(item: Item):
    conn = sqlite3.connect("lista.db")
    cursor = conn.cursor()
    cursor.execute("INSERT INTO tarefa (name, preço, qtd) VALUES (?, ?, ?)", (item.name, item.preço, item.qtd))
    conn.commit()
    conn.close()
    return {"mensagem": "Item adicionado com sucesso!"}


from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ou coloque ["http://localhost:3000"] se for só o React
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
