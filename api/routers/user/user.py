from fastapi import Depends
from ...schemas.user import UserBase, UserCreate
from ...actions.user.user import create_user, get_user, update_user, delete_user 
from fastapi import APIRouter
from sqlalchemy.orm import Session
from ...schemas.user import UserCreate
from ...models.user import User
from ...database import get_db

router = APIRouter()


@router.post("/api/user")
def create_user( user: UserCreate, db: Session = Depends(get_db)):
    user.password = user.password + "notreallyhashed"
    db_user = User(
        username=user.username,
        email=user.email, 
        hashed_password=user.password, 
        phone=user.phone, 
        uuid=user.uuid, 
        street_address=user.street_address, 
        apt=user.apt, 
        city=user.city, 
        state=user.state, 
        zip_code=user.zip_code,
        created_at=user.created_at, 
        updated_at=user.updated_at,
        deleted_at=user.deleted_at
        )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

