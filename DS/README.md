Data Cleaning and Exploration
This repository focuses on the preprocessing and exploration of raw data extracted from a given CSV file. The initial step involves cleaning the data to ensure its usability, which includes handling missing values (NaN) using various techniques such as mean imputation, finning in -1  and deletion of incomplete rows.
Once the data is cleaned, different encoding methods like one hot encoding and label encoding are experimented with to prepare categorical data for analysis. 

Encoding and Analysis
Subsequently, exploratory data analysis (EDA) is conducted to uncover underlying patterns and distributions within the dataset.
To further understand the dataset, Pearson correlation analysis is performed to identify relationships between different variables. 

Correlation and Clustering
The K-means clustering is employed to group similar data points, particularly focusing on grouping window types based on certain features. Experimentation with various scalers is conducted to assess their impact on the analysis results. Different scaling methods such as Min-Max scaling and Standard scaling are explored to understand how they influence the outcome of the analysis.

Advancing to HDBSCAN
In an effort to explore alternative clustering methods, HDBSCAN (Hierarchical Density-Based Spatial Clustering of Applications with Noise) is considered. This method offers the capability to find clusters of varying shapes and sizes, which can be beneficial in datasets where traditional clustering methods might yield suboptimal results.

Synthetic Data Generation and API Integration
This repository also includes files for synthetic data generation and integration with an external API. These functionalities provide additional avenues for data exploration and analysis, allowing for a more comprehensive understanding of the dataset and its potential applications.

Conclusion
Through meticulous data preprocessing, exploration, and advanced clustering techniques, valuable insights and patterns are extracted from the dataset. This provides a solid foundation for further analysis and decision-making processes. This repository invites exploration and discovery in the realm of data analysis.