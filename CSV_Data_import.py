import pandas as pd
import numpy as np

#Read Data
df = pd.read_csv("Data.csv")

#Data-Cleaning
df.columns = df.columns.str.strip().str.replace(' ', '_').str.replace('[^\w\s]', '').str.lower()
#important_rows = ["frame_colour", "frame_surface", "frame_material", "size_horizontal_[m]", "size_vertical_[m]", "frame_depth_[cm]"]
for column in ["size_horizontal_[m]", "size_vertical_[m]", "frame_depth_[cm]"]:
    df[column] = df[column].str.replace(',', '.').astype(float)

# Replace NaN with Mean
df.replace(0, np.nan, inplace=True)
mean_values = df[["size_horizontal_[m]", "size_vertical_[m]", "frame_depth_[cm]"]].mean()
df.fillna(mean_values, inplace=True)

#One-Hot-Encoding
df_encoded = pd.get_dummies(df, columns=["frame_colour", "frame_surface", "frame_material"])

# Combine important_rows with mean_values
cleaned_data = pd.concat([df[["size_horizontal_[m]", "size_vertical_[m]", "frame_depth_[cm]"]], df_encoded], axis=1)
cleaned_data.loc["Mean"] = mean_values

# Exporting to new CSV 
cleaned_data.to_csv("Cleaned_CSV.csv", index=False, float_format='%.2f')