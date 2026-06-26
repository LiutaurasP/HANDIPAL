from core.database import Base
from sqlalchemy import Column, Integer, String, Float, ForeignKey, Boolean
from sqlalchemy.orm import relationship


class HandymanProfile(Base):
    __tablename__ = "handyman_profiles"

    id = Column(Integer, primary_key=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        unique=True,
        nullable=False
    )

    bio = Column(String(1000), nullable=True)
    on_holiday = Column(Boolean, nullable=False, default=False)
    service_radius = Column(Float, nullable=False, default=20)


    user = relationship(
        "User",
        back_populates="handyman_profile"
    )