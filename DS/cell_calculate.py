import json

# Calculate Net Glass Area
def calculate_net_glass_area(cell):
    glass_area = cell["glas"]["width"] * cell["glas"]["hight"]
    return glass_area

# Calculate Area  Window(including frame and glass)
def calculate_window_area(cell):
    frame_area = (cell["frame"]["width"] * cell["frame"]["hight"]) - (cell["frame"]["profile"]["width"] * cell["frame"]["profile"]["depth"])
    glass_area = cell["glas"]["width"] * cell["glas"]["hight"]
    return frame_area + glass_area

# Calculate Frame Area
def calculate_frame_area(cell):
    frame_area = (cell["frame"]["width"] * cell["frame"]["hight"]) - (cell["frame"]["profile"]["width"] * cell["frame"]["profile"]["depth"])
    return frame_area

# Calculate Total Net Glass Area
def calculate_total_net_glass_area(grid):
    total_net_glass_area = 0

    for cell in grid["cells"]:
        total_net_glass_area += calculate_net_glass_area(cell)

    return total_net_glass_area

def calculate_total_frame_area(grid):
    total_frame_area = 0

    for cell in grid["cells"]:
        total_frame_area += calculate_frame_area(cell)

    return total_frame_area


# Grid
def calculate_total_window_area(grid):
    total_area = 0

    for cell in grid["cells"]:
        total_area += calculate_window_area(cell)

    return total_area


with open("pfad/datei.json", "r") as file:
    grid_data = json.load(file)

# Constants
window_area = calculate_total_window_area(grid_data)
heat_transfer_coefficient = 0.8 #example

# Calculate Heat transfer
total_heat_transfer = window_area * heat_transfer_coefficient

print("Total Window Area:", window_area)
print("Total Heat Transfer:", total_heat_transfer)
print("Total Heat Transfer for Glass Area Only:", total_heat_transfer)


