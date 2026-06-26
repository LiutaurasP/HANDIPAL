from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from core.deps import get_db
from schemas.user import UserCreate, UserResponse
from services.user_service import create_user

router = APIRouter()


@router.post("/register", response_model=UserResponse)
def register(
    user: UserCreate,
    db: Session = Depends(get_db)
):
    return create_user(
        db=db,
        name=user.name,
        email=user.email,
        password=user.password,
    )