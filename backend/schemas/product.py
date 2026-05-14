from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class ProductCreate(BaseModel):

    # Basic
    name: str

    slug: str

    sku: Optional[str] = None

    short_description: Optional[str] = None

    description: Optional[str] = None

    # Category
    category_id: int

    # Product Details
    material: Optional[str] = None

    color: Optional[str] = None

    size: Optional[str] = None

    # Pricing
    price: float

    sale_price: Optional[float] = None

    cost_price: Optional[float] = None

    tax_percentage: Optional[float] = None

    # Inventory
    stock_qty: int = 0

    min_stock_alert: int = 5

    # Images
    front_image: Optional[str] = None

    back_image: Optional[str] = None

    # Product Status
    is_active: bool = True

    is_featured: bool = False

    is_trending: bool = False

    is_new_arrival: bool = False

    day_of_the_deal: bool = False

    # SEO
    meta_title: Optional[str] = None

    meta_keywords: Optional[str] = None

    meta_description: Optional[str] = None

    # Shipping
    weight: Optional[float] = None

    length: Optional[float] = None

    width: Optional[float] = None

    height: Optional[float] = None


class ProductResponse(ProductCreate):

    id: int

    average_rating: float

    total_reviews: int

    created_at: Optional[datetime]

    class Config:

        from_attributes = True