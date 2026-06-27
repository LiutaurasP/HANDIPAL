from sqlalchemy import Column, Integer, ForeignKey
from core.database import Base

class Conversation(Base):
    __tablename__ = "conversations"

    id = Column(Integer, primary_key=True)
    query_id = Column(Integer, ForeignKey("queries.id"))
    client_id = Column(Integer)
    handyman_id = Column(Integer)