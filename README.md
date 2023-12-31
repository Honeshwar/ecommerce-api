# Ecommerce API

Design an API for an ecommerce platform admin to manage product inventory

```
Tech Stack: Node.js and Mongo DB
```

## Features

#### 1. Add Product to the database :

- Models / Schemas:

```
Products [fields: id, name, quantity]
```

- API to add products to the database

```
URL [POST]: /products/create
```

#### 2. Get list of products

```
URL [GET] : /products
```

#### 3. Delete products

```
URL [DELETE] : /products/:id
```

#### 4. Update quantity of a product (can be incremented or decremented)

```
URL [POST] : /products/:id/update_quantity/?number=10
```

## File structure

here you are looking at directory structure with root level files only.

```sh
        ecommerce-api
            |
            ├── node_modules
            |
            ├── configs
            |
            ├── controllers
            |
            ├── models
            |
            ├── routers
            |
            ├── index.js
            |
            ├── package-lock.json
            |
            ├── package.json
            |
            └── readme.md


```

## How to setup on local machine

1. To use this repository your machine should have [node](https://nodejs.org/en/), npm, [mongodb](https://docs.mongodb.com/manual/installation/) , and git . Now check for this things is install or not :

```go
node --version
npm --version
mongodb --version
git --version
```

2. Clone repository :

```go
git clone  https://github.com/Honeshwar/ecommerce-api.git
cd ecommerce-api
```

3. Install dependencies :

```go
npm install
```

4. Now, run the application using this command :

```go
npm run dev  or npm start
```

# " Now , Ecommerce API is running "

## Note : Formate of response data

- Get req

```
{
    data:{
        products:[
            {
                id: 1,
                name: watch,
                quantity: 12
            },
            {
                id: 2,
                name: laptop,
                quantity: 10
            }
        ],
        message:"..."
    }
}
```

- update/post req

```
{
    data:{
        product: {
            id: 2,
            name: laptop,
            quantity: 10
        },
        message:"..."
    }
}
```

- delete req and also in case of error

```
{
    data:{
        message:"..."
    }
}
``

```
