"""
Simple Hello World Example for TRAE IDE

This is a basic Python example to demonstrate how to use this repository
with TRAE IDE.
"""


def greet(name: str) -> str:
    """
    Generate a greeting message.
    
    Args:
        name: The name of the person to greet
        
    Returns:
        A greeting message string
    """
    return f"Hello, {name}! Welcome to TRAE IDE."


def main():
    """Main function to run the example."""
    print(greet("Developer"))
    print("\nThis repository is ready for TRAE IDE!")
    print("You can now:")
    print("- Edit code with AI assistance")
    print("- Use AI coding rules from .trae/rules/")
    print("- Synchronize with Git through TRAE IDE")
    print("- Extend functionality with MCP servers")


if __name__ == "__main__":
    main()
