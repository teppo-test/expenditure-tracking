CREATE TABLE receipt(
    id INT IDENTITY(1,1) PRIMARY KEY,
    market_name VARCHAR(75),
    receipt_create_date DATE,
    create_time TIMESTAMP
)

CREATE TABLE receipt_item(
    id INT IDENTITY(1,1) PRIMARY KEY,
    receipt_id INT FOREIGN KEY REFERENCES receipt(id),
    product_name VARCHAR(150),
    price FLOAT,
    sale BIT,
    sale_amount INT,
    real_price FLOAT,
    market_name VARCHAR(75),
    create_time TIMESTAMP
)

CREATE TABLE market(
    name VARCHAR(75) PRIMARY KEY,
    latitude FLOAT,
    longtitude FLOAT
)