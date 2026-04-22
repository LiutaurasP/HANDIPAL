from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.v0.router import api_router
from core.config import settings


from core.database import Base, engine
from models import user  # important: ensures model is registered
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