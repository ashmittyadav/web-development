import tkinter as tk
from tkinter import messagebox

# Function to validate login
def login():
    username = entry_username.get()
    password = entry_password.get()
    
    # Dummy check (replace with database authentication if needed)
    if username == "admin" and password == "password":
        messagebox.showinfo("Login Successful", "Welcome, Admin!")
    else:
        messagebox.showerror("Login Failed", "Invalid username or password")

# Create main window
root = tk.Tk()
root.title("Login Window")
root.geometry("300x200")

# Username label and entry
tk.Label(root, text="Username:").pack(pady=5)
entry_username = tk.Entry(root)
entry_username.pack(pady=5)

# Password label and entry
tk.Label(root, text="Password:").pack(pady=5)
entry_password = tk.Entry(root, show="*")  # Hides password input
entry_password.pack(pady=5)

# Login button
tk.Button(root, text="Login", command=login).pack(pady=10)

# Run the Tkinter event loop
root.mainloop()
