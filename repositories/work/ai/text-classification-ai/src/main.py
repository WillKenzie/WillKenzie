import tensorflow as tf

model = tf.keras.models.load_model('model')
estimate = model.predict(["That was horrible"])
print(estimate)
