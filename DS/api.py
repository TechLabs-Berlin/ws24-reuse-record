import requests

def get_window_data():
    url = "https://ws24-reuse-record.onrender.com/windows"
    response = requests.get(url)
    
    if response.status_code == 200:
        print(response.text)
        window_configs = response.json()
        return window_configs
    else:
        print("Error: ", response.status_code)
        return None
