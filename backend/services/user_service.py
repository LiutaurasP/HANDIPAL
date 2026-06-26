from sqlalchemy.orm import Session

from models.user import User
from fastapi import HTTPException,status


def create_user(
    db: Session,
    name: str,
    email: str,
    password: str,
):
    existing_user = (
        db.query(User).filter(User.email == email).first()
    )
    if existing_user:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT,
                            detail="There is an account already registered to this email.",)
    user = User(
        name=name,
        email=email,
        password_hash=password,   # temporary
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return user