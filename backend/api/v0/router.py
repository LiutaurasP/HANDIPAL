from fastapi import APIRouter

from api.v0.endpoints import health, user, query

api_router = APIRouter()

api_router.include_router(health.router, prefix="/health", tags=["health"])


api_router.include_router(user.router, prefix="/users", tags=["users"])


api_router.include_router(query.router, prefix="/queries", tags=["queries"])