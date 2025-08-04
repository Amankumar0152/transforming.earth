import os

# Folder that contains your HTML articles
folder_path = "./"
html_files = [f for f in os.listdir(folder_path) if f.startswith("article") and f.endswith(".html")]

# Favicon line to insert
favicon_line = '<link rel="icon" href="icons/tree.png">'

for file_name in html_files:
    file_path = os.path.join(folder_path, file_name)
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip if favicon already exists
    if favicon_line in content:
        print(f"[SKIPPED] {file_name} already has favicon.")
        continue

    # Insert favicon after <head>
    if "<head>" in content:
        content = content.replace("<head>", f"<head>\n  {favicon_line}")
    else:
        print(f"[WARNING] <head> tag not found in {file_name}, skipped.")
        continue

    # Save the modified file
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"[DONE] Favicon added in: {file_name}")
