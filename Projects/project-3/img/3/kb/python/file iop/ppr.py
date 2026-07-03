def sort_words():
    # Accept user input
    words = input("Enter comma-separated words: ").split(", ")
    
    # Sort the words alphabetically
    sorted_words = sorted(words)
    
    # Join the words with commas and print the result
    print(", ".join(sorted_words))

# Example usage
sort_words()
