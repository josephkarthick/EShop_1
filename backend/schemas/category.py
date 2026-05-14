from pydantic import BaseModel


class CategoryCreate(BaseModel):

    name: str

    slug: str

    image: str | None = None


class CategoryResponse(CategoryCreate):

    id: int

    class Config:

        from_attributes = True