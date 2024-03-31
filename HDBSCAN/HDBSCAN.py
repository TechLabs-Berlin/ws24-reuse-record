import pandas as pd
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt
import seaborn as sns
import hdbscan

#Import Data
df = pd.read_csv("Cleaned_Data.csv")

# Scaling Data
scaler = StandardScaler()
df_scaled = scaler.fit_transform(df)

# Cluster  HDBSCAN
clusterer = hdbscan.HDBSCAN(min_cluster_size=5)
df['Cluster'] = clusterer.fit_predict(df_scaled)

# Visualizing  Cluster
sns.scatterplot(data=df, x='size_horizontal_[m]', y='size_vertical_[m]', hue='Cluster')
sns.pairplot(df, hue='Cluster')
plt.title('HDBSCAN Clustering')
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
df.to_json("Data_Output_HDBSCAN.json", orient="records")
