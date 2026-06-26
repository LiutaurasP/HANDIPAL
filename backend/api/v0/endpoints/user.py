from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from schemas.auth import TokenResponse

from core.deps import get_db
from schemas.user import UserCreate, UserResponse, UserLogin
from services.user_service import create_user, login_user

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

@router.post("/login", response_model=TokenResponse)
def login(
    user: UserLogin,
    db: Session = Depends(get_db),
):
    return login_user(
        db=db,
        email=user.email,
        password=user.password,
    )

from models.user import User
from core.deps import get_current_user

@router.get("/me", response_model=UserResponse)
def get_me(
    current_user: User = Depends(get_current_user),
):
    return current_user