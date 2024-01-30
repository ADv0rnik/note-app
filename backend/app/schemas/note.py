import enum
from pydantic import BaseModel


class Status(str, enum.Enum):
    ACTIVE = "active"
    CLOSED = "closed"


class NoteBaseModel(BaseModel):
    status: str
    content: str


class NoteCreateModel(BaseModel):
    pass


class NoteUpdateModel(BaseModel):
    pass


class NoteModel(NoteBaseModel):
    id: int
    user_id: int

    class Config:
        orm_mode = True
