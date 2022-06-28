import os
import tensorflow as tf

from tensorflow.keras import layers
from tensorflow.keras import losses

max_features = 10000
sequence_length = 250
embedding_dim = 16
epochs = 10

def vectorize_text(text, label):
  text = tf.expand_dims(text, -1)
  return vectorize_layer(text), label

url = "https://ai.stanford.edu/~amaas/data/sentiment/aclImdb_v1.tar.gz"

dataset = tf.keras.utils.get_file("aclImdb_v1", url,
                                    untar=True, cache_dir='.',
                                    cache_subdir='')

dataset_dir = os.path.join(os.path.dirname(dataset), 'aclImdb')

batch_size = 32

raw_train_ds = tf.keras.utils.text_dataset_from_directory(
    dataset_dir + '/train', 
    batch_size=batch_size, 
    validation_split=0.2, 
    subset='training', 
    seed=42)
    
raw_val_ds = tf.keras.utils.text_dataset_from_directory(
    dataset_dir + '/test', 
    batch_size=batch_size, 
    validation_split=0.2, 
    subset='validation', 
    seed=42)
    
vectorize_layer = layers.TextVectorization(
    standardize='lower_and_strip_punctuation',
    max_tokens=max_features,
    output_mode='int',
    output_sequence_length=sequence_length)

train_text = raw_train_ds.map(lambda x, y: x)
vectorize_layer.adapt(train_text)

train_ds = raw_train_ds.map(vectorize_text)
val_ds = raw_val_ds.map(vectorize_text)

model = tf.keras.Sequential([
  layers.Embedding(max_features + 1, embedding_dim),
  layers.Dropout(0.2),
  layers.GlobalAveragePooling1D(),
  layers.Dropout(0.2),
  layers.Dense(1)])

model.compile(loss=losses.BinaryCrossentropy(from_logits=True),
              optimizer='adam',
              metrics=tf.metrics.BinaryAccuracy(threshold=0.0))
              
history = model.fit(
    train_ds,
    validation_data=val_ds,
    epochs=epochs)

export_model = tf.keras.Sequential([
  vectorize_layer,
  model,
  layers.Activation('sigmoid')
])

export_model.compile(
    loss=losses.BinaryCrossentropy(from_logits=False), optimizer="adam", metrics=['accuracy']
)


export_model.save('./model')