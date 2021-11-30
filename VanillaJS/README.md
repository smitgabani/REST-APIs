# **Restful API with vanilaJS**

**Project does not have a link**

## **The purpose of this project is to learn and practice concepts related to:**

- Building a REST API
- MVC Architecture Pattern
- Understanding what express does
- Become acquainted with req and res and a little of http, fs.

### **I used the following while creating this project**

- Testing API Endpoints (Postman)
- RESTful API guidelines
- HTTP (GET, POST, PUT, PATCH, DELETE, status codes)

### **Application Architecture**

![image](https://github.com/smitgabani/REST-APIs/blob/main/VanillaJS/assets/vanilaJS_restAPI.png)


### **API Endpoints**
```
URI                     Verb        Operation   Success         Failure
-------------------------------------------------------------------------------
/api/products           GET         Read        200 OK          404 Not Found
/api/products           POST        Create      201 Created     405 Not Allowed
/api/products/:sku      GET         Read        200 OK          404 Not Found
/api/products/:sku      PUT         Update      
/api/products/:sku      DELETE      Delete      
```

### **Usage**
```
cd VanillaJS
# Install dependencies
npm install

# Run in develpment
npm run dev

# Run in production
npm start
```

### **Link used**