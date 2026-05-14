from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from database import SessionLocal

from models.product import Product

from schemas.product import ProductCreate
from schemas.product import ProductResponse


router = APIRouter(
    prefix="/products",
    tags=["Products"]
)


# DB Session
def get_db():

    db = SessionLocal()

    try:

        yield db

    finally:

        db.close()


# Create Product
@router.post("/", response_model=ProductResponse)
def create_product(
    product: ProductCreate,
    db: Session = Depends(get_db)
):

    new_product = Product(**product.dict())

    db.add(new_product)

    db.commit()

    db.refresh(new_product)

    return new_product


# Get Products
@router.get("/", response_model=list[ProductResponse])
def get_products(
    db: Session = Depends(get_db)
):

    return db.query(Product).all()