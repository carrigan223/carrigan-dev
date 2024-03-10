from fastapi import FastAPI
from .routers import test
from .models import to_do
from .models import user
from .database import SessionLocal, engine


#generate database schema
user.Base.metadata.create_all(bind=engine)
to_do.Base.metadata.create_all(bind=engine)

# Start FastAPI
app = FastAPI()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


app.include_router(test.router)