import os

# Folder containing your HTML files
folder_path = "./"
html_files = [f for f in os.listdir(folder_path) if f.startswith("article") and f.endswith(".html")]

# Lines to insert
favicon_line = '<link rel="icon" href="icons/tree.png">'
theme_color_line = '<meta name="theme-color" content="#2C3E50">'

for file_name in html_files:
    file_path = os.path.join(folder_path, file_name)
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip if both lines already exist
    if favicon_line in content and theme_color_line in content:
        print(f"[SKIPPED] {file_name} already has favicon and theme color.")
        continue

    if "<head>" in content:
        insert_block = f"<head>\n  {favicon_line}\n  {theme_color_line}"
        content = content.replace("<head>", insert_block)
    else:
        print(f"[WARNING] <head> tag not found in {file_name}, skipped.")
        continue

    # Save changes
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"[DONE] Updated: {file_name}")
