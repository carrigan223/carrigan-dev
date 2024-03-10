# from ...actions.user import create_user, get_user, update_user, delete_user
from fastapi import APIRouter

router = APIRouter()


@router.post("/api/user")
def create_user_route(user_data: dict):
    # create_user(user_data)
    return {"message": user_data}

