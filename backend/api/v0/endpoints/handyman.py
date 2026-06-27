from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from core.deps import get_db, get_current_user
from models.user import User
from schemas.handyman import (
    HandymanProfileCreate,
    HandymanProfileResponse,
)
from services.handyman_service import (
    create_handyman,
)

router = APIRouter()


@router.post("/", response_model=HandymanProfileResponse)
def create(
    profile: HandymanProfileCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    return create_handyman(
        db=db,
        current_user=current_user,
        trade=profile.trade,
        bio=profile.bio,
        service_radius=profile.service_radius,
    )