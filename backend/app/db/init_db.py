import logging

from pydantic import ValidationError
from sqlalchemy.orm import Session

from app.core.config import Settings
from app.schemas.user import UserCreateModel
from app.schemas.note import NoteCreateModel

from app.crud.user import create_init_user
from app.crud.note import create_init_note


settings = Settings()
logger = logging.getLogger('bookshelf')


def init_db(db: Session):
    create_user(db)
    create_note(db)


def create_user(db: Session):
    user = settings.INIT_USER
    try:
        db_user = UserCreateModel(
            username=user['username'],
            email=user['email'],
            password=user['password']
        )
    except ValidationError as e:
        logger.error(f"An error occur while creating model {e}")
    else:
        create_init_user(db, db_user)


def create_note(db: Session):
    note = settings.INIT_NOTE
    try:
        db_note = NoteCreateModel(
            status=note["status"],
            content=note["content"],
            user_id=note["user_id"]
        )
    except ValidationError as err:
        logger.error(err)
    else:
        create_init_note(db, db_note)
