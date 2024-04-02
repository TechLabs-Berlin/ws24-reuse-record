import pandas as pd
import numpy as np


# Data
data = {
    'frame_colour': [3, 3, 3, 3,  0, 2, 2, 2, 2, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1],
    'frame_surface': [2, 2, 1, 0, 0, 0, 0, 1, 1, 0, 2, 2, 1, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 3],
    'frame_material': [1, 2, 2, 0, 0, 0, 0, 2, 2, 2, 0, 0, 1, 2, 2, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    'size_horizontal_[m]': [1.00, 1.48, 1.29, 1.36, 1.39, 1.42, 2.16, 1.75, 0.69, 0.86, 1.58, 1.78, 1.19, 1.17, 0.96, 1.85, 1.28, 1.27, 1.16, 0.42, 1.13, 1.19, 1.48, 1.48, 1.48, 1.48, 1.48, 1.23, 3.25, 0.96, 1.21, 1.59, 3.11, 3.12, 1.55],
    'size_vertical_[m]': [1.52, 1.52, 1.34, 2.37, 1.45, 1.45, 1.23, 0.57, 0.56, 1.60, 1.29, 1.20, 1.28, 0.94, 0.58, 1.53, 1.32, 1.31, 2.58, 2.01, 1.83, 1.87, 1.52, 1.52, 1.52, 1.52, 1.52, 1.23, 1.34, 2.18, 1.21, 1.47, 2.02, 2.01, 2.84],
    'frame_depth_[cm]': [7.07, 7.07, 4.50, 5.50, 4.00, 6.00, 9.00, 9.00, 9.00, 10.00, 7.00, 7.00, 7.00, 9.00, 9.00, 8.00, 8.00, 8.00, 7.00, 7.00, 9.00, 4.00, 7.07, 7.07, 7.07, 7.07, 7.07, 8.00, 6.50, 6.00, 6.00, 6.50, 6.00, 6.00, 6.00]
}

for key, value in data.items():
    print(f'Länge von {key}: {len(value)}')

df = pd.DataFrame(data)

# New Data Points
n_samples = 1000

# Bootstrapping
bootstrapped_data = []

for _ in range(n_samples):
    bootstrap_sample = df.sample(n=len(df), replace=True)
    bootstrapped_data.append(bootstrap_sample)

bootstrapped_df = pd.concat(bootstrapped_data, ignore_index=True)

# Exporting Bootstrapped Data
bootstrapped_df.to_csv('bootstrapped_data.csv', index=False)



print(bootstrapped_df.head())
