from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

import os

from database import engine
from database import Base

# Import Models
from models.product import Product
from models.category import Category

# Import Routers
from routers.product import router as product_router
from routers.category import router as category_router

# Create Tables
Base.metadata.create_all(bind=engine)

# Create media folder automatically
os.makedirs("media", exist_ok=True)

# FastAPI App
app = FastAPI(
    title="VaisKart API",
    version="1.0.0"
)

# STATIC MEDIA
app.mount(
    "/media",
    StaticFiles(directory="media"),
    name="media"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(product_router)
app.include_router(category_router)

# Home Route
@app.get("/")
def home():

    return {
        "message": "VaisKart Backend Running"
    }
