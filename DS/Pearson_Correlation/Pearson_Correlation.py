import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv('../cleaned_data.csv')

# Scatterplot with Regressionlinie and Pearson-Correlation for size_horizontal_[m] and frame_depth_[cm]
sns.regplot(x='size_horizontal_[m]', y='frame_depth_[cm]', data=df)
plt.ylim(0,)
plt.show()

# Scatterplot with Regressionlinie and Pearson-Correlation for size_horizontal_[m] and size_vertical_[m]
sns.regplot(x='size_horizontal_[m]', y='size_vertical_[m]', data=df)
plt.ylim(0,)
plt.show()

# Scatterplot with Regressionlinie and Pearson-Correlation for size_vertical_[m] and frame_depth_[cm]
sns.regplot(x='size_vertical_[m]', y='frame_depth_[cm]', data=df)
plt.ylim(0,)
plt.show()
