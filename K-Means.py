import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt
import seaborn as sns


#Import Data
df = pd.read_csv("Cleaned_CSV.csv")

df_selected = df.copy()

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

# Define Number of  Cluster
optimal_num_clusters = None
max_dif = -1

for i in range(1, len(wcss)):
    dif = wcss[i-1] - wcss[i]
    if dif > max_dif:
        max_dif = dif
        optimal_num_clusters = i + 1

# K-Means Clustering
kmeans = KMeans(n_clusters=optimal_num_clusters, init='k-means++', max_iter=300, n_init=10, random_state=0)
df_selected['Cluster'] = kmeans.fit_predict(df_scaled)

# Cluster-Statistik
print(df_selected['Cluster'].value_counts())

# Scatterplot
df_scaled_with_cluster = pd.DataFrame(df_scaled, columns=['Dimension{}'.format(i) for i in range(df_scaled.shape[1])])
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

# extracting Data as  JSON
df_selected.to_json("Data_Output_K-Means.json", orient="records")
