import json

# Read the JSON file
with open('products.json', 'r') as file:
    products = json.load(file)

# Create a dictionary to store unique products
unique_products = {}

# Iterate through the products and keep only the first occurrence of each name
for product in products:
    name = product['name']
    if name not in unique_products:
        unique_products[name] = product

# Convert the dictionary values back to a list
unique_products_list = list(unique_products.values())

# Sort the list by id
unique_products_list.sort(key=lambda x: x['id'])

# Write the unique products back to a JSON file
with open('unique_products.json', 'w') as file:
    json.dump(unique_products_list, file, indent=2)

print(f"Original product count: {len(products)}")
print(f"Unique product count: {len(unique_products_list)}")
print("Unique products have been saved to 'unique_products.json'")
