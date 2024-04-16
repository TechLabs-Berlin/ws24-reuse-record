<h1 align="center">Reuse Record</h1>

<h5 align="center">
  <a href="#DS">DS</a>  |
  <a href="#UX">UX</a>  |
  <a href="#Frontend">Frontend</a>  |
  <a href="#Backend">Backend</a>  |
  <a href="#Team">Team</a>
</h5>

## <h2>Presentation</h2>

[Link](https://docs.google.com/presentation/d/1tFpVBlOtR2tdjKv4iYD2lg9xjpwsJLRYv0PWfzdhkak/edit?usp=sharing)

## <h2>DS</h2>
<h3>Data Cleaning and Exploration:</h3>
The DS repository is dedicated to the preprocessing and exploration of raw data sourced from a CSV file. Initially, the data is scrubbed to ensure its usability, involving techniques such as handling missing values (NaN), imputing -1 values, and eliminating incomplete rows. Following this, various encoding methods including one hot encoding and label encoding are tested to ready the categorical data for analysis.

<h3>Encoding and Analysis:</h3>
Following data cleaning, exploratory data analysis (EDA) is conducted to uncover hidden patterns and distributions within the dataset. Pearson correlation analysis is then performed to elucidate relationships between different variables.

<h3>Correlation and Clustering:</h3>
The application of K-means clustering allows for the grouping of similar data points, with a focus on categorizing window types based on specific features. Additionally, an exploration of different scalers is undertaken to evaluate their impact on analysis results, including methods such as Min-Max scaling and Standard scaling.

<h3>Advancing to HDBSCAN:</h3>
In pursuit of alternative clustering methods, HDBSCAN (Hierarchical Density-Based Spatial Clustering of Applications with Noise) is explored. This technique offers the ability to identify clusters of varying shapes and sizes, particularly advantageous in datasets where traditional methods may yield suboptimal results.

<h3>Synthetic Data Generation and API Integration:</h3>
Beyond clustering, the DS repository offers functionalities for synthetic data generation and integration with external APIs. These features expand the avenues for data exploration and analysis, fostering a deeper understanding of the dataset and its potential applications.

<h3>Conclusion:</h3>
Through meticulous data preprocessing, exploratory analysis, and advanced clustering techniques, this repository uncovers valuable insights and patterns within the dataset. These findings serve as a robust foundation for subsequent analysis and decision-making processes. With an open invitation to exploration and discovery, the DS repository contributes to the advancement of data analysis endeavors.

## <h2>UX</h2>

<p>The process began with conducting interviews with Baukreisel members to establish the requirements of the future users, as well as gaining insight into their on-site work processes, pain points, and current technologies in use. The interviews were recorded to ensure that all information gathered would be utilized in the analysis process. These interviews served as the basis for creating a user persona, scenario and stories for the project.</p>

<p>Then, a set of features was developed which allowed to agree on the MVP.</p>

<p><img src="https://github.com/TechLabs-Berlin/ws24-reuse-record/blob/main/UX/2.%20Analysis/2.1%20Features/Features_240411.png?raw=true" align="center"/>
</p>

<p>Understanding the process on-site and developing the user flow was crucial in creating user-friendly surveying form that speeds up the process of surveying windows.</p>

<p><img src="https://github.com/TechLabs-Berlin/ws24-reuse-record/blob/main/UX/2.%20Analysis/2.2%20User%20Flow/User%20Flow_240411.png?raw=true align="center"/></p>

<p>This laid the foundation for building wireframes in Figma. We decided to prioritize developing the prototype for a mobile phone. Given the volume of information and limited screen space, the input form had to be split into separate steps. The wireframe was tested regarding the comfort of use of the UI elements; necessary modifications were made (e.g. changing the position of the buttons for better reachability).</p>
<p>
<img src="https://i.ibb.co/3srJ91Q/canvas1.png" width="49%"/>
<img src="https://i.ibb.co/q1HWLV4/Untitled2.png" width="49%"/></p>

<p>Following that, a prototype of the catalog displaying surveyed windows was developed in several variants. One of the main features of the catalogue is displaying various types of windows, along with a detailed view of each window.</p>

<p>
<img src="https://i.ibb.co/9hDzTfc/canvas.png" width="32%"/>
<img src="https://i.ibb.co/n8LPpzn/canvas1.png" width="32%"/>
<img src="https://i.ibb.co/swJBwZX/canvas2.png" width="32%"/>
</p>

<p>User tests were conducted with three participants, who were given a sequence of tasks to complete and asked to comment on their actions. The process was carried out via video calls and recorded for analysis.</p>


## <h2>Frontend</h2>

I started a new  React js project in our projects Git repository and worked on different branches. I made short commits regularly and pushed them to my branch. Now I’m comfortable using Git for managing project files while working on different features and collaborating with other devs..

## <h3>Working with react and tailwind css</h3>
At first, I used React and Tailwind CSS for a desktop version of the app. I learned about components, React Router for navigation, and data structures. Now I can convert objects in data structures.

## <h3>Working with useState and useEffect</h3>
I used useState to manage the current application's states and useEffect to carry out any action on change.I created a visualization for a window configurator using the given data and configurations, like rows and columns count, cells'  and dimensions, etc and added logical functionality.

## <h3>Working with React native Expo and Typescript</h3>
After receiving feedback from the midterm presentation, I switched to learning React Native with Expo and TypeScript, which were needed for the project as we were focusing on users who will be using the app on their mobile phones.. I used Expo components, useState, useEffect, and useContext to manage child Sate.

## <h3>Working with backend API</h3>
 I also worked with APIs for data retrieval and included calculations in the frontend.utilizing calculate function, to consistently visualize the window configurator throughout the user journey.

## <h2>Backend</h2>

<p>The first task was to create an extensive analysis of windows and how they are constructed, as well as wether there are already standards for describing them in a digital way.</p> 
<p>All results of this research can be found in the following Miro link: https://miro.com/app/board/uXjVN2Hi_FY=/?share_link_id=574231864237</p>

<h3>Ontology and Data Schema</h3>
<p>Despite the existence of .ifc which is the standard data exchange format between digital platforms and software in the building industry, there exists no way of describing a huge variety of windows in a standardized way. Because of that, I first created an ontology that defines an overall naming schema for all the different elements in a window.</p>
<p>Building further on that, a technical drawing was created that clarified the meaning of every property and linked that to a graphical representation. This proofed to be an important tool of documentation that enabled easy and precise communication between the different team members. The drawings and the ontology can be found in the miro link.</p>

<h3>Express Server and Mongo DB Atlas Database</h3>

<p>The project is build on a MERN Stack and thus is using Express as a server and Mongo/Mongoose as the Database. To make the Server and Database accessible from everywhere on the internet, node/express/mongoose are running on render.com on the web and the Mongo Database is hosted on MongoDB Atlas.</p> 
<p>According to the documentation a mongoose model was created, that forms the basis for validating the data schema. The data structure is build in hierarchical way, so that properties of different parts of the window can be accessed independently. This way it is for example easily possible to list all the different glazing elements in the catalogue no matter to which window they are belonging.</p>
<p>Different "full CRUD" API routes that deliver tailored data for the FrontEnd, DataScience and DeepLearning were created to centralize communication with the database. This is making sure that the data structure is always validated by mongoose before it is written to the database (server side validation). All routes are equipped with custom error handling and messages. Besides the properties describing a window also photos are stored in the database. Seed data was created to fill the catalogue of windows.</p>
<p>To test the communication with the backend and to contribute to the FrontEnd I created call.js that is using axios to execute all the different possible api calls.</p>

<h3>windowCalc</h3>

<p>windowCalc was created to handle the complex data structure, make sure that only valid windows are created and most importantly calculate all the different properties of a window no matter how many properties you define in the input. This way the user but also DS and ImageRecognition can input just what they recognized and still get a full and valid window object.</p>
<p>windowCalc is centrally stored and can be used everywhere in the app. Currently it is especially used as part of the FrontEnd to create a window object in every step of the configuration. The output is then used to create the graphical representation in the "What you see is what you get" editor. All the defaults are centrally stored in the function and are used when there is no user input for a certain property. When parts of the object are changed in the next step of the configuration, windowCalc is recalculating all necessary properties. Which properties are user set and which are calculated is defined in the documentation in blue (set) and yellow (calculate).</p>
<p>windowCalc is not only able to calculate dimensions but can also pick a u-Value depending on the type of glazing.</p>
<p>Validation and Error handling is making sure that you can only create valid windows. Error messages are telling you why a window could not be created.</p>

## <h2>Team</h2>

Back End & Front End: Jannik Oslender<br>
Data Science: Natalie Lunau<br>
Front End: Pratima Maharjan<br>
User Experience: Marta Jasińska

<h3>Mentors</h3>

Sueon Ahn<br>
Rafael Saraiva

