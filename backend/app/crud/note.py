import logging
from typing import List

from sqlalchemy.orm import Session
from app.models.note import Note


logger = logging.getLogger('notes')


def create_init_note(db: Session, note: Note) -> Note:
    print(note.dict())
    db_note = Note(**note.dict())
    db.add(db_note)
    db.commit()
    db.refresh(db_note)
    logger.info(f'Created note {db_note}')
    return db_note


def get_notes_list(db: Session) -> List[Note]:
    return db.query(Note).all()


def get_note_by_id(db: Session, note_id: int) -> Note:
    return db.query(Note).where(Note.id == note_id).first()


def delete_note(db: Session, note_id: int):
    db.query(Note).filter(Note.id == note_id).delete()
    db.commit()
    logger.info(f'Note with {note_id} had been deleted')
    return {"message": "Note deleted"}