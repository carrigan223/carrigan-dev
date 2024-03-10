from pydantic import BaseModel


   
class ToDoBase(BaseModel):
    name: str
    description: str
    date_started: str
    date_completed: str
    time_to_complete: str
    complete: bool
    started: bool
    notes: str
    status: str
    
class ToDoCreate(ToDoBase):
    pass
    

class ToDo(ToDoBase):
    id: int
    name: str
    description: str
    date_started: str
    date_completed: str
    time_to_complete: str
    complete: bool
    started: bool
    notes: str
    status: str
    
    class Config:
        orm_mode = True