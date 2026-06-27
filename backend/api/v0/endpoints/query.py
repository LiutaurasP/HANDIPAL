from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from core.deps import get_current_user, get_db
from models.user import User
from schemas.query import QueryCreate, QueryResponse
from services.query_service import create_query

router = APIRouter()


@router.post("/", response_model=QueryResponse)
def create(
    query: QueryCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    return create_query(
        db=db,
        current_user=current_user,
        description=query.description,
        latitude=query.latitude,
        longitude=query.longitude,
    )