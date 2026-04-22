from fastapi import APIRouter

from api.v0.endpoints import health

api_router = APIRouter()

# Health (Sanity check)
api_router.include_router(health.router, prefix="/health", tags=["health"])
