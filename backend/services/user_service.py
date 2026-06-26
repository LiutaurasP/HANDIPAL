from fastapi import HTTPException, status
from sqlalchemy.orm import Session
from services.auth_service import hash_password, verify_password, create_access_token

from models.user import User


def create_user(
    db: Session,
    name: str,
    email: str,
    password: str,
):
    # Check if the email already exists
    existing_user = (
        db.query(User)
        .filter(User.email == email)
        .first()
    )

    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="There is already an account registered with this email.",
        )

    # Create the user
    user = User(
        name=name,
        email=email,
        password_hash=hash_password(password),
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return user

def login_user (
        db: Session,
        email: str,
        password:str,
):
    user = (
        db.query(User)
        .filter(User.email == email)
        .first()
    )
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password."
        )
    if not verify_password(password,user.password_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password."
        )
    
    token = create_access_token(user.id)

    return {
        "access_token": token,
        "token_type": "bearer",
    }

