from fastapi import APIRouter
from sqlalchemy.orm import Session
from pydantic import BaseModel





router = APIRouter()

@router.get("/api/python")
def hello_world():
    return {"message": "Hello Andrew, from Python!"}
