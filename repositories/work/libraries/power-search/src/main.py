import requests
import json

def request(url, params=None):
  headers = {
  # 'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
  'User-Agent': 'WilliamK Meta Test\
    (admin@williamk.dev)'
  }
  
  response = requests.get(url, headers=headers, params=params)
  return response.json()

query = input("What is your search query?\n> ")
data = {}

 # Get food information 
try:
  data["allergens"] = request(f" https://world.openfoodfacts.org/api/v0/product/{query}.json".format(query=query))["product"]["allergens"].replace("en:", "").replace(",", ", ")
  data["warnings"] = list(map(lambda x: x.replace('en:', ''), request(f" https://world.openfoodfacts.org/api/v0/product/{query}.json".format(query=query))["product"]["ingredients_analysis"].keys()))
  data["nutrients"] = request(f" https://world.openfoodfacts.org/api/v0/product/{query}.json".format(query=query))["product"]["nutrient_levels"]
except:
  pass

# Get ZIP code information
try:
  data["longitude"] = request(f" https://api.zippopotam.us/us/{query}".format(query=query))["places"][0]["longitude"]
  data["latitude"] = request(f" https://api.zippopotam.us/us/{query}".format(query=query))["places"][0]["latitude"]
  data["place_name"] = request(f" https://api.zippopotam.us/us/{query}".format(query=query))["places"][0]["place name"]
except:
  pass

# Get some Wikimedia data
try:
  data["description"] = request(f"https://api.wikimedia.org/core/v1/wikipedia/en/search/title?q={query}".format(query=query))["pages"][0]["description"]
except:
  pass

try:
  data["definition"] = request(f"https://api.wikimedia.org/core/v1/wiktionary/en/search/title?q={query}".format(query=query))["pages"][0]["description"]
except:
  pass

try:
  data["quote"] = request(f"https://api.wikimedia.org/core/v1/wikiquote/en/search/title?q={query}".format(query=query))["pages"][0]["description"]
except:
  pass

try:
  data["voyage"] = request(f"https://api.wikimedia.org/core/v1/wikivoyage/en/search/title?q={query}".format(query=query))["pages"][0]["description"]
except:
  pass

try:
  data["news"] = request(f"https://api.wikimedia.org/core/v1/wikinews/en/search/title?q={query}".format(query=query))["pages"][0]["excerpt"]
except:
  pass

try:
  data["books"] = request(f"https://api.wikimedia.org/core/v1/wikibooks/en/search/title?q={query}".format(query=query))["pages"][0]["description"]
except:
  pass

try:
  data["sources"] = request(f"https://api.wikimedia.org/core/v1/wikisource/en/search/title?q={query}".format(query=query))["pages"][0]["description"]
except:
  pass

try:
  data["materials"] = request(f"https://api.wikimedia.org/core/v1/wikiversity/en/search/title?q={query}".format(query=query))["pages"][0]["description"]
except:
  pass

print("Some content is provided by Wikimedia Wikis, such as Wikipedia or Wikiversity.")
print(data)