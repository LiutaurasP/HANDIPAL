from sqlalchemy.orm import Session

from models.query import Query
from models.user import User


def create_query(
    db: Session,
    current_user: User,
    description: str,
    latitude: float | None,
    longitude: float | None,
):
    query = Query(
        user_id=current_user.id,
        description=description,
        latitude=latitude,
        longitude=longitude,
    )

    db.add(query)
    db.commit()
    db.refresh(query)

    return query