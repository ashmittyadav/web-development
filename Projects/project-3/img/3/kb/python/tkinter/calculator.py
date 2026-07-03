import tkinter as tk

# function to add
def add():
    result.set(float(entry1.get()) + float(entry2.get()))

root = tk.Tk()
root.title("Simple calculator")

entry1 = tk.Entry(root)
entry1.pack()
entry2 = tk.Entry(root)
entry2.pack()

result = tk.DoubleVar()
result_label = tk.Label(root, textvariable = result)
result_label.pack()

add_button = tk.Button(root, text = "add", command = add)
add_button.pack()

root.mainloop()
