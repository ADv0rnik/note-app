from typing import List, Optional

from pydantic import BaseModel, Field


class UserBaseModel(BaseModel):
    username: str
    email: str
    role_id: int


class UserCreateModel(UserBaseModel):
    password: str


class UserUpdateModel(UserBaseModel):
    password: str


class UserModel(UserBaseModel):
    id: int

    class Config:
        orm_mode = True
