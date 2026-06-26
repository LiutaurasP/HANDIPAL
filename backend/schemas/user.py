# Input schema
from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str

# Return to frontend schema
from pydantic import ConfigDict

class UserResponse(BaseModel):
    id: int
    name: str
    email: str

    model_config = ConfigDict(from_attributes=True)

# Login schema
class UserLogin(BaseModel):
    email: EmailStr
    password: str