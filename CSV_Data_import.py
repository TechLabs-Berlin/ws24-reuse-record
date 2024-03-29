import pandas as pd
import numpy as np

#Read Data
df = pd.read_csv("Data.csv")

#Data-Cleaning
df.columns = df.columns.str.strip().str.replace(' ', '_').str.replace('[^\w\s]', '').str.lower()
#important_rows = ["frame_colour", "frame_surface", "frame_material", "size_horizontal_[m]", "size_vertical_[m]", "frame_depth_[cm]"]
for column in ["size_horizontal_[m]", "size_vertical_[m]", "frame_depth_[cm]"]:
    df[column] = df[column].str.replace(',', '.').astype(float)

#Droping Columns
columns_to_drop = ['recordid', 'images', 'renamedimages', 'newname', 'isspecial', 'a1',
       'a2', 'a3', 'a4', 'b1', 'b2', 'b3', 'b4', 'c1', 'c2', 'c3', 'c4', 'd1',
       'd2', 'd3', 'd4', 'outside_different_?', 'frame_colour_outside', 'frame_surface_outside',
       'frame_material_outside', 'glazing_type']
df.drop(columns=columns_to_drop, inplace=True)

# Replace NaN with Mean
df.replace(0, np.nan, inplace=True)
mean_values = df[["size_horizontal_[m]", "size_vertical_[m]", "frame_depth_[cm]"]].mean()
df.fillna(mean_values, inplace=True)

#One-Hot-Encoding
df_encoded = pd.get_dummies(df, columns=["frame_colour", "frame_surface", "frame_material"], drop_first=True)
df_encoded.replace({True: 1, False: 0}, inplace=True)

# Exporting to new CSV 
columns_to_export = ["size_horizontal_[m]", "size_vertical_[m]", "frame_depth_[cm]"]
columns_to_export.extend(df_encoded.columns)
df_encoded.to_csv("Cleaned_Data.csv", columns=columns_to_export, index=False, float_format='%.2f')
