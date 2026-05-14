from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Boolean

from database import Base


class Category(Base):

    __tablename__ = "categories"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String(255), nullable=False)

    slug = Column(String(255), unique=True)

    image = Column(String(500))

    is_active = Column(Boolean, default=True)