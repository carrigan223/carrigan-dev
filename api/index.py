from fastapi import FastAPI, Depends
from .routers import test
from .routers.user import user as user_router
from .models import to_do
from .models import user
from .database.database import SessionLocal, engine
from .core.config import settings
from .database.base import Base

def create_tables():         
	Base.metadata.create_all(bind=engine)
 
def start_application():
    app = FastAPI(title=settings.PROJECT_NAME,version=settings.PROJECT_VERSION)
    create_tables()
    return app
# Start FastAPI
app = start_application()
# Include routers
app.include_router(test.router)
app.include_router(user_router.router)
