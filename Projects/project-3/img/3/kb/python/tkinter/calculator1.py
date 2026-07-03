import tkinter as tk

def on_click(button_text):
    if button_text == "C":
        entry_var.set("")  # Clear input field
    elif button_text == "=":
        try:
            result = eval(entry_var.get())  # Evaluate expression
            entry_var.set(result)
        except Exception:
            entry_var.set("Error")
    else:
        entry_var.set(entry_var.get() + button_text)  # Append button text

# Create the main window
root = tk.Tk()
root.title("Simple Calculator")

entry_var = tk.StringVar()
entry = tk.Entry(root, textvariable=entry_var, font=("Arial", 20), justify="right", bd=10)
entry.grid(row=0, column=0, columnspan=4)

# Buttons layout
buttons = [
    ("1", "2", "3"),
    ("4", "5", "6"),
    ("7", "8", "9"),
    ("0"),
    ("+", "-", "*"),
    ("/", "=", "C")
]

for r, row in enumerate(buttons):
    for c, text in enumerate(row):
        btn = tk.Button(root, text=text, bg = "purple",  fg="white", font=("Arial", 10), width=20, height=2,
                         command=lambda t=text: on_click(t))
        btn.grid(row=r + 1, column=c)

root.mainloop()
