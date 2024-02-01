import logging

from fastapi import APIRouter, Depends, HTTPException, Security
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schemas.user import UserCreateModel, UserModel
from app.crud.user import create_init_user, get_user_by_email, get_user


user_router = APIRouter()
logger = logging.getLogger('notes')


@user_router.post('/', response_model=UserModel)
async def create_user(user: UserCreateModel, db: Session = Depends(get_db)):
    if db_user := get_user_by_email(db, user.email):
        logger.error(msg=f"User with {db_user.email} already exist")
        return HTTPException(status_code=400, detail=f"User with {db_user.email} already exist")
    else:
        return create_init_user(db, user)
