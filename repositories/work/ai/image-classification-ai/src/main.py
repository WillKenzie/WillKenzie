import tensorflow as tf

model = tf.keras.models.load_model(
  "./model", custom_objects=None, compile=True, options=None
)

with open("modeldetails.txt", "r") as details:
  class_names = details.split(",")

predictions = model.predict("This was pretty good")
print(predictions[0])