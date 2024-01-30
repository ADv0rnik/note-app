import os

from pathlib import Path

from pydantic import AnyHttpUrl
from pydantic_settings import BaseSettings


BASE_DIR = Path(__file__).parent.parent.parent.resolve()
ENVPATH = os.path.join(BASE_DIR, ".env")


class Settings(BaseSettings):
    API_V1_STR: str = "/notes/v1"
    PROJECT_NAME: str
    PROJECT_VERSION: str
    PROJECT_HOST: str
    PORT: int

    DB_USER: str
    DB_NAME: str
    DB_PASS: str
    DB_HOST: str
    DB_PORT: int

    ALLOWED_ORIGIN: list[AnyHttpUrl] = [
        'http://localhost',
        'http://127.0.0.1',
        'http://0.0.0.0'
    ]

    class Config:
        env_file = ENVPATH
        env_file_encoding = "utf-8"
        case_sensitive = True
        extra = "allow"


settings = Settings()

LOGGING_CONFIG = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "standard": {
            "format": "%(levelname)-7s %(asctime)s %(message)s"
        }
    },
    "handlers": {
        "console": {
            "level": "DEBUG",
            "class": "logging.StreamHandler",
            "formatter": "standard"
        },
        "file": {
            "level": "DEBUG",
            "class": "logging.handlers.RotatingFileHandler",
            "filename": os.path.join(BASE_DIR, 'logs', 'api.log'),
            "formatter": "standard",
            "encoding": "UTF-8",
            "maxBytes": 10 * 1024 * 1024,
            "backupCount": 1000
        }
    },
    "loggers": {
        "notes": {
            "handlers": ["console", "file"],
            "level": "DEBUG"
        }
    }
}
