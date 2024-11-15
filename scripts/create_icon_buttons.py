import re

# Paths to files
INDEX_FILE = "index.d.ts"  # Update this path to your `index.d.ts` file
OUTPUT_FILE = "App.tsx"    # Update this path to your desired `App.tsx` output file

def extract_icons(file_path):
    """
    Extracts icon names from the `index.d.ts` file.
    """
    with open(file_path, "r") as file:
        content = file.read()

    # Regex to match lines like: `export declare const IconName: IconType;`
    pattern = r"export declare const (\w+): IconType;"
    return re.findall(pattern, content)


def generate_app_tsx(icons):
    """
    Generates the content of the App.tsx file.
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

    # Combine everything into the App.tsx structure
    app_tsx = (
        f'import {{ SAppContainerColumn, SButtonListContainer, SButtonContainer, SButton, SButtonLabel }} from "./App.styles.ts";\n'
        + "\n".join(imports)
        + "\n\nfunction App() {\n"
        + "  return (\n"
        + "    <SAppContainerColumn>\n"
        + "      <SButtonListContainer>\n"
        + "\n".join(jsx_elements)
        + "\n      </SButtonListContainer>\n"
        + "    </SAppContainerColumn>\n"
        + "  );\n"
        + "}\n\nexport default App;\n"
    )

    return app_tsx


def main():
    """
    Main function to process the `index.d.ts` file and create App.tsx.
    """
    try:
        # Extract icons from the `index.d.ts` file
        icons = extract_icons(INDEX_FILE)

        # Limit to 100 icons for the output
        icons = icons[:100]

        # Generate App.tsx content
        app_content = generate_app_tsx(icons)

        # Write to the App.tsx file
        with open(OUTPUT_FILE, "w") as file:
            file.write(app_content)

        print(f"App.tsx has been successfully generated with {len(icons)} icons.")
    except Exception as e:
        print(f"An error occurred: {e}")


if __name__ == "__main__":
    main()
