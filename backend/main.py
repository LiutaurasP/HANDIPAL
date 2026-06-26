from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.v0.router import api_router
from core.config import settings


from core.database import Base, engine
from models.user import User
from models.job import Job
from models.conversation import Conversation
from models.message import Message
from models.handyman import HandymanProfile

# Not sure if it does anything, but perhaps it destroys the database (to be deleted in working version)
Base.metadata.drop_all(bind=engine)

# Create DB
Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="HandyMatch API",
    version="0.1.0",
    description="Matching handymen with customers based on location and intent"
)

# -----------------------
# CORS (frontend connection)
# -----------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # Vite dev server
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------
# API routes
# -----------------------
app.include_router(api_router, prefix="/api/v1")


# -----------------------
# Health check
# -----------------------
@app.get("/health")
def health_check():
    return {
        "status": "ok"
    }
