from fastapi import Depends
from ...schemas.user import UserBase, UserCreate
# from ...index import get_db
from ...actions.user.user import create_user, get_user, update_user, delete_user 
from fastapi import APIRouter
from sqlalchemy.orm import Session
from ...schemas.user import UserCreate
from ...models.user import User

router = APIRouter()


# @router.post("/api/user")
# def create_user( user: UserCreate,db: Session = Depends(get_db)):
#     fake_hashed_password = user.password + "notreallyhashed"
#     db_user = User(user)
#     db.add(db_user)
#     db.commit()
#     db.refresh(db_user)
#     return db_user

