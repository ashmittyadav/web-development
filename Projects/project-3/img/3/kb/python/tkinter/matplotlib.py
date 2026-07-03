import numpy as np
import matplotlib.pyplot as plt

# Data
foods = ["Meat", "Banana", "Avocados", "Sweet Potatoes", "Spinach", "Watermelon", 
         "Coconut water", "Beans", "Legumes", "Tomato"]
calories = [250, 130, 140, 120, 20, 20, 10, 50, 40, 19]
potassium = [40, 55, 20, 30, 40, 32, 10, 26, 25, 20]
fat = [8, 5, 3, 6, 1, 1.5, 0, 2, 1.5, 2.5]

# Bar width and x locations
bar_width = 0.25
x = np.arange(len(foods))

# Create grouped bar chart
plt.figure(figsize=(12, 6))
plt.bar(x, calories, width=bar_width, color='skyblue', edgecolor='black', label="Calories")
plt.bar(x + bar_width, potassium, width=bar_width, color='lightgreen', edgecolor='black', label="Potassium")
plt.bar(x + 2 * bar_width, fat, width=bar_width, color='salmon', edgecolor='black', label="Fat")

# Labels and title
plt.xlabel("Food Items")
plt.ylabel("Nutrient Value")
plt.title("Nutrient Comparison per Food Item")
plt.xticks(x + bar_width, foods, rotation=45)  # Adjust x-ticks for readability
plt.legend()

# Show plot
plt.show()
