import os

# Path to the "icons" folder
ICON_FOLDER_PATH = './icons'  # Adjust if needed to the full path

def list_icon_folders():
    """
    List all subfolders inside the icons folder.
    """
    try:
        # List all directories (subfolders) in the ICON_FOLDER_PATH
        subfolders = [f.name for f in os.scandir(ICON_FOLDER_PATH) if f.is_dir()]

        # Print the subfolder names
        for folder in subfolders:
            print(folder)
    except Exception as e:
        print(f"An error occurred: {e}")

# Run the function
if __name__ == "__main__":
    list_icon_folders()
