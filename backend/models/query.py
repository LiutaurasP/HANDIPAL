from core.database import Base
from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    ForeignKey,
    DateTime,
    Float,
)
from sqlalchemy.sql import func


class Query(Base):
    __tablename__ = "queries"

    id = Column(Integer, primary_key=True)

    # Who asked?
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    # User's exact words (NEVER overwrite this)
    description = Column(Text, nullable=False)

    # Optional location
    latitude = Column(Float)
    longitude = Column(Float)

    # Current lifecycle
    status = Column(
        String,
        default="pending"
    )

    # Audit
    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now()
    )