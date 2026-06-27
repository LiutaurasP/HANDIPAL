from core.database import Base
from sqlalchemy import (
    Column,
    Integer,
    String,
    Float,
    Boolean,
    ForeignKey,
    Text,
)
from sqlalchemy.orm import relationship


class HandymanProfile(Base):
    __tablename__ = "handyman_profiles"

    id = Column(Integer, primary_key=True)

    # One profile per user
    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        unique=True,
        nullable=False,
    )

    # Structured information
    trade = Column(
        String,
        nullable=False,
    )

    # Rich text for semantic search / embeddings
    bio = Column(
        Text,
        nullable=True,
    )

    # Business logic
    service_radius = Column(
        Float,
        nullable=False,
        default=20.0,
    )

    on_holiday = Column(
        Boolean,
        nullable=False,
        default=False,
    )

    # Relationship
    user = relationship(
        "User",
        back_populates="handyman_profile",
    )