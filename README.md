1. **How to start the app**

   In both frontend and backend directory install the packages with

   ```shell
   npm install
   ```

   In the backend directory start the Node server with

   ```shell
   npm run start
   ```

   In the frontend directory start Gatsby in development mode with

   ```shell
   gatsby develop
   ```

   The frontend will be available on Port 8000 and the backend will be assigned to Port 8080

2. **How to use the app**

   On the index Page of the Frontend you will see two Links in the sidebar wich lead you to the two exams. The first exam displays data from a REST-API in a table with pagination. If you click on one of the entry it loads a second table which contains the comments related to the post. The second exam provides a button which connects/disconnects to the websocket of the Node server. If the connection is active, you will be provided with random picked animals that change every 5 seconds. Have fun :)
