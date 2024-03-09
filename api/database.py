from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from api.models.to_do import ToDo




DB_URL = "postgresql://postgres:BFC54da-bAD-D2A2a5gebD3b6faGf6b4@viaduct.proxy.rlwy.net:55389/railway"
print(DB_URL)
engine = create_engine(DB_URL, echo=True)
print(engine)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
print(SessionLocal)


