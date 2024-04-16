import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.metrics.pairwise import pairwise_distances
import seaborn as sns
import hdbscan
from sklearn.preprocessing import StandardScaler

#Import Data
df = pd.read_csv("../cleaned_data.csv")

selected_columns = ['size_horizontal_[m]', 'size_vertical_[m]', 'frame_depth_[cm]']
df_selected = df[selected_columns].copy()

scaler = StandardScaler()
df_scaled = scaler.fit_transform(df_selected)

# Similarity Matrix
similarity_matrix = pairwise_distances(df_scaled, metric='euclidean')

# HDBSCAN Clustering based on Similarity Matrix
clusterer = hdbscan.HDBSCAN(metric='precomputed')
df['Cluster'] = clusterer.fit_predict(similarity_matrix)

# Visualisation
plt.figure(figsize=(8, 6))
plt.scatter(df['size_horizontal_[m]'], df['size_vertical_[m]'], c=df['Cluster'], cmap='viridis')
plt.xlabel('Size Horizontal [m]')
plt.ylabel('Size Vertical [m]')
plt.title('HDBSCAN Clustering Similarity Matrix')
plt.show()

features = ['size_horizontal_[m]', 'size_vertical_[m]', 'frame_depth_[cm]']
X = df[features] 

# Cluster  HDBSCAN
plt.figure(figsize=(8, 6))
clusterer = hdbscan.HDBSCAN(min_cluster_size=3, )
df['Cluster'] = clusterer.fit_predict(df_scaled)

# Visualizing Pairplot
plt.figure(figsize=(4, 2))
sns.scatterplot(data=df, x='size_horizontal_[m]', y='size_vertical_[m]', hue='Cluster')
plt.figure(figsize=(4, 2))
sns.pairplot(df, hue='Cluster', height=1.5, aspect=1.2)
plt.show()

# Scatterplot Frame_Depth and Sizes
plt.figure(figsize=(8, 6))
df_scaled_with_cluster = pd.DataFrame(df_scaled, columns=['Dimension{}'.format(i) for i in range(df_scaled.shape[1])])
df_scaled_with_cluster['Cluster'] = df['Cluster']
sns.scatterplot(x='Dimension1', y='Dimension2',  hue='Cluster', data=df_scaled_with_cluster)
plt.title('HDBSCAN Clustering')
plt.show()

# Scatterplot 
plt.figure(figsize=(8, 6))
sns.scatterplot(x='size_horizontal_[m]', y='size_vertical_[m]',  hue='Cluster', data=df)
plt.title('HDBSCAN Clustering')
plt.xlabel('Size Horizontal [m]')
plt.ylabel('Size Vertical [m]')
plt.show()

# Scatterplot 
plt.figure(figsize=(8, 6))
sns.scatterplot(x='size_horizontal_[m]', y='frame_depth_[cm]',  hue='Cluster', data=df)
plt.title('HDBSCAN Clustering')
plt.xlabel('Size Horizontal [m]')
plt.ylabel('Frame Depth [cm]')
plt.show()

print(df['Cluster'].value_counts())

# Mean of  Cluster
cluster_means = df.groupby('Cluster').mean()
print(cluster_means)

# Show DataFrame
pd.set_option('display.precision', 2)
pd.set_option('display.max_columns', None)
pd.set_option('display.expand_frame_repr', False)
print(df)

# Extracting as  JSON
df.to_json("data_output_hdbscan.json", orient="records")
