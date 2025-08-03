import os

# Folder that contains your HTML articles
folder_path = "./"
html_files = [f for f in os.listdir(folder_path) if f.startswith("article") and f.endswith(".html")]

# HTML blocks to insert
navbar_div = '<div include-html="components/navbar.html"></div>'
footer_div = '<div include-html="components/footer.html"></div>'
script_block = '''
<script src="js/include.js"></script>
<script>
  includeHTML(() => {
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.getElementById("nav-links");

    if (mobileMenu && navLinks) {
      mobileMenu.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
        navLinks.classList.toggle("active");
        document.body.style.overflow = navLinks.classList.contains("active") ? "hidden" : "";
      });

      document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
          mobileMenu.classList.remove("active");
          navLinks.classList.remove("active");
          document.body.style.overflow = "";
        });
      });
    }
  });
</script>
'''

for file_name in html_files:
    file_path = os.path.join(folder_path, file_name)
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip if navbar/footer already exists
    if 'include-html="components/navbar.html"' in content:
        print(f"[SKIPPED] {file_name} already modified.")
        continue

    # Insert navbar after <body>
    content = content.replace("<body>", f"<body>\n  {navbar_div}")

    # Insert footer before </body>
    content = content.replace("</body>", f"  {footer_div}\n{script_block}\n</body>")

    # Save back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"[DONE] Modified: {file_name}")
