from fastapi import APIRouter
from sqlalchemy.orm import Session
from pydantic import BaseModel
from ..models.to_do import ToDo
from ..database.database import SessionLocal





router = APIRouter()

@router.get("/api/python")
def hello_world():
    return {"message": "Hello Andrew, from Python!"}


@router.get("/api/to_do")
def get_to_do_list(db = SessionLocal()):
    try:
        todo_list = db.query(ToDo).all()
    finally:
        db.close()
    return todo_list