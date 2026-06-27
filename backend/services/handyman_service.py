from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from models.handyman import HandymanProfile
from models.user import User


def create_handyman(
    db: Session,
    current_user: User,
    trade: str,
    bio: str | None,
    service_radius: float,
):
    # Check if the user already has a handyman profile
    existing_profile = (
        db.query(HandymanProfile)
        .filter(HandymanProfile.user_id == current_user.id)
        .first()
    )

    if existing_profile:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="You already have a handyman profile.",
        )

    # Create the profile
    profile = HandymanProfile(
        user_id=current_user.id,
        trade=trade,
        bio=bio,
        service_radius=service_radius,
    )

    db.add(profile)
    db.commit()
    db.refresh(profile)

    return profile