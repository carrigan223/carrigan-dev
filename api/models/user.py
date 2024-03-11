from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship

from api.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)
    phone = Column(String, unique=True, index=True)
    uuid = Column(String, unique=True, index=True)
    street_address = Column(String, index=True)
    apt = Column(String, index=True)
    city = Column(String, index=True)
    state = Column(String, index=True)
    zip_code = Column(String, index=True)
    created_at = Column(String, index=True)
    updated_at = Column(String, index=True)
    deleted_at = Column(String, index=True)
    
    
    def combine_city_and_state(self):
        return self.city + ", " + self.state
    

