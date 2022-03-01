### Back-End Setup
1. Go to mongo shell either with command mongosh or the destop app, type 
    ```
    db.dropDatabase()
    ```
2. Move(cd) to the backend folder, enter command<br>
    ```
    mongoimport --db test --collection donuts --type json --file ./src/data/donuts.json --jsonArray
    ```

    ```
    mongoimport --db test --collection drones --type json --file ./src/data/drones.json --jsonArray 
    ```

    ```
    node src/data/seed.js
    ```
3. run 
    ```
    npx tsc
    ``` 
    and 
    ```
    node src/index.js
    ```
    to start the database