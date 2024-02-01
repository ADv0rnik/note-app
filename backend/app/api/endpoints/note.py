import logging
from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schemas.note import NoteUpdateModel, NoteCreateModel, NoteModel
from app.crud.note import create_init_note, get_notes_list, get_note_by_id, delete_note


note_router = APIRouter()
logger = logging.getLogger('notes')


@note_router.get('/', response_model=List[NoteModel])
def get_notes(db: Session = Depends(get_db)):
    return get_notes_list(db)


@note_router.post("/note", response_model=NoteModel)
def create_note(note: NoteCreateModel, db: Session = Depends(get_db)):
    note_db = create_init_note(db, note)
    return note_db


@note_router.delete("/note/{note_id}", response_model=None)
def remove_note(note_id: int, db: Session = Depends(get_db)):
    if get_note_by_id(db, note_id):
        delete_note(db, note_id)
        return {"message": "Note deleted"}
    else:
        logger.error(msg=f"Note with {note_id} does not exist")
        return HTTPException(status_code=400, detail=f"Note with {note_id} does not exist")