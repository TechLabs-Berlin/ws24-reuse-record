import pandas as pd
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt
import seaborn as sns
import hdbscan

data = pd.read_json("Data.json")

#Rename in pythonic Style
def rename_keys(d):
    new_dict = {}
    for key, value in d.items():
        if isinstance(value, dict):
            value = rename_keys(value)
        new_key = key.replace(" ", "_").lower() 
        new_dict[new_key] = value
    return new_dict

data = rename_keys(data)
df = pd.DataFrame(data)

selected_columns = ['size_horizontal_[m]', 'size_vertical_[m]', 'frame_depth_[cm]']
df_selected = df[selected_columns]

# Scaling Data
scaler = StandardScaler()
df_scaled = scaler.fit_transform(df_selected)

# Cluster  HDBSCAN
clusterer = hdbscan.HDBSCAN(min_cluster_size=5)
df_selected['Cluster'] = clusterer.fit_predict(df_scaled)

# Visualizing  Cluster
sns.scatterplot(x='Size Horizontal [m]', y='Size Vertical [m]', hue='Cluster', data=df_selected)
plt.title('HDBSCAN Clustering')
plt.show()

print(df_selected['Cluster'].value_counts())

# Mean of  Cluster
cluster_means = df_selected.groupby('Cluster').mean()
print(cluster_means)

# Show DataFrame
pd.set_option('display.precision', 2)
pd.set_option('display.max_columns', None)
pd.set_option('display.expand_frame_repr', False)
print(df_selected)

# Daten als JSON extrahieren
df_selected.to_json("Data_output.json", orient="records")
