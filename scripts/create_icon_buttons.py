import re

# Paths to files
INDEX_FILE = "index.d.ts"  # Update this path to your `index.d.ts` file
BUTTON_LIST_OUTPUT_FILE = "ButtonIconList.tsx"  # Output file for the button list component

def extract_icons(file_path):
    """
    Extracts icon names from the `index.d.ts` file.
    """
    with open(file_path, "r") as file:
        content = file.read()

    # Regex to match lines like: `export declare const IconName: IconType;`
    pattern = r"export declare const (\w+): IconType;"
    return re.findall(pattern, content)


def generate_button_icon_list_tsx(icons):
    """
    Generates the content of ButtonIconList.tsx.
    """
    # Group icons by their prefixes (e.g., Ai, Ci, etc.)
    grouped_icons = {}
    for icon in icons:
        # Extract the prefix by taking the lowercase version of the letters before the first capital letter in the name
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

    # Combine everything into the ButtonIconList component structure
    button_icon_list_tsx = (
        f'import {{ SButtonListContainer, SButtonContainer, SButton, SButtonLabel }} from "./ButtonIconList.styles";\n'
        + "\n".join(imports)
        + "\n\nconst ButtonIconList = () => (\n"
        + "  <SButtonListContainer>\n"
        + "\n".join(jsx_elements)
        + "\n  </SButtonListContainer>\n"
        + ");\n\nexport default ButtonIconList;\n"
    )

    return button_icon_list_tsx


def main():
    """
    Main function to process the `index.d.ts` file and create ButtonIconList.tsx.
    """
    try:
        # Extract icons from the `index.d.ts` file
        icons = extract_icons(INDEX_FILE)

        # Limit to 100 icons for the output
        icons = icons[:100]

        # Generate ButtonIconList.tsx content
        button_icon_list_content = generate_button_icon_list_tsx(icons)

        # Write to the ButtonIconList.tsx file
        with open(BUTTON_LIST_OUTPUT_FILE, "w") as file:
            file.write(button_icon_list_content)

        print(f"ButtonIconList.tsx has been successfully generated with {len(icons)} icons.")
    except Exception as e:
        print(f"An error occurred: {e}")


if __name__ == "__main__":
    main()
