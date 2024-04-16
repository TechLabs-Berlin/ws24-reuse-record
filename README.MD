Data Cleaning and Exploration This repository focuses on the preprocessing and exploration of raw data extracted from a given CSV file. The initial step involves cleaning the data to ensure its usability, which includes handling missing values (NaN) using various techniques such as mean imputation, finning in -1 and deletion of incomplete rows. Once the data is cleaned, different encoding methods like one hot encoding and label encoding are experimented with to prepare categorical data for analysis.

Encoding and Analysis Subsequently, exploratory data analysis (EDA) is conducted to uncover underlying patterns and distributions within the dataset. To further understand the dataset, Pearson correlation analysis is performed to identify relationships between different variables.

- UX: Marta Jasińska
- Web Development: Pratima Maharjan & Jannik Oslender
- Data Science: Natalie Lunau

Correlation and Clustering The K-means clustering is employed to group similar data points, particularly focusing on grouping window types based on certain features. Experimentation with various scalers is conducted to assess their impact on the analysis results. Different scaling methods such as Min-Max scaling and Standard scaling are explored to understand how they influence the outcome of the analysis.

Advancing to HDBSCAN In an effort to explore alternative clustering methods, HDBSCAN (Hierarchical Density-Based Spatial Clustering of Applications with Noise) is considered. This method offers the capability to find clusters of varying shapes and sizes, which can be beneficial in datasets where traditional clustering methods might yield suboptimal results.

Synthetic Data Generation and API Integration This repository also includes files for synthetic data generation and integration with an external API. These functionalities provide additional avenues for data exploration and analysis, allowing for a more comprehensive understanding of the dataset and its potential applications.

This problem is especially key when realizing how important data is to create scalable reuse and refurbishment processes.
The current solution are either excel sheets or unsatisfying apps that cannot handle the complexity of e.g. window elements and require you to input data over and over again when creating the record on site.

🚀 Reuse Record aims to change that!

Together we are going to develop a web app that simplifies and speeds up the recording process by lot and creates structured data that later on could be used in the reuse and refurbishment process by humans and machines.
This is accomplished by creating an intuitive and dynamic interface that lets you upload a photo and provides inputs for all important properties of the element (UX & WD FE).

Cluster analyses, utilizing methods such as K-Means and HDBSCAN, attempt to group windows based on certain features for a recommendation system. Different scaling methods are explored to understand their influence on the outcome of the analysis. This comprehensive approach ensures robust insights for effective decision-making in the recommendation system development.(DS)

A graph database is storing all the information in a machine readable way and theoretically allows you to retrieve also complex implicit knowledge. (WD BE & DS)
To make the scope feasible the project is focused on the recording and surveying of window elements.
Windows embody a high amount of carbon, are thrown away by the thousands and are in every building for you to test the app with!

The project is kindly supported with expert knowledge and testing by Baukreisel.
Baukreisel is a non profit interdisciplinary collective of 13 architects, engineers, social scientist and lawyers working towards reuse at scale in the building industry. More Info on GitHub
If all goes well Reuse Record :cyclone: or a further developed Version of it could even be used and tested in one of our future living labs for which we are currently applying for funding.
Conclusion Through meticulous data preprocessing, exploration, and advanced clustering techniques, valuable insights and patterns are extracted from the dataset. This provides a solid foundation for further analysis and decision-making processes. This repository invites exploration and discovery in the realm of data analysis.
