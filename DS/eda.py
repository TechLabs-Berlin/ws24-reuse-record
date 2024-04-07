import matplotlib.pyplot as plt
import pandas as pd


#Read Data
df = pd.read_csv("cleaned_data.csv")

#Histogram size_horizontal
plt.hist(df['size_horizontal_[m]'], bins=10, color='skyblue', edgecolor='black')
plt.xlabel('size_horizontal_[m]')
plt.ylabel('Frequency')
plt.title('Histogram of size_horizontal_[m]')
plt.show()


# Histogram  size_vertical_[m]
plt.hist(df['size_vertical_[m]'], bins=10, color='salmon', edgecolor='black')
plt.xlabel('size_vertical_[m]')
plt.ylabel('Frequency')
plt.title('Histogram of size_vertical_[m]')
plt.show()

# Histogram frame_depth_[cm]
plt.hist(df['frame_depth_[cm]'], bins=10, color='lightgreen', edgecolor='black')
plt.xlabel('frame_depth_[cm]')
plt.ylabel('Frequency')
plt.title('Histogram of frame_depth_[cm]')
plt.show()

# Boxplot size_horizontal_[m], size_vertical_[m] und frame_depth_[cm]
plt.figure(figsize=(10, 6))
plt.boxplot([df['size_horizontal_[m]'], df['size_vertical_[m]'], df['frame_depth_[cm]']], 
            labels=['size_horizontal_[m]', 'size_vertical_[m]', 'frame_depth_[cm]'])
plt.ylabel('Value')
plt.title('Boxplot of size_horizontal_[m], size_vertical_[m] and frame_depth_[cm]')
plt.show()