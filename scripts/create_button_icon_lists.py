import os
import re
from pathlib import Path

# Paths to the base folder containing icon subfolders
ICON_FOLDER_PATH = "./icons"  # Path to the folder containing all subfolders with icon sets
OUTPUT_FOLDER = "./lists"  # Path to output folder where generated .tsx files will be saved


def extract_icons(file_path):
    """
    Extracts icon names from the `index.d.ts` file.
    """
    with open(file_path, "r") as file:
        content = file.read()

    # Regex to match lines like: `export declare const IconName: IconType;`
    pattern = r"export declare const (\w+): IconType;"
    return re.findall(pattern, content)


def generate_button_icon_list_tsx(icons, subfolder_name):
    """
    Generates the content of ButtonIconList.tsx for the given icon set.
    """
    # Group icons by their prefixes (e.g., Ai, Ci, etc.)
    grouped_icons = {}
    for icon in icons:
        # Extract the prefix (first capital letters sequence) and convert to lowercase
        prefix = re.match(r"([A-Z][a-z]+)", icon).group(1).lower()
        grouped_icons.setdefault(prefix, []).append(icon)

    # Create import statements
    imports = []
    jsx_elements = []
    for prefix, icons_list in grouped_icons.items():
        imports.append(f'import {{ {", ".join(icons_list)} }} from "react-icons/{prefix}";')
        for icon in icons_list:
            jsx_elements.append(
                f"""        <SButtonContainer>
            <SButton>
                <{icon} size={{25}} aria-label={{"{icon}"}} />
            </SButton>
            <SButtonLabel>{icon}</SButtonLabel>
        </SButtonContainer>"""
            )

    # Dynamically create the component name using the subfolder_name
    component_name = f"ButtonIconList{subfolder_name.capitalize()}"

    # Combine everything into the ButtonIconList component structure
    button_icon_list_tsx = (
        f'import {{ SButton, SButtonContainer, SButtonLabel, SButtonListContainer }} from "../ButtonIconList";\n'
        + "\n".join(imports)
        + "\n\nexport const {component_name} = () => (\n"
        + "  <SButtonListContainer>\n"
        + "\n".join(jsx_elements)
        + "\n  </SButtonListContainer>\n"
        + ");\n\nexport default {component_name};\n"
    )

    # Use `component_name` inside the f-string properly
    button_icon_list_tsx = button_icon_list_tsx.replace("{component_name}", component_name)

    return button_icon_list_tsx


def main():
    """
    Main function to iterate through all subfolders in the ICON_FOLDER_PATH and generate a ButtonIconList.tsx
    file for each icon set.
    """
    try:
        # Iterate through all subfolders in the ICON_FOLDER_PATH
        for subfolder in os.listdir(ICON_FOLDER_PATH):
            subfolder_path = Path(ICON_FOLDER_PATH) / subfolder

            if subfolder_path.is_dir():  # Only process directories
                index_file = subfolder_path / "index.d.ts"

                if index_file.exists():
                    # Extract icons from the `index.d.ts` file
                    icons = extract_icons(index_file)

                    # Limit to 100 icons for the output
                    icons = icons[:100]

                    # Generate ButtonIconList.tsx content
                    button_icon_list_content = generate_button_icon_list_tsx(icons, subfolder)

                    # Determine output file path (e.g., ButtonIconListAi.tsx, ButtonIconListBi.tsx)
                    output_file_path = Path(OUTPUT_FOLDER) / f"ButtonIconList{subfolder.capitalize()}.tsx"

                    # Write to the ButtonIconList.tsx file
                    with open(output_file_path, "w") as file:
                        file.write(button_icon_list_content)

                    print(f"Generated {output_file_path.name} with {len(icons)} icons from {subfolder}.")
                else:
                    print(f"Skipping {subfolder}: No index.d.ts found.")
    except Exception as e:
        print(f"An error occurred: {e}")


if __name__ == "__main__":
    main()
