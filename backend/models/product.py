from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Text
from sqlalchemy import DECIMAL
from sqlalchemy import Boolean
from sqlalchemy import ForeignKey
from sqlalchemy import DateTime

from sqlalchemy.sql import func

from database import Base


class Product(Base):

    __tablename__ = "products"

    # Primary
    id = Column(Integer, primary_key=True, index=True)

    # Basic
    name = Column(String(255), nullable=False)

    slug = Column(String(255), unique=True, nullable=False)

    sku = Column(String(100), unique=True)

    short_description = Column(Text)

    description = Column(Text)

    # Category
    category_id = Column(
        Integer,
        ForeignKey("categories.id")
    )

    # Product Details
    material = Column(String(255))

    color = Column(String(100))

    size = Column(String(100))

    # Pricing
    price = Column(
        DECIMAL(10, 2),
        nullable=False
    )

    sale_price = Column(DECIMAL(10, 2))

    cost_price = Column(DECIMAL(10, 2))

    tax_percentage = Column(DECIMAL(5, 2))

    # Inventory
    stock_qty = Column(Integer, default=0)

    min_stock_alert = Column(Integer, default=5)

    # Images
    front_image = Column(String(500))

    back_image = Column(String(500))

    # Product Status
    is_active = Column(Boolean, default=True)

    is_featured = Column(Boolean, default=False)

    is_trending = Column(Boolean, default=False)

    is_new_arrival = Column(Boolean, default=False)

    day_of_the_deal = Column(Boolean, default=False)

    # SEO
    meta_title = Column(String(255))

    meta_keywords = Column(Text)

    meta_description = Column(Text)

    # Shipping
    weight = Column(DECIMAL(10, 2))

    length = Column(DECIMAL(10, 2))

    width = Column(DECIMAL(10, 2))

    height = Column(DECIMAL(10, 2))

    # Rating
    average_rating = Column(
        DECIMAL(3, 2),
        default=0
    )

    total_reviews = Column(
        Integer,
        default=0
    )

    # Dates
    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    updated_at = Column(
        DateTime(timezone=True),
        onupdate=func.now()
    )