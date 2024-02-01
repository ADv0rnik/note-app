from fastapi import APIRouter

from .endpoints import note, user


api_router = APIRouter()


api_router.include_router(
    note.note_router, prefix='/notes', tags=["Note"]
)


api_router.include_router(
    user.user_router, prefix='/user', tags=["User"]
)