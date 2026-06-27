from pydantic import BaseModel, ConfigDict


class QueryCreate(BaseModel):
    description: str
    latitude: float | None = None
    longitude: float | None = None


class QueryResponse(BaseModel):
    id: int
    description: str
    status: str
    model_config = ConfigDict(from_attributes=True)
