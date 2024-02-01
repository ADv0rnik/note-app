import uvicorn
import logging.config

from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from app.core.config import Settings, LOGGING_CONFIG
from app.api.api import api_router

settings = Settings()

logging.config.dictConfig(LOGGING_CONFIG)
logger = logging.getLogger('notes')


def start_application(config: Settings):
    application = FastAPI(
        title=config.PROJECT_NAME,
        debug=True,
        version=config.PROJECT_VERSION,
        docs_url=f"{config.API_V1_STR}/docs"
    )
    return application


app = start_application(settings)
app.include_router(api_router, prefix=settings.API_V1_STR)
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGIN,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == '__main__':
    logger.info("Start application")
    uvicorn.run(
        "main:app",
        port=int(settings.PORT),
        host=settings.PROJECT_HOST,
        reload=True
    )