from sqlalchemy import String, Integer, Boolean
from sqlalchemy.orm import Mapped, mapped_column
from core.database import Base


class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)

    email: Mapped[str] = mapped_column(String, unique=True, index=True)

    hashed_password: Mapped[str] = mapped_column(String)

    name: Mapped[str] = mapped_column(String)

    is_handyman: Mapped[bool] = mapped_column(Boolean, default=False)