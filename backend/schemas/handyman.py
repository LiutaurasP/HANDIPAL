from pydantic import BaseModel, ConfigDict


class HandymanProfileCreate(BaseModel):
    trade: str
    bio: str | None = None
    service_radius: float = 20.0


class HandymanProfileResponse(BaseModel):
    id: int
    trade: str
    bio: str | None
    service_radius: float
    on_holiday: bool

    model_config = ConfigDict(from_attributes=True)