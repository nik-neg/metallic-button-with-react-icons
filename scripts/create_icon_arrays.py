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
def generate_icon_array(icon_set_name, icons, relative_path):
    array_data = f"// {icon_set_name} Icons\n"
    array_data += f"export const {icon_set_name}IconData = [\n"

    # Loop through the icons and create the required array of objects
    for icon in icons:
        array_data += f"  {{ label: '{icon}', relativePath: '{relative_path}' }},\n"

    array_data += "];\n\n"
    return array_data

# Main function to process the icon folder
def process_icons_folder():
    all_icon_arrays = ""
    all_icon_data = "export const allIconData = [\n"

    # List to hold each icon data array reference
    icon_data_references = []

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

                # Generate the icon array for the specific icon set, adding relativePath
                icon_array = generate_icon_array(subfolder, icons, subfolder)
                all_icon_arrays += icon_array

                # Add the icon data reference to the list
                icon_data_references.append(f"{subfolder}IconData")

    # Construct the allIconData array using destructuring
    all_icon_data += ",\n  ".join([f"...{ref}" for ref in icon_data_references])
    all_icon_data += "\n];\n"

    # Write the final array to the output file
    with open(OUTPUT_FILE_PATH, "w") as output_file:
        output_file.write(all_icon_arrays)
        output_file.write(all_icon_data)

    print(f"Icon data has been written to {OUTPUT_FILE_PATH}")

# Run the script
if __name__ == "__main__":
    process_icons_folder()
