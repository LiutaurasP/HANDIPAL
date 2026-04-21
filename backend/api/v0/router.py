from fastapi import APIRouter

from app.api.v0 import auth, users, jobs, matches, chat

api_router = APIRouter()

# Auth
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])

# Users
api_router.include_router(users.router, prefix="/users", tags=["users"])

# Jobs (your “problem posts”)
api_router.include_router(jobs.router, prefix="/jobs", tags=["jobs"])

# Matching system (core product)
api_router.include_router(matches.router, prefix="/matches", tags=["matches"])

# Chat system
api_router.include_router(chat.router, prefix="/chat", tags=["chat"])