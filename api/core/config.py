import os
from dotenv import load_dotenv

load_dotenv()




class Settings:
    PROJECT_NAME:str = "carrigan-dev API 🔥"
    PROJECT_VERSION: str = "1.0.0"

    DB_CONNECTION = os.getenv('DB_CONNECTION')
    DB_HOST = os.getenv('DB_HOST')
    DB_PORT = os.getenv('DB_PORT')
    DB_DATABASE =   os.getenv('DB_DATABASE')
    DB_USERNAME = os.getenv('DB_USERNAME')
    DB_PASSWORD = os.getenv('DB_PASSWORD')
    DB_URL = f"{DB_CONNECTION}://{DB_USERNAME}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_DATABASE}"
    print('tester',DB_URL)
settings = Settings()