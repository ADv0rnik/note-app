import enum
from typing import Optional

from pydantic import BaseModel, Field


class Status(str, enum.Enum):
    ACTIVE = "active"
    CLOSED = "closed"


class NoteBaseModel(BaseModel):
    title: str
    status: Optional[str] = Field(default=Status.ACTIVE)
    content: str
    user_id: int


class NoteCreateModel(NoteBaseModel):
    pass


class NoteUpdateModel(NoteBaseModel):
    pass


class NoteModel(NoteBaseModel):
    id: int
    user_id: int

    class Config:
        orm_mode = True
