# mongoose crud templete
![npm](https://img.shields.io/npm/v/mongoose-crud-templete)

```bash
This project is an Express.js mongoose and folder setup  template for building a backend server that performs CRUD (Create, Read, Update,Delete)operations using a MongoDB database.
```

### Installation

```bash
🖱 # run this command to setup
 npm i mongoose crud templete
 npm i express cors bcrypt dotenv nodemon mongoose
🖱# Create the ".env" file and copy the "example .env" data to the .env file and replace the "URLS"
🖱# package.json file "dev": "nodemon server.js",
 npm run dev

```
## 🔑 Key Features:

### ⚙️ Database Connection:
```bash
mongodb atlas
or
mongodb compus
```


```bash
"Express.js Server:"
Sets up an "Express.js" server to handle HTTP requests on specified routes.
```
```Bash
"CRUD operations:"
Routes are defined for basic "CRUD" operations on a hypothetical "Users" collection via Mongoose.
```
```bash
"Endpoints:"
GET /: Returns a welcome message indicating that the backend is operational.
GET /api/getAllData: A placeholder endpoint for fetching a list of users.
GET /getSingleData/:id: A placeholder endpoint for fetching details of a specific user by ID.
POST /api/create: A placeholder endpoint for creating a new user.
PUT/PATCH /api/updateData/:id: A placeholder endpoint to update a specific user by ID.
DELETE /api/idBaseDataDelete/:id: A placeholder endpoint for deleting a user by ID.
```
```bash
"Global Error Handling:"
Basic error handling is incorporated to catch and log any errors during database connection and server operation.
```
##### 📋 Note : Ensure that a [.env file] set up, and replace the all Credentials.

### Description:
```bash
if(!userData){
         return res.status(404).json({msg: "User data not found"});
}
```
👇
মানে হচ্ছে যদি  **userData**  এর  মধ্যে  কোনো  data আসেনি বা  আগে  থেকেই  data  নেই  তাহলে  json  ফরম্যাটে  একটা এরর দিবে।
It means if there is no data in userData or there is no data already then it will give an error in json format.

## controller:
```bash
req.body
```
👇
ক্লায়েন্ট সাইট  থেকে  যে  ডাটা  গুলো  পাঠাবো  সেই  ডাটাগুলো  req.body  মধ্যে  আসবে।  আবার  req.body  এর  ডাটা গুলো  স্কিমা  মধ্যে পাঠাবো। আবার  স্কিমা সেই  ডাটা গুলো ভ্যালিট  কি না চেক  করে  mongodb  এর  কালেকশন এর  মধ্যে পাঠাবে।
```bash
const hashPassword = await bcrypt.hash(req.body.password, 10)
```
👇
 এই লাইনে, ব্যবহারকারীর পাসওয়ার্ডকে bcrypt হ্যাশিং এর মাধ্যমে হ্যাশ করা হয়। এটি কেয়ার পাসওয়ার্ড হ্যাশিং এর জন্য 10 রাউন্ড ব্যবহার করে।

```bash
  req.body.password = hashPassword
  ```
 এই লাইনে, হ্যাশিং করা পাসওয়ার্ডটি ব্যবহারকারীর পাসওয়ার্ড ফিল্ডে প্রতিস্থাপন করা হয়।


 **আপনি যেই api  নিয়ে কাজ করবেন সেটা সেই  controller  folder  গিয়ে  কাজ করবেন। মানে যদি  আপনার  একটা  api  কে  Delete, post, get, getSignData/: id, put /patch  করতে লাগে/লাগতেছে  তাহলে সেই কন্ট্রোলার ফোল্ডার এ গিয়ে একজায়  Delete , post , get,getSignData/: id, put /patch এর  কাজটি করবেন । এবং server.js এ গিয়ে**
 ```bash
 app.use("/api" , যেই controller  তা যে router  folder  require করেছি সেই  router  টা  এখানে  require  করে  দিবো। )
```

**server  এ একবার সেই api  router  app.use এ  বসালে  (  Delete , post , get, getSignData/: id , put /patch) এর  সব কাজ  করতে পারবে।**


"mongoose" মডিউলটি ব্যবহার করা হয় MongoDB ডাটাবেসের সাথে ইন্টারফেসে কাজ করার জন্য। এর মাধ্যমে আপনি MongoDB ডাটাবেস সংযোগ করতে, তাতে ডেটা সংগ্রহ করতে, তা পরিবর্তন করতে, ডেটা পরিচালনা করতে এবং অনেক অন্যান্য অপারেশন করতে পারবেন।

"required: true" মডেলের ফিল্ড ডেফিনিশনের একটি প্যারামিটার যা ব্যবহার করা হয় মডেলের একটি ফিল্ড অবশ্যই আবশ্যক হওয়ার জন্য। অর্থাৎ, যদি একটি ফিল্ডে "required: true" সেট করা হয়, তাহলে সেই ফিল্ডের মান নির্ধারিত করা অবশ্যই হবে ডেটা সংরক্ষণ অথবা আপডেটের সময়। এই প্যারামিটারটি ব্যবহার করা হয় ডেটাবেসের ডেটা ভ্যালিডেশন এবং পুরন করার জন্য।
required: true" সেট করা হয়েছে, তাই এই ফিল্ডগুলি সংরক্ষণ বা আপডেটের সময় অবশ্যই উপস্থিত থাকতে হবে।

<!-- CONTACT -->
## Contact:

Linkedin - [Tomor-chandra-roy](https://www.linkedin.com/in/tomor-chandra-roy/)
 Email- tomorchandraroyjob943@gmail.com



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
