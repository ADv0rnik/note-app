from sqlalchemy import Column, Integer, Float, ForeignKey, Text, Enum
from sqlalchemy.orm import relationship
from app.schemas.note import Status

from app.db.base_class import Base
from .mixin import Timestamp
from .user import User


class Note(Timestamp, Base):
    id = Column(Integer, primary_key=True, nullable=False)
    status = Column(Enum(Status), default="active", nullable=False)
    content = Column(Text, nullable=True, default="")
    user_id = Column(Integer, ForeignKey("user.id"), nullable=False)

    user_note = relationship("User", back_populates="note")