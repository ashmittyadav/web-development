from PIL import Image, ImageDraw, ImageFont
import matplotlib.pyplot as plt

# Load the image
image_path = "1000033977.png"  # Make sure your image is in the same folder
image = Image.open(image_path).convert("RGBA")

# Prepare draw object
draw = ImageDraw.Draw(image)

# Define fonts (update path if needed)
try:
    font_bold = ImageFont.truetype("arialbd.ttf", 32)
    font_regular = ImageFont.truetype("arial.ttf", 28)
except IOError:
    font_bold = ImageFont.load_default()
    font_regular = ImageFont.load_default()

# Updated boys list
boys_list = [
    "1. Paarth Kochar",
    "2. Ayushman",
    "3. Nakul",
    "4. Harsh Pal",
    "5. Yug Bhardwaj",
    "6. Ronak",
    "7. Khsitij",
    "8. Aniket Shishodia",
    "9. Arjeet Bhatia"
]

# Girls list
girls_list = [
    "1. Divya Bisht",
    "2. Manya Kansal",
    "3. Jasmeen Kaur",
    "4. Shagun Chauhan",
    "5. Mahi Bansal",
    "6. Pratishta Chaudhary",
    "7. Aditi",
    "8. Simran Garg",
    "9. Aarti Sharma",
    "10. Apoorva Singhal",
    "11. Astha Sharma",
    "12. Manyq Tyagi",
    "13. Himanshi Sirohi",
    "14. Aradhya",
    "15. Vedika"
]

# Coordinates for BOYS and GIRLS title text
boys_title_position = (70, 120)
girls_title_position = (1080, 120)

# Draw "BOYS" and "GIRLS" titles
draw.text(boys_title_position, "BOYS", fill="white", font=font_bold)
draw.text(girls_title_position, "GIRLS", fill="white", font=font_bold)

# Draw boys list
x_boys, y_boys_start = 70, 160
for i, name in enumerate(boys_list):
    draw.text((x_boys, y_boys_start + i * 35), name, fill="white", font=font_regular)

# Draw girls list
x_girls, y_girls_start = 1080, 160
for i, name in enumerate(girls_list):
    draw.text((x_girls, y_girls_start + i * 35), name, fill="white", font=font_regular)

# Show or save updated image
plt.figure(figsize=(16, 9))
plt.imshow(image)
plt.axis('off')
plt.tight_layout()
plt.show()

# Optionally save the image
# image.save("updated_recruitment_2025.png")