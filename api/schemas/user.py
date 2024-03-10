from pydantic import BaseModel
from ..models.to_do import ToDo

class UserBase(BaseModel):
    username: str
    email: str
    password: str
    phone: str
    uuid: str
    street_address: str
    apt: str
    city: str
    state: str
    zip_code: str
    created_at: str
    updated_at: str
    deleted_at: str
    
class UserCreate(UserBase):
    pass

class User(UserBase):
    id: int
    is_active: bool
    # to_dos: list[ToDo] = []
    
    class Config:
        orm_mode = True

