from fastapi import FastAPI, Depends
from .routers import test
from .routers.user import user as user_router
from .models import to_do
from .models import user
from .database import SessionLocal, engine


#generate database schema
user.Base.metadata.create_all(bind=engine)
to_do.Base.metadata.create_all(bind=engine)

# Start FastAPI
app = FastAPI()



# Include routers
app.include_router(test.router)
app.include_router(user_router.router)