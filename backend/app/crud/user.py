import logging
from sqlalchemy.orm import Session

from app.models.user import User


logger = logging.getLogger('notes')


def create_init_user(db: Session, user: User) -> User:
    db_user = User(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    logger.info(f'Created user {db_user}')
    return db_user


def get_user(db: Session, user_id: int) -> User:
    return db.query(User).where(User.id == user_id).first()


def get_user_by_email(db: Session, email: str) -> User | None:
    return db.query(User).filter(User.email == email).one_or_none()