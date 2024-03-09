from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship

from api.database import Base


class ToDo(Base):
    __tablename__ = "to_do"
    

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String, index=True)
    date_started = Column(String, index=True)
    date_completed = Column(String, index=True)
    time_to_complete = Column(String, index=True)
    complete = Column(Boolean, default=False)
    started = Column(Boolean, default=False)
    notes = Column(String, index=True)
    status = Column(String, index=True)
    
    

    
    
    