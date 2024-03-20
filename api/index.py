from fastapi import FastAPI, Depends
from .routers import test

# def create_tables():         
# 	Base.metadata.create_all(bind=engine)
 
def start_application():
    app = FastAPI()
    # create_tables()
    return app
# Start FastAPI
app = start_application()
# Include routers
app.include_router(test.router)
