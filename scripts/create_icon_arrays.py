import os
import re

# Path to the icons folder containing subfolders with index.d.ts files
ICON_FOLDER_PATH = "./icons"

# Output file where the final data will be saved
OUTPUT_FILE_PATH = "iconsArray.ts"

# Function to extract icon names from the index.d.ts content
def extract_icons_from_dts(dts_content):
    # Regex pattern to match the export statements of the icons
    pattern = r"export declare const (\w+): IconType;"
    return re.findall(pattern, dts_content)

# Function to generate the TypeScript array content
def generate_icon_array(icon_set_name, icons):
    array_data = f"// {icon_set_name} Icons\n"
    array_data += f"export const {icon_set_name}IconData = [\n"

    # Loop through the icons and create the required array of objects
    for icon in icons:
        array_data += f"  {{ label: '{icon}' }},\n"

    array_data += "];\n\n"
    return array_data

# Main function to process the icon folder
def process_icons_folder():
    all_icon_arrays = ""
    all_icon_data = "export const allIconData = [\n"

    # Traverse through all subfolders in the icon folder
    for subfolder in os.listdir(ICON_FOLDER_PATH):
        subfolder_path = os.path.join(ICON_FOLDER_PATH, subfolder)

        # Only process subfolders
        if os.path.isdir(subfolder_path):
            dts_file_path = os.path.join(subfolder_path, "index.d.ts")

            if os.path.exists(dts_file_path):
                with open(dts_file_path, "r") as dts_file:
                    dts_content = dts_file.read()

                # Extract icon names from the dts content
                icons = extract_icons_from_dts(dts_content)

                # Generate the icon array for the specific icon set
                icon_array = generate_icon_array(subfolder, icons)
                all_icon_arrays += icon_array

                # Add the icon data to the allIconData array
                all_icon_data += f"  {subfolder}IconData,\n"

    # Close the allIconData array and write all data to the output file
    all_icon_data += "];\n"

    # Write the final array to the output file
    with open(OUTPUT_FILE_PATH, "w") as output_file:
        output_file.write(all_icon_arrays)
        output_file.write(all_icon_data)

    print(f"Icon data has been written to {OUTPUT_FILE_PATH}")

# Run the script
if __name__ == "__main__":
    process_icons_folder()
