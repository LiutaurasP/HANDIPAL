from core.database import Base
from sqlalchemy import Column, Integer, String, ForeignKey

class Job(Base):
    __tablename__ = "jobs"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, Foreign_Key=("users.id"))
    description = Column (String)
    status = Column (String, default="open")