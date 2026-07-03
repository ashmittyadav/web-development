def reverse_with_commas(input_file, output_file):
    try:
        # Read the file content
        with open(input_file, "r") as file:
            content = file.read().strip()  # Read and remove extra spaces/newlines
        
        # Add commas between characters
        modified_content = ",".join(content)
        
        # Write the modified content to a new file
        with open(output_file, "w") as file:
            file.write(modified_content)

        print("File content modified successfully!")
        print("Output:", modified_content)

    except FileNotFoundError:
        print("Error: The file does not exist!")

# Example usage
input_file = "input.txt"   # Your input file
output_file = "output.txt" # Your output file
reverse_with_commas(input_file, output_file)
