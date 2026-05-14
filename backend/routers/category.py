from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from database import SessionLocal

from models.category import Category

from schemas.category import (
    CategoryCreate,
    CategoryResponse
)


router = APIRouter(
    prefix="/categories",
    tags=["Categories"]
)


def get_db():

    db = SessionLocal()

    try:

        yield db

    finally:

        db.close()


@router.post("/", response_model=CategoryResponse)
def create_category(
    category: CategoryCreate,
    db: Session = Depends(get_db)
):

    new_category = Category(**category.dict())

    db.add(new_category)

    db.commit()

    db.refresh(new_category)

    return new_category


@router.get("/", response_model=list[CategoryResponse])
def get_categories(
    db: Session = Depends(get_db)
):

    return db.query(Category).all()