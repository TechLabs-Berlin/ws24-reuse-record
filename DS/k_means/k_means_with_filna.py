import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt
import seaborn as sns

# k-means with filna -1 instead of replacing NaN with mean()

df = pd.read_csv("../original_data.csv")

df['Size Vertical [m]'] = df['Size Vertical [m]'].str.replace(',', '.').fillna(-1).astype(float)
df['Size Horizontal [m]'] = df['Size Horizontal [m]'].str.replace(',', '.').fillna(-1).astype(float)
df['Frame Depth [cm]'] = df['Frame Depth [cm]'].str.replace(',', '.').fillna(-1).astype(float)

selected_columns = ['Size Horizontal [m]', 'Size Vertical [m]', 'Frame Depth [cm]']

df_selected = df[selected_columns]
scaler = StandardScaler()
df_scaled = scaler.fit_transform(df_selected)

# Elbow-Methode for number of Cluster
wcss = []
for i in range(1, 11):
    kmeans = KMeans(n_clusters=i, init='k-means++', max_iter=300, n_init=10, random_state=0)
    kmeans.fit(df_scaled)
    wcss.append(kmeans.inertia_)

# Plot Elbow-Methode
plt.plot(range(1, 11), wcss)
plt.title('Elbow-Methode')
plt.xlabel('Anzahl der Cluster')
plt.ylabel('WCSS')  # Within-Cluster-Sum-of-Squares
plt.show()

plt.close()

# Number of Cluster
num_clusters = 3

# K-Means Clustering
df_selected['Cluster'] = kmeans.fit_predict(df_scaled)

# Cluster-Statistic
print(df_selected['Cluster'].value_counts())

# Scatterplot
df_scaled_with_cluster = pd.DataFrame(df_scaled, columns=['Dimension1', 'Dimension2', 'Dimension3'])
df_scaled_with_cluster['Cluster'] = df_selected['Cluster']
sns.scatterplot(x='Dimension1', y='Dimension2', hue='Cluster', data=df_scaled_with_cluster)
plt.title('K-Means Clustering')
plt.show()

# Mean of Cluster
cluster_means = df_selected.groupby('Cluster').mean()
print(cluster_means)

# DataFrame
pd.set_option('display.precision', 2)
pd.set_option('display.max_columns', None)
pd.set_option('display.expand_frame_repr', False)
print(df_selected)
